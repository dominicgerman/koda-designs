import { useRef, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import daphnes from '../public/daphnes.png'
import urbanjungle from '../public/urbanjungle.png'
import utah from '../public/utah.png'
import sofar from '../public/sofar.png'
import dominicgerman from '../public/dominicgerman.png'

import { getAllPosts } from '../lib/api'

import Dropdown from '../components/Dropdown'
import ImageBox from '../components/ImageBox'
import ContactForm from '../components/ContactForm'

export default function Home({ allPosts: edges }: any) {
  const titles: string[] = [
    'The team',
    'Design & Product',
    'Engineering',
    'Contact',
  ]

  const textContent = [
    'We are tech nerds, animal lovers, and craft cocktail connoisseurs. We aren’t just partners in business, but partners in life. ',
    'UX Strategy, Content, Accessibility, Service Design, Brand + Identity, Information Architecture',
    'Web App Development, Mobile App Development, WordPress development + maintainence',
    'Tell us your story. Who are you, how’s it going, and most importantly - how can we help?',
  ]

  const strong = 'Enough about us. '

  const divRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

  const [isSent, setIsSent] = useState(false)

  const leftScroll = () => {
    divRef.current!.scrollLeft += 200
  }

  const rightScroll = () => {
    divRef.current!.scrollLeft -= 200
  }

  const executeScroll = () => {
    if (dropdownRef.current?.className.includes('border-t-2')) {
      dropdownRef.current?.click()
    }
    setTimeout(() => {
      formRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 0)
  }

  return (
    <>
      <Head>
        <title>Koda Designs</title>
        <meta name="description" content="UI/UX design + dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/dogfavicon.png" />
      </Head>
      <main>
        <div className="flex flex-col items-center gap-2.5 mt-8">
          <h1 className="text-7xl font-optima uppercase">Koda</h1>
          <h1 className="text-base font-roboto tracking-[0.4em] mb-16 uppercase">
            Designs
          </h1>
          <div className="mx-7 max-w-xl">
            <p className="font-roboto mb-12">
              We are a small design + dev shop based in Chicago. <br></br>{' '}
              <br></br> With over eight years of experience building great
              products, our passion is using the best technology to bring your
              vision to life. We are proud to create work that puts people first
              and inspires positive change. We adore our clients and look
              forward to collaborating.
            </p>
          </div>
          <p
            className="uppercase font-roboto underline underline-offset-4 mb-24 cursor-pointer"
            onClick={executeScroll}
          >
            Tell us about your project
          </p>
          <div className="flex flex-col min-w-full border-black border-b-2">
            <Dropdown title={titles[0]} number="001" text={textContent[0]}>
              <ImageBox
                divRef={divRef}
                leftScroll={leftScroll}
                rightScroll={rightScroll}
              />
            </Dropdown>
            <Dropdown title={titles[1]} number="002" text={textContent[1]}>
              <div className="grid grid-cols-2 gap-5 mt-16 mb-44">
                <a
                  href="https://dribbble.com/toriamia"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={sofar} alt="sofar website" height={250} />
                </a>
                <a
                  href="https://dribbble.com/toriamia"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={utah} alt="utah website" height={250} />
                </a>
                <a
                  href="https://dribbble.com/toriamia"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={urbanjungle}
                    alt="urban jungle website"
                    height={250}
                  />
                </a>
              </div>
            </Dropdown>
            <Dropdown title={titles[2]} number="003" text={textContent[2]}>
              <div className="grid grid-cols-2 gap-5 mt-16 mb-44">
                <a
                  href="https://daphnes.fly.dev"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={daphnes} alt="daphnes bar website" height={250} />
                </a>
                <a
                  href="https://dominicgerman.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={dominicgerman}
                    alt="portfolio website"
                    height={250}
                  />
                </a>
              </div>
            </Dropdown>
            <Dropdown
              title={titles[3]}
              number="004"
              text={textContent[3]}
              strong={strong}
              dropdownRef={dropdownRef}
              formRef={formRef}
              isSent={isSent}
              setIsSent={setIsSent}
            >
              <ContactForm setIsSent={setIsSent}></ContactForm>
            </Dropdown>
          </div>
        </div>
      </main>

      <footer className="font-mono text-xs text-center my-20">
        {' '}
        design | product | full stack development
      </footer>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPosts()
  return {
    props: {
      allPosts,
    },
  }
}
