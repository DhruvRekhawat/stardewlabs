import Image from "next/image"
import Meeting from "@/public/Minimalist Rocket Art.jpeg"

const Numbers = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-6'>
      <Image src={Meeting} alt="collaborative meeting" width={100} className="rounded-4xl shadow hover:rotate-12 transition-all hover:cursor-pointer"></Image>
      
      <div className='flex flex-col justify-center items-center'>
        <h3 className='text-2xl md:text-4xl text-center font-semibold mb-8'>Finding <span className="font-semibold text-primary">Uniqueness</span>, Designing <span className="font-semibold text-primary">Quality</span>, Boosting <span className="font-semibold text-primary">Revenue</span> <br />Let&apos;s Bring Your Ideas To Life Together.</h3>
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl'>
        <div className='flex flex-col items-center border-dashed border-2 border-red-300 rounded-3xl p-8'>
          <div className='text-6xl font-bold flex items-center'>
            15<span className='text-primary text-5xl'>+</span>
          </div>
          <h4 className='text-xl font-medium mt-2'>Projects Delivered</h4>
          <p className='text-center text-gray-600 mt-4'>We&apos;ve successfully completed over 15 projects—and we&apos;re just getting started!</p>
        </div>
        
        <div className='flex flex-col items-center border-dashed border-2 border-red-300 rounded-3xl p-8'>
          <div className='text-6xl font-bold flex items-center'>
            70<span className='text-primary text-5xl'>%</span>
          </div>
          <h4 className='text-xl font-medium mt-2'>Business Growth</h4>
          <p className='text-center text-gray-600 mt-4'>Our strategies have helped clients achieve up to 70% revenue growth in just one year!</p>
        </div>
        
        <div className='flex flex-col items-center border-dashed border-2 border-red-300 rounded-3xl p-8'>
          <div className='text-6xl font-bold flex items-center'>
            20<span className='text-primary text-5xl'>+</span>
          </div>
          <h4 className='text-xl font-medium mt-2'>Happy Clients</h4>
          <p className='text-center text-gray-600 mt-4'>More than 20 satisfied clients trust us to bring their ideas to life.</p>
        </div>
      </div>
    </div>
  )
}

export default Numbers