import { WandSparkles } from "lucide-react"
import { Button } from "../ui/button"
const Hero = () => {
  return (
    <div className='md:px-10 flex flex-col gap-2 relative'>

      <p className="px-4 py-3 rounded-full bg-red-100 w-fit text-xs font-semibold -rotate-6">Open for Awesomeness</p>
      <h1 className='text-4xl md:text-6xl max-w-3xl font-medium md:leading-16 leading-10 '> Building Technology For The Most <span className="font-black text-primary">Ambitious</span> Startups 
      </h1>
        <p className='max-w-xl text-zinc-700 font-semibold'>Your go-to agency for designs that inspire and strategies that deliver. We turn ideas into lasting impressions.</p>
        <Button className="px-[60px] py-[20px] bg-black hover:cursor-pointer transition-colors w-fit shadow-accent my-2">
                <WandSparkles></WandSparkles>
                START YOUR JOURNEY
              </Button>
        <div className="flex items-center space-x-2">
              <div className="flex">
                <span className="text-orange-500">★</span>
                <span className="text-orange-500">★</span>
                <span className="text-orange-500">★</span>
                <span className="text-orange-500">★</span>
                <span className="text-orange-500">★</span>
              </div>
              <span className="text-gray-600">Over 20+ Five Star Reviews</span>
            </div>
      </div>
  )
}

export default Hero