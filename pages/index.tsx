import Head from 'next/head'
import Link from 'next/link'
import Dropdown from '../components/Dropdown'

export default function Home() {
  const titles: string[] = [
    'The team',
    'Design & Product',
    'Engineering',
    'Contact',
  ]

  const textContent = [
    'We are tech nerds, animal lovers, and craft cocktail connoisseurs. We aren’t just partners in business, but partners in life. ',
    'UX Strategy, Content, Accessibility, Service Design, Brand + Identity, Information Architecture',
    'Content Management Systems + Back End Integration, Responsive Front End Deployment, Custom Wordpress',
    'Enough about us. Tell us your story. Who are you, how’s it going, and most importantly - how can we help?',
  ]
  return (
    <>
      <Head>
        <title>Koda Designs</title>
        <meta name="description" content="UI/UX design + dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-col items-center gap-2.5 mt-8">
          <h1 className="text-7xl font-optima uppercase">Koda</h1>
          <h1 className="text-base font-roboto tracking-[0.4em] mb-16 uppercase">
            Designs
          </h1>
          <div className="max-w-xl">
            <p className="text-base font-roboto mb-12">
              We are a small design + dev shop based in Chicago. <br></br>{' '}
              <br></br> With over eight years of experience building great
              products, our passion is using the best technology to bring your
              vision to life. We are proud to create work that puts people first
              and inspires positive change. We adore our clients and look
              forward to collaborating.
            </p>
          </div>
          <Link
            href="/"
            className="uppercase font-roboto underline underline-offset-4 mb-24"
          >
            Tell us about your project
          </Link>
          <div className="flex flex-col min-w-full border-black border-b-2">
            <Dropdown title={titles[0]} number="001" text={textContent[0]} />
            <Dropdown title={titles[1]} number="002" text={textContent[1]} />
            <Dropdown title={titles[2]} number="003" text={textContent[2]} />
            <Dropdown title={titles[3]} number="004" text={textContent[3]} />
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
