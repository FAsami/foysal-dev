import React, { ReactNode } from 'react'
import tw from 'twin.macro'
import { MdOutlineFileDownload } from 'react-icons/md'
import Head from 'next/head'
import Link from 'next/link'
import { FaHeart } from 'react-icons/fa'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const styles = {
    link: [
      tw`px-2 cursor-pointer border-b-4 border-0 border-solid border-b-transparent hover:border-b-purple-500 transition-all ease-linear no-underline`,
    ],
  }

  return (
    <>
      <Head>
        <title>Foysal | Web Developer</title>
        <meta
          name="description"
          content="Living and breathing in the web from last 3 years. I love to code pixel perfect user interface. Well-versed in data structures. Passionate to learn new technologies."
        />
        <meta
          name="google-site-verification"
          content="zBlFH_EaL-cCWZURf1lw62HlCf9FDE1U4UOyGhBQ0zU"
        />
      </Head>
      <div tw="container mx-auto font-ubuntu px-4">
        <header tw="flex items-center justify-between py-4 sticky top-0 bg-white z-[999]">
          <div tw="cursor-pointer text-4xl font-medium">
            <span tw="text-indigo-900">f</span>oysal.
            <span tw="text-lg text-gray-500">dev</span>
          </div>
          <div tw="flex items-center gap-12">
            {/* <div tw="flex items-start gap-3 text-xl">
              <div css={styles.link}>projects</div>
              <div css={styles.link}>about</div>
            </div> */}

            {/* <div tw="text-xl flex items-center gap-1 cursor-pointer">
              <MdOutlineFileDownload />
              Resume
            </div> */}
          </div>
        </header>
        {children}
        <div tw="text-center py-6">
          &copy;Created by foysal with <FaHeart />
          {new Date().getFullYear()}
        </div>
      </div>
    </>
  )
}

export default Layout
