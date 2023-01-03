import { useState } from 'react'
import ImageBox from './ImageBox'

export default function Dropdown({ title, number, text }: any) {
  const [isOpen, setIsOpen] = useState(false)
  const lorem =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis animi atque, facere explicabo corporis rerum numquam possimus natus consectetur? Culpa eveniet tempore consectetur debitis illo, pariatur odio doloremque assumenda fugiat.'

  return (
    <section className="flex flex-col">
      <div
        className={
          isOpen
            ? 'flex border-black border-y-2'
            : 'flex border-black border-t-2'
        }
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="px-4 font-mono mt-3 text-sm h-14">
          {number}
          <div className="polygon ml-1"></div>
        </div>
        <p className="uppercase text-3xl font-optima self-center ml-12">
          {title}
        </p>
      </div>
      {isOpen ? (
        <div className="max-w-xl self-center mt-16 font-mono">
          {text}
          <ImageBox />
        </div>
      ) : null}
    </section>
  )
}
