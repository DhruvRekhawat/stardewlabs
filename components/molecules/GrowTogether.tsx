import Ascend from "@/public/ascend-logo.webp"
import CaptainSide from "@/public/CS Logo.webp"
import Finzie from "@/public/finzie-logo.webp"
import Mycar from "@/public/mycar.jpg"
import NeuralCity from "@/public/neural-city-logo.avif"
import Image from "next/image"
const GrowTogether = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
    <h3 className='text-4xl text-center font-semibold mb-8'>We Don&apos;t Just Work Together <br />  We  <span className="font-semibold text-primary">Grow Together.</span></h3>
  </div>
        <div className='grid grid-cols-2 md:grid-cols-5 place-items-center mx-auto max-w-4xl gap-4'>
          <div className="p-8 rounded-4xl bg-gray-100">
            <Image src={Mycar} alt="logo" height={80} width={80} className=" bg-blend-multiply mix-blend-multiply"></Image>
          </div>
          <div className="p-8 rounded-4xl bg-gray-100 ">
            <Image src={Finzie} alt="logo" height={100} width={100}></Image>
          </div>
          <div className="p-8 rounded-4xl bg-gray-100 ">
            <Image src={NeuralCity} alt="logo" height={80} width={80}></Image>
          </div>
          <div className="p-8 rounded-4xl bg-gray-100 ">
            <Image src={CaptainSide} alt="logo" height={80} width={80}></Image>
          </div>
          <div className="p-8 rounded-4xl bg-gray-100 ">
            <Image src={Ascend} alt="logo" height={100} width={100}></Image>
          </div>
        </div>
  </div>
  )
}

export default GrowTogether