// import { createClient } from 'next-sanity';
// import PortableText from 'react-portable-text';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Image from 'next/image';
import avtar from '../public/images/avtar.png';
import design from '../public/images/design.png';
import figma from '../public/images/figma.png';
import canva from '../public/images/canva.png';
import code from '../public/images/code.png';
import html from '../public/images/html.png';
import css from '../public/images/css1.png';
import js from '../public/images/js1.png';
import next from '../public/images/next.png';
import mui from '../public/images/mui.png';
import react from '../public/images/react.png';
import git from '../public/images/git.png';
import bootstrap from '../public/images/bootstrap.png';
import sadhana from '../public/images/sadhana.png';
import app from '../public/images/app.png';
import { useState, useEffect } from 'react';
import dev from '../public/images/dev.webp';
// import imageUrlBuilder from '@sanity/image-url';
import Link from 'next/link';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ResultModal from './mui-modal';
import CodeIcon from '@mui/icons-material/Code';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const openInNewTab = (url) => {
    window.open(url);
  };

  return (
    <>
      <div id="main" className={darkMode ? 'dark' : ' '}>
        <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-gray-500">
          <section className="min-h-screen">
            <nav className="py-10 mb-12 flex justify-between">
              <CodeIcon />
              <ul className="flex items-center">
                <li>
                  <DarkModeIcon
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer dark:text-white"
                  />
                </li>
                <li>
                  {/* <a
                    onClick={() => setShowResult(true)}
                    className="bg-gradient-to-r from-cyan-400 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                    href="#"
                  >
                    Resume
                  </a> */}
                </li>
              </ul>
            </nav>
            <div className="text-center p-10 dark:text-gray-500">
              <h2 className="text-4xl py-2 text-teal-600 font-medium md:text-6xl">
                Hritik Shettigar
              </h2>
              <h3 className="text-xl py-2 md:text-3xl">Front-End Developer.</h3>
              <p
                // id="bio"
                className="text-md py-5 leading-8 text-gray-700 md:text-xl max-w-xl mx-auto dark:text-gray-500"
              >
                Front-End Developer with having experience building and
                maintaining responsive websites.
              </p>
            </div>
            <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-72 h-72 mx-auto overflow-hidden md:h-96 md:w-96">
              <Image src={dev} />
            </div>
          </section>
          <section>
            <div className="dark:text-gray-500">
              <h1 className="text-3xl py-1">My Projects/ Services I offer</h1>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-500">
                Started as a full time front-end developer willing to work for
                <span className="text-teal-500"> agencies </span> and
                <span className="text-teal-500"> startups </span>I have also
                collaborated with talented people to create digital products for
                both business and consumer use.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center flex-col shadow-xl p-10 rounded-xl my-10 dark:text-gray-500 dark:shadow-2xl">
                <Image src={design} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Beautiful Designs
                </h3>
                <p className="py-2">
                  Creating Elegant designs suited for your needs.
                </p>
                <h4 className="text-teal-500 py-4">Design Tools I use.</h4>
                <div className="flex justify-center items-center flex-row gap-10">
                  <Image src={figma} width={50} height={50} />
                  <Image src={canva} width={100} height={100} />
                </div>
              </div>
              <div className="flex items-center justify-center flex-col shadow-xl p-10 rounded-xl my-10 dark:text-gray-500 dark:shadow-2xl">
                <Image src={code} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Technologies I use
                </h3>
                <p className="py-2">
                  Creating Elegant websites and applications suited for your
                  needs.
                </p>
                <h4 className="text-teal-500 py-4">Languages I use.</h4>
                <div className="flex justify-center items-center md:flex-row 2xl:flex-row lg:flex-row sm:flex-row flex-col flex-1 gap-10">
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
            </div>
          </section>
          {/* <div className="flex flex-1 justify-center flex-col items-center py-10">
            <h3 className="text-gray-700 text-4xl my-5">
              I ALSO LIKE TO WRITE
            </h3>
            <p className="text-2xl text-gray-600">Read my Blogs!</p>
          </div>
          <div className="w-full grid grid-cols-3 gap-5 hover:text-yellow-50">
            {blogs.map((item) => {
              return (
                <Link key={item.slug} href={'/blog/' + item.slug.current}>
                  <div
                    style={{
                      backgroundImage: `url(${builder
                        .image(item.blogimage)
                        .width()
                        .url()})`,
                    }}
                    className="bg-cover h-80 bg-center bg-no-repeat hover:text-blue-400"
                  ></div>
                  <div className="text-gray-500 text-center py-3 px-5">
                    <span className="font-body text-lg font-semibold dark:text-gray-500 text-black">
                      {item.title}
                    </span>
                    <span className="pt-2 font-body text-gray-200">
                      {item.metadesc}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div> */}
          <div className="dark:text-gray-500">
            <h1 className="dark:text-gray-500 text-2xl font-semibold text-black mb-10">
              Projects I have worked on
            </h1>
            <a href="https:://maaambeyeducation.in"></a>
            <div className="flex items-center justify-center flex-col shadow-xl p-10 rounded-xl dark:text-gray-500 dark:shadow-2xl cursor-pointer hover:bg-teal-100">
              <h3 className="dark:text-gray-500 text-2xl font-semibold text-black mb-10">
                Sadhana
              </h3>
              <p className="text-xl my-8">
                <button
                  className="hover:underline pr-2 text-blue-400"
                  onClick={() =>
                    openInNewTab('https://www.maaambeyeducation.in')
                  }
                >
                  Sadhana.in
                </button>
                is a website which helps users to search for diseases, symptoms
                and cures with s build in application to analyse and predict the
                probability of diseases according to the symptoms and
                questionary answered by user.
              </p>
            </div>
            <div className="flex items-center justify-center flex-col shadow-xl p-10 rounded-xl text-xl dark:text-gray-500 dark:shadow-2xl cursor-pointer hover:bg-teal-100">
              <h3 className="dark:text-gray-500 text-2xl font-semibold text-black mb-10">
                Smiley Huts
              </h3>
              <p>
                Smiley huts is a US-Canada based property listing website where
                users can register to rent or book listed properties based on
                monthly subscription plan.
              </p>
            </div>
            <div className="flex items-center justify-center flex-col shadow-xl p-10 rounded-xl text-xl dark:text-gray-500 dark:shadow-2xl cursor-pointer hover:bg-teal-100">
              <h3 className="dark:text-gray-500 text-2xl font-semibold text-black mb-10">
                BBDG
              </h3>
              <p>
                Website which provides and offers various services like finance
                & loan advisory, solve business and start-up related queries &
                support and many more to the world users and existing customers.
              </p>
            </div>
            <div className="py-32">
              <p className="text-3xl font-semibold text-center my-10">
                My Contacts
              </p>
              <div className="flex justify-center items-center sm:flex-row lg:flex-row md:flex-row flex-col gap-10">
                <span className="hover:text-blue-500 hover:underline hover:cursor-pointer">
                  <EmailOutlinedIcon /> hshettigar46@gmail.com
                </span>
                <span className="hover:text-blue-500 hover:underline hover:cursor-pointer">
                  <CallOutlinedIcon /> +91 7738036601
                </span>
                <a
                  className="hover:text-blue-500 hover:underline hover:cursor-pointer"
                  href="https://www.linkedin.com/in/hritik-shettigar-2b8172177/"
                >
                  <LinkedInIcon /> Hritik Shettigar
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
