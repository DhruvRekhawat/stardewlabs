// "use client"

// import type React from "react"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Calendar, Clock, Send, Sparkles } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Textarea } from "@/components/ui/textarea"

// export default function BookACallForm() {
//   const [formState, setFormState] = useState({
//     name: "",
//     email: "",
//     company: "",
//     projectType: "",
//     message: "",
//   })

//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isSubmitted, setIsSubmitted] = useState(false)

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false)
//       setIsSubmitted(true)

//       // Reset form after showing success message
//       setTimeout(() => {
//         setIsSubmitted(false)
//         setFormState({
//           name: "",
//           email: "",
//           company: "",
//           projectType: "",
//           message: "",
//         })
//       }, 3000)
//     }, 1500)
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormState({
//       ...formState,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const handleSelectChange = (value: string) => {
//     setFormState({
//       ...formState,
//       projectType: value,
//     })
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 to-black">
//       <Card className="w-full max-w-lg border-red-500 border-2 shadow-[0_0_30px_rgba(220,38,38,0.3)]">
//         <CardHeader className="bg-gradient-to-r from-red-700 to-red-500 text-white rounded-t-lg">
//           <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//             <CardTitle className="text-2xl flex items-center gap-2">
//               <Sparkles className="h-6 w-6" />
//               Book a Call With Our Team
//             </CardTitle>
//             <CardDescription className="text-red-100 mt-2">
//               Let's discuss how we can bring your digital vision to life
//             </CardDescription>
//           </motion.div>
//         </CardHeader>
//         <CardContent className="pt-6">
//           {isSubmitted ? (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               className="py-8 text-center"
//             >
//               <div className="mx-auto w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
//                 <Send className="h-8 w-8" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900">Request Received!</h3>
//               <p className="text-gray-600 mt-2">We'll get back to you within 24 hours.</p>
//             </motion.div>
//           ) : (
//             <form onSubmit={handleSubmit}>
//               <div className="space-y-4">
//                 <motion.div
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3, delay: 0.1 }}
//                 >
//                   <Label htmlFor="name" className="text-gray-700">
//                     Full Name
//                   </Label>
//                   <Input
//                     id="name"
//                     name="name"
//                     placeholder="John Doe"
//                     className="mt-1 border-red-200 focus:ring-red-500 focus:border-red-500"
//                     value={formState.name}
//                     onChange={handleChange}
//                     required
//                   />
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3, delay: 0.2 }}
//                 >
//                   <Label htmlFor="email" className="text-gray-700">
//                     Email Address
//                   </Label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     placeholder="john@example.com"
//                     className="mt-1 border-red-200 focus:ring-red-500 focus:border-red-500"
//                     value={formState.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3, delay: 0.3 }}
//                 >
//                   <Label htmlFor="company" className="text-gray-700">
//                     Company Name
//                   </Label>
//                   <Input
//                     id="company"
//                     name="company"
//                     placeholder="Acme Inc."
//                     className="mt-1 border-red-200 focus:ring-red-500 focus:border-red-500"
//                     value={formState.company}
//                     onChange={handleChange}
//                   />
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3, delay: 0.4 }}
//                 >
//                   <Label htmlFor="projectType" className="text-gray-700">
//                     Project Type
//                   </Label>
//                   <Select value={formState.projectType} onValueChange={handleSelectChange}>
//                     <SelectTrigger className="mt-1 border-red-200 focus:ring-red-500 focus:border-red-500">
//                       <SelectValue placeholder="Select project type" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="web">Web Development</SelectItem>
//                       <SelectItem value="app">App Development</SelectItem>
//                       <SelectItem value="both">Web & App Development</SelectItem>
//                       <SelectItem value="design">UI/UX Design</SelectItem>
//                       <SelectItem value="other">Other</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3, delay: 0.5 }}
//                 >
//                   <Label htmlFor="message" className="text-gray-700">
//                     Project Details
//                   </Label>
//                   <Textarea
//                     id="message"
//                     name="message"
//                     placeholder="Tell us about your project..."
//                     className="mt-1 border-red-200 focus:ring-red-500 focus:border-red-500 min-h-[100px]"
//                     value={formState.message}
//                     onChange={handleChange}
//                     required
//                   />
//                 </motion.div>
//               </div>

//               <motion.div
//                 className="flex items-center mt-6 text-sm text-gray-600"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.6 }}
//               >
//                 <Clock className="h-4 w-4 mr-2 text-red-500" />
//                 <p className="typing-animation">We reply to all inquiries within 24 hours</p>
//               </motion.div>
//             </form>
//           )}
//         </CardContent>
//         {!isSubmitted && (
//           <CardFooter className="bg-gray-50 rounded-b-lg border-t border-gray-100">
//             <motion.div className="w-full" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//               <Button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white"
//                 onClick={handleSubmit}
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? (
//                   <div className="flex items-center">
//                     <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-opacity-20 border-t-white rounded-full"></div>
//                     Processing...
//                   </div>
//                 ) : (
//                   <div className="flex items-center">
//                     <Calendar className="mr-2 h-4 w-4" />
//                     Schedule Your Call
//                   </div>
//                 )}
//               </Button>
//             </motion.div>
//           </CardFooter>
//         )}
//       </Card>
//     </div>
//   )
// }

import React from 'react'

const BookACall = () => {
  return (
    <div>BookACall</div>
  )
}

export default BookACall