import Image from 'next/image'
import snoots from '../public/snoots.jpeg'
import koda from '../public/koda.jpeg'
import oots from '../public/oots.jpeg'

export default function ImageBox() {
  return (
    <div className="flex gap-2 mt-8 mb-28">
      <Image src={snoots} alt="couple" width={300} height={400}></Image>
      <Image src={koda} alt="puppy" width={300} height={400}></Image>
      <Image src={oots} alt="family" width={300} height={400}></Image>
    </div>
  )
}
