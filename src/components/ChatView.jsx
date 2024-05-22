import Helena from '../assets/Helena.svg'
import Carlo from '../assets/Carlo.svg'
import Briana from '../assets/Briana.svg'
import Daniel from '../assets/Daniel.svg'
import Giannis from '../assets/Giannis.svg'
import Mark from '../assets/Mark.svg'
import Mom from '../assets/Mom.svg'
import Oscar from '../assets/Oscar.svg'
import { IoIosSearch } from 'react-icons/io'



const ChatView = () => {
  return (
    <div className="flex flex-col border-r gap-2 p-4">
        <h1 className='text-2xl font-semibold'>App</h1>
        <div className='border py-2 px-3 flex items-center gap-2 rounded-xl'>
            <IoIosSearch />
            <input type="text" placeholder="Search chats" className=' outline-none'/>
        </div>
        <div className=''>
            <div className='mt-5 hover:bg-gray-200 rounded-lg p-2 duration-200 ease-in cursor-pointer bg-gray-200'>
                <div className='flex items-center gap-2'>
                    <img className=' w-12 rounded-full' src={Helena} alt="" />
                    <div className='flex-col gap-0'>
                        <p className='font-semibold text-md'>Helena Hills</p>
                        <p className=' font-normal text-gray-700 text-sm'>Will head to the Help Center...</p>
                    </div>
                </div>
            </div>
            <div className='hover:bg-gray-200 rounded-lg p-2 duration-200 ease-in cursor-pointer'>
                <div className='flex items-center gap-2'>
                    <img className='w-12 rounded-full' src={Carlo} alt="" />
                    <div className='flex-col gap-0'>
                        <p className='font-semibold text-md'>Carlo Emilio</p>
                        <p className=' font-normal text-gray-700 text-sm'>Let's go</p>
                    </div>
                </div>
            </div>
            <div className='hover:bg-gray-200 rounded-lg p-2 duration-200 ease-in cursor-pointer'>
                <div className='flex items-center gap-2'>
                    <img src={Oscar} alt="" className='w-12 rounded-full'/>
                    <div className='flex-col gap-0'>
                        <p className='font-semibold text-md'>Oscar Davis</p>
                        <p className=' font-normal text-gray-700 text-sm'>Trueeeee</p>
                    </div>
                </div>
            </div>
            <div className='hover:bg-gray-200 rounded-lg p-2 duration-200 ease-in cursor-pointer'>
                <div className='flex items-center gap-2'>
                    <img src={Daniel} alt="" className='w-12 rounded-full'/>
                    <div className='flex-col gap-0'>
                        <p className='font-semibold text-md'>Daniel Jay Park</p>
                        <p className=' font-normal text-gray-700 text-sm'>lol yeah, are you coming to the lunch...</p>
                    </div>
                </div>
            </div>
            <div className='hover:bg-gray-200 rounded-lg p-2 duration-200 ease-in cursor-pointer'>
                <div className='flex items-center gap-2'>
                <img src={Mark} alt="" className='w-12 rounded-full'/>
                    <div className='flex-col gap-0'>
                        <p className='font-semibold text-md'>Mark Rojas</p>
                        <p className=' font-normal text-gray-700 text-sm'>great catching up over dinner!!</p>
                    </div>
                </div>
            </div>
            <div className='hover:bg-gray-200 rounded-lg p-2 duration-200 ease-in cursor-pointer'>
                <div className='flex items-center gap-2'>
                <img src={Giannis} alt="" className='w-12 rounded-full'/>
                    <div className='flex-col gap-0'>
                        <p className='font-semibold text-md'>Giannis Constantinou</p>
                        <p className=' font-normal text-gray-700 text-sm'>yep 👏👏</p>
                    </div>
                </div>
            </div>
            <div className='hover:bg-gray-200 rounded-lg p-2 duration-200 ease-in cursor-pointer'>
                <div className='flex items-center gap-2'>
                    <img src={Briana} alt="" className='w-12 rounded-full'/>
                    <div className='flex-col gap-0'>
                        <p className='font-semibold text-md'>Briana Lewis</p>
                        <p className=' font-normal text-gray-700 text-sm'>When are you coming back to town?...</p>
                    </div>
                </div>
            </div>
            <div className='hover:bg-gray-200 rounded-lg p-2 duration-200 ease-in cursor-pointer'>
                <div className='flex items-center gap-2'>
                    <img src={Mom} alt="" className='w-12 rounded-full'/>
                    <div className='flex-col gap-0'>
                        <p className='font-semibold text-md'>Mom</p>
                        <p className=' font-normal text-gray-700 text-sm'>Thanks</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatView