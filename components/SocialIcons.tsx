import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BsTwitterX } from 'react-icons/bs'
import { FaMedium } from 'react-icons/fa'
import tw from 'twin.macro'

const SocialIcons = () => {
  const icons = [
    {
      id: 1,
      link: 'https://github.com/FAsami',
      icon: <AiFillGithub size="20px" />,
      title: 'github',
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/in/foysal-dev/',
      icon: <AiFillLinkedin size="20px" />,
      title: 'linkedin',
    },
    {
      id: 2,
      link: 'https://twitter.com/foysal_dev',
      icon: <BsTwitterX size="20px" />,
      title: 'X/TWITTER',
    },
  ]
  return (
    <div tw="flex justify-center text-center gap-3">
      {icons.map((icon) => {
        return (
          <div key={icon.id}>
            <a
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              tw="no-underline text-gray-500 flex flex-col justify-center items-center gap-0.5"
            >
              {icon.icon}
              <small tw="text-gray-500 text-[10px] font-sans">
                {icon.title}
              </small>
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default SocialIcons
