import { BsTools } from 'react-icons/bs'
import { FaNodeJs, FaReact, FaSass } from 'react-icons/fa'
import { GrGraphQl } from 'react-icons/gr'
import {
  SiBootstrap,
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGithub,
  SiHasura,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiReactrouter,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import tw from 'twin.macro'

const Technologies = () => {
  const technologies = [
    {
      id: 1,
      label: 'JavaScript',
      icon: <SiJavascript size="26px" />,
    },

    {
      id: 2,
      label: 'React JS',
      icon: <FaReact size="26px" />,
    },
    {
      id: 3,
      label: 'Node.js',
      icon: <FaNodeJs size="26px" />,
    },
    {
      id: 4,
      label: 'Nextjs',
      icon: <TbBrandNextjs size="26px" />,
    },
    {
      id: 5,
      label: 'TypeScript',
      icon: <SiTypescript size="26px" />,
    },
    {
      id: 6,
      label: 'Mongo DB',
      icon: <SiMongodb size="26px" />,
    },
    {
      id: 7,
      label: 'Postgresql',
      icon: <SiPostgresql size="26px" />,
    },
    {
      id: 8,
      label: 'GraphQl',
      icon: <GrGraphQl size="26px" />,
    },
    {
      id: 9,
      label: 'git',
      icon: <SiGithub size="26px" />,
    },
    {
      id: 10,
      label: 'figma',
      icon: <SiFigma size="26px" />,
    },
    {
      id: 11,
      label: 'docker',
      icon: <SiDocker size="26px" />,
    },
    {
      id: 12,
      label: 'tailwindcss',
      icon: <SiTailwindcss size="26px" />,
    },
    {
      id: 13,
      label: 'bootstrap',
      icon: <SiBootstrap size="26px" />,
    },
    {
      id: 14,
      label: 'express',
      icon: <SiExpress size="26px" />,
    },

    {
      id: 15,
      label: 'React Router',
      icon: <SiReactrouter size="26px" />,
    },

    {
      id: 16,
      label: 'CSS & SASS',
      icon: <FaSass size="26px" />,
    },
    {
      id: 17,
      label: 'HASURA',
      icon: <SiHasura size="26px" />,
    },
    {
      id: 18,
      label: 'C++',
      icon: <SiCplusplus size="26px" />,
    },
  ]

  return (
    <div tw="flex flex-col items-center w-full justify-start  bg-white overflow-y-auto scroll-smooth">
      <h2 tw="text-center text-4xl flex gap-4 items-center pt-56 pb-12">
        <BsTools tw="text-3xl" />
        toolbox
      </h2>
      <div tw="grid md:grid-cols-5 grid-cols-3 gap-3">
        {technologies.map(({ id, icon, label }) => {
          return (
            <div
              tw="border rounded-md shadow-sm drop-shadow-md h-28 w-28 flex flex-col items-center justify-center gap-3 relative"
              key={id}
            >
              {/* <span tw="absolute left-1 top-0 text-7xl font-bold text-gray-100">
                {id}
              </span> */}
              {icon}
              <small tw="text-lg">{label}</small>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { Technologies }
