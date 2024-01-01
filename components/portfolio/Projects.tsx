import Head from 'next/head'
import tw from 'twin.macro'
import React from 'react'
import { Image as AntDImage } from 'antd'
import { FaHtml5 } from 'react-icons/fa'
import { IoIosLink } from 'react-icons/io'
import { GrPlan } from 'react-icons/gr'
import { AiFillCode, AiFillGithub } from 'react-icons/ai'
import Link from 'next/link'

const Projects = () => {
  const projects = [
    {
      id: '0001',
      icon: <FaHtml5 size="26px" />,
      label: 'Mullayan web application',
      link: 'https://mullayan.vercel.app/',
      description:
        'this is a pet e-commerce project of mine. this website is for showcase the arts and artist according to their skills.',
      github: '',
      planning: '',
    },
  ]
  return (
    <div tw="flex flex-col items-center w-full justify-start bg-white overflow-y-auto scroll-smooth">
      <h2 tw="text-center text-4xl flex gap-2 items-center pt-56 pb-12">
        <AiFillCode tw="text-4xl" />
        Ideas I made live
      </h2>
      <div tw="grid grid-cols-3  gap-6">
        {projects.map(({ id, planning, label, link, description, github }) => {
          return (
            <div
              tw="border rounded-lg shadow-sm drop-shadow-md h-auto w-72 flex flex-col gap-3 relative p-4"
              key={id}
            >
              <AntDImage
                width={256}
                height={220}
                tw="h-24 w-auto rounded-md"
                src="/projects/mullayan.png"
              />
              <div tw="text-xl">
                <span tw="text-gray-400 text-base">{id} </span> <br />
                {label}
              </div>
              <div tw="flex items-center gap-0.5">
                <IoIosLink />
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {link}
                </a>
              </div>
              <div tw="text-gray-500">{description}</div>
              <div tw="pt-8 flex gap-4 justify-center">
                <div tw="flex flex-col gap-1">
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      tw="no-underline text-gray-500 flex flex-col justify-center items-center gap-0.5"
                    >
                      <AiFillGithub size="20px" />
                      <small tw="text-gray-500 text-[10px] font-sans">
                        github
                      </small>
                    </a>
                  )}
                </div>
                <div tw="flex flex-col gap-1">
                  {planning && (
                    <Link
                      href={planning}
                      tw="no-underline text-gray-500 flex flex-col justify-center items-center gap-0.5"
                    >
                      <GrPlan size="20px" />
                      <small tw="text-gray-500 text-[10px] font-sans">
                        features
                      </small>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { Projects }
