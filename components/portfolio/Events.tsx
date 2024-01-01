import { FaRegCalendarAlt, FaUserGraduate } from 'react-icons/fa'
import { GiProgression, GiStairsGoal } from 'react-icons/gi'
import { PiBabyFill } from 'react-icons/pi'
import tw from 'twin.macro'

const Events = () => {
  const events = [
    {
      id: 1,
      title: (
        <>
          Started working with{' '}
          <a
            href="https://www.onosuite.com/"
            target="_blank"
            rel="noopener noreferrer"
            tw="text-indigo-900 no-underline"
          >
            ONOSUITE
          </a>
        </>
      ),
      description: '',
      icon: <GiStairsGoal />,
      date: 'December 14, 2020',
    },
    {
      id: 2,
      title: 'Started studying at Dhaka College mathematics',
      description: '',
      icon: <FaUserGraduate />,
      date: 'January, 2019',
    },
    {
      id: 3,
      title: 'Completed higher school certification',
      description: '',
      icon: <FaUserGraduate />,
      date: 'January, 2019',
    },
    {
      id: 4,
      title: 'Entered into the WORLD',
      description: '',
      icon: <PiBabyFill />,
      date: 'May 2001',
    },
  ]
  return (
    <div tw="flex flex-col w-full justify-start bg-white max-w-screen-md mx-auto">
      <h2 tw="justify-center text-4xl flex gap-2 items-center pt-56 pb-12">
        <GiProgression tw="text-4xl" />
        flow of life
      </h2>
      <div tw="flex gap-8 flex-col">
        {events.map(({ id, title, icon, description, date }) => {
          return (
            <div key={id}>
              <h3 tw="flex items-center gap-1">
                {icon}
                {title}
              </h3>
              <div tw="text-gray-400 flex items-center gap-1">
                <FaRegCalendarAlt />
                <div>{date}</div>
              </div>
              <div tw="max-w-md py-2">{description}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { Events }
