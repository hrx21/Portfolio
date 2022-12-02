import Head from 'next/head';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Image from 'next/image';
import avtar from '../public/images/avtar.png'
import design from '../public/images/design.png'
import figma from '../public/images/figma.png'
import canva from '../public/images/canva.png'
import code from '../public/images/code.png'
import html from '../public/images/html.png'
import css from '../public/images/css1.png'
import js from '../public/images/js1.png'
import next from '../public/images/next.png'
import mui from '../public/images/mui.png'
import react from '../public/images/react.png'
import git from '../public/images/git.png'
import bootstrap from '../public/images/bootstrap.png'
import IndividualIntervalsExample from './carousel';

export default function Home() {
  return (
    <>
      <div>
        <Head></Head>
        <main className="bg-white px-10">
          <section className="min-h-screen">
            <nav className="py-10 mb-12 flex justify-between">
              <h1 className="text-xl font-burtons">HRX</h1>
              <ul className="flex items-center">
                <li>
                  <DarkModeIcon className="cursor-pointer" />
                </li>
                <li>
                  <a
                    className="bg-gradient-to-r from-cyan-400 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                    href="#"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            <div className="text-center p-10">
              <h2 className='text-4xl py-2 text-teal-600 font-medium'>Hritik Shettigar</h2>
              <h3 className='text-xl py-2'>Front-End Developer.</h3>
              <p className='text-md py-5 leading-8 text-gray-700'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
                odit, similique doloribus maxime quia laborum.
              </p>
            </div>
            <div className='text-4xl flex justify-center gap-16 py-3 text-gray-600'>
              <TwitterIcon className="cursor-pointer" />
              <LinkedInIcon className="cursor-pointer" />
              <YouTubeIcon className="cursor-pointer" />
            </div>
            <div className='relative bg-gradient-to-b from-teal-500 rounded-full w-96 h-96 mt-20 mx-auto overflow-hidden'>
              <Image
              layout='fill'
              objectFit='cover'
              src={avtar}
               />
            </div>
          </section>
          <section>
            <div>
              <h1 className='text-3xl py-1'>My Projects/ Services I offer</h1>
              <p className='text-md py-2 leading-8 text-gray-800'>
                Started as a full time front-end developer willing to work for 
                <span className='text-teal-500'> agencies </span> and <span className='text-teal-500'> startups </span>
                I've also collaborated with talented people to create digital products for both business and consumer use.
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ducimus tempora, non veniam quae explicabo beatae iure. Adipisci voluptatem possimus accusamus perspiciatis.  </p>
            </div>
            <div>
              <div className='flex items-center justify-center flex-col shadow-xl p-10 rounded-xl my-10'>
                <Image src={design} width={100} height={100} />
                <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
                <p className='py-2'>Creating Elegant designs suited for your needs.</p>
                <h4 className='text-teal-500 py-4'>Design Tools I use.</h4>
                <div className='flex justify-center items-center flex-row gap-10'>
                <Image src={figma} width={50} height={50} />
                <Image src={canva} width={100} height={100} />
                </div>
              </div>

              <div className='flex items-center justify-center flex-col shadow-xl p-10 rounded-xl my-10'>
                <Image src={code} width={100} height={100} />
                <h3 className='text-lg font-medium pt-8 pb-2'>Technologies I use</h3>
                <p className='py-2'>Creating Elegant websites and applications suited for your needs.</p>
                <h4 className='text-teal-500 py-4'>Languages I use.</h4>
                <div className='flex justify-center items-center flex-row flex-1 gap-10'>
                  <Image src={html} width={100} height={100} />
                  <Image src={css} width={100} height={100} />
                  <Image src={js} width={100} height={100} />
                  <Image src={react} width={100} height={100} />
                  <Image src={next} width={100} height={100} />
                  <Image src={git} width={100} height={100} />
                  <Image src={bootstrap} width={100} height={100} />
                  <Image src={mui} width={100} height={100} />
                </div>
              </div>
              {/* <div className='flex items-center justify-center flex-col shadow-xl p-10 rounded-xl my-10'>
                <Image src={design} width={100} height={100} />
                <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
                <p className='py-2'>Creating Elegant designs suited for your needs.</p>
                <h4 className='text-teal-500 py-4'>Design Tools I use.</h4>
              </div> */}
            </div>
          </section>
        </main>
      </div>
    </> 
  );
}
