import Image from 'next/image'
import snoots from '../public/snoots.jpeg'
import koda from '../public/koda.jpeg'
import oots from '../public/oots.jpeg'

export default function ImageBox({ divRef, leftScroll, rightScroll }: any) {
  return (
    <>
      <div
        className="flex gap-2 mt-8 overflow-x-scroll scroll-smooth snap-x snap-mandatory touch-pan-x"
        ref={divRef}
      >
        <Image
          src={snoots}
          alt="couple"
          width={300}
          height={400}
          className="w-auto h-auto snap-center relative"
        ></Image>
        <Image
          src={koda}
          alt="puppy"
          width={300}
          height={400}
          className="w-auto h-auto snap-center relative"
        ></Image>
        <Image
          src={oots}
          alt="family"
          width={300}
          height={400}
          className="w-auto h-auto snap-center relative"
        ></Image>
      </div>
      <div className="flex justify-center gap-4 mb-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
          onClick={rightScroll}
        >
          <path
            fillRule="evenodd"
            d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
          onClick={leftScroll}
        >
          <path
            fillRule="evenodd"
            d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </>
  )
}
