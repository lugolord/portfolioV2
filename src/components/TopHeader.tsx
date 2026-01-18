import profilePic from '../assets/yo.png'
import profilePicDark from '../assets/yo-light.png'
import TopBadge from './TopBadge'
import { CiMail, CiLinkedin } from "react-icons/ci"
import { FaArrowDownLong } from "react-icons/fa6"

function TopHeader () {
  return (
    <div className='flex-col sm:flex-row flex-wrap justify-between pt-10'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl text-gray-800 dark:text-white sm:text-5xl font-mono'>Luis Gonzalez</h1>
        <img src={profilePic} alt="Luis Gonzalez" className='size-14 rounded-full dark:hidden' />
        <img src={profilePicDark} alt="Luis Gonzalez" className='size-14 rounded-full hidden dark:block' />
      </div>
      <h2 className='font-mono mt-3'>Frontend Dev & Educador Tech</h2>
      <div className='flex mt-3 gap-3'>
        <TopBadge label='Mail' Icon={CiMail} />
        <TopBadge label='LinkedIn' Icon={CiLinkedin} type='link' url="https://www.linkedin.com/in/luisgonzr/" />
        <TopBadge label='Ver CV' Icon={FaArrowDownLong} type='link' url="/cv-luisg.pdf" />
      </div>
    </div>
  )
}

export default TopHeader
