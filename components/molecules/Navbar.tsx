"use client"
import Image from "next/image"
import Logo from "@/public/logo.svg"
import { Button } from "../ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import { WandSparkles } from "lucide-react"

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex py-4 items-center justify-between px-6 fixed w-full z-20 backdrop-blur-lg bg-transparent shadow-2xs shadow-red-100">
      {/* Logo */}
      <div className="flex gap-1 justify-center items-center">
        <Image src={Logo} alt="Stardew Labs" height={30} width={30} />
        <h2 className="text-xl font-semibold">Stardew Labs</h2>
      </div>
      
      {/* Desktop Links */}
      <div className="hidden md:block">
        <ul className="flex gap-6">
          <li className="hover:text-primary hover:cursor-pointer transition-colors">Services</li>
          <li className="hover:text-primary hover:cursor-pointer transition-colors">Portfolio</li>
          <li className="hover:text-primary hover:cursor-pointer transition-colors">Reviews</li>
        </ul>
      </div>
      
      {/* Get Started Button */}
      <div className="hidden md:block">
      <Button className="px-[30px] py-[10px] bg-black hover:cursor-pointer transition-colors">
                <WandSparkles></WandSparkles>
                START
              </Button>
      </div>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2"
        >
          <Menu />
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full right-0 left-0 bg-white shadow-md p-4 z-50 md:hidden">
          <ul className="flex flex-col gap-6">
            <li className="hover:text-primary hover:cursor-pointer py-2 border-b">Services</li>
            <li className="hover:text-primary hover:cursor-pointer py-2 border-b">Portfolio</li>
            <li className="hover:text-primary hover:cursor-pointer py-2 border-b">Reviews</li>
            <li className="pt-2">
              <Button className="px-[30px] py-[10px] bg-black">
                <WandSparkles></WandSparkles>
                START
              </Button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar