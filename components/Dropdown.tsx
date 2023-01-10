import { useState } from 'react'

export default function Dropdown({
  title,
  number,
  text,
  children,
  strong,
  dropdownRef,
  formRef,
  isSent,
}: any) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="flex flex-col">
      <div
        className={
          isOpen
            ? 'flex border-black border-y-2'
            : 'flex border-black border-t-2'
        }
        onClick={() => setIsOpen(!isOpen)}
        ref={dropdownRef}
      >
        <div className="px-4 font-mono mt-3 text-sm h-14">
          {number}
          <div className="polygon ml-1"></div>
        </div>
        <p className="uppercase text-3xl font-optima self-center sm:ml-12">
          {title}
        </p>
      </div>
      {isOpen && !isSent ? (
        <div
          className="max-w-xl self-center mt-16 font-mono mx-7"
          ref={formRef}
        >
          {strong ? <strong>{strong}</strong> : null}
          {text}
          {children}
        </div>
      ) : null}
      {isOpen && isSent ? (
        <div
          className="max-w-xl self-center mt-16 font-mono mx-7 flex flex-col items-center"
          ref={formRef}
        >
          <strong>Thank you.</strong>
          <br></br>
          <p className="mb-44 text-center">
            Your information has been submitted. We will get back to you within
            one business day.
          </p>{' '}
        </div>
      ) : null}
    </section>
  )
}
