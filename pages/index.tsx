import tw from 'twin.macro'
import React from 'react'
import Image from 'next/image'
import SocialIcons from '@/components/SocialIcons'
import avatarStandard from '../public/img/circle.png'
import avatarSmoke from '../public/img/circle-smoke.png'
import { useRouter } from 'next/router'
import { Projects } from '@/components/portfolio/Projects'
import { Contact } from '@/components/portfolio/Contact'
import { Technologies } from '@/components/portfolio/Technologies'
import { Events } from '@/components/portfolio/Events'

const Home = () => {
  const router = useRouter()
  const avatar = router.query.badboy === 'true' ? avatarSmoke : avatarStandard

  return (
    <>
      <div tw="flex flex-col items-center w-full justify-start pt-32 bg-white">
        <div tw="h-[200px] w-[200px] bg-slate-600 rounded-full flex items-center justify-center">
          <Image
            tw="rounded-full h-48 w-48"
            src={avatar}
            alt="Foysal Ahammed"
          />
        </div>
        <div tw="text-center">
          <h1 tw="pt-1 mb-0 text-gray-900">foysal_ahammed</h1>
          <div tw="text-gray-600 text-xl pt-1  pb-4">Web Developer</div>
          <SocialIcons />
        </div>
        <Technologies />
        <Projects />
        <Events />
        <Contact />
      </div>
    </>
  )
}
export default Home
