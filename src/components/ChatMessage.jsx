import { IoMicOutline } from 'react-icons/io5'
import Helena from '../assets/Helena.svg'
import Phone from '../assets/Phone.svg'
import Video from '../assets/Video.svg'
import { BsEmojiSmile } from 'react-icons/bs'
import { FiImage } from 'react-icons/fi'
import Chats from './Chats'

const ChatMessage = () => {
  return (
    <div className="flex-col flex-1 h-screen">
        <div className="flex items-center justify-between py-2 px-3 border-b">
            <div className='flex items-center gap-3'>
                <img src={Helena} alt="" className='rounded-full w-10'/>
                <div className=" flex-col">
                    <h2 className='text-md '>Helena</h2>
                    <p className='text-sm text-gray-500'>Active 20m ago</p>
                </div>
            </div>
            <div className='flex items-center gap-1 pr-3'>
                <div className='cursor-pointer hover:text-gray-200 hover:bg-gray-200 p-2 hover:rounded-full duration-300 ease-in-out'>
                    <img src={Phone} alt="" />
                </div>
                <div className='cursor-pointer hover:text-gray-200 hover:bg-gray-200 p-2 hover:rounded-full duration-300 ease-in-out'>
                    <img src={Video} alt="" />
                </div>
                
            </div>
        </div>
        <div>
            <Chats/>
        </div>
        <div className='fixed bottom-1 w-[700px]'>
            <div className='flex items-center justify-between px-3 rounded-md border m-4 py-2 '>
                <input type="text" placeholder='Enter your message' className='w-full outline-none'/>
                <div className='flex gap-2 items-center'>
                    <IoMicOutline  className='cursor-pointer hover:text-black text-gray-700 text-2xl'/>
                    <BsEmojiSmile  className='cursor-pointer hover:text-black text-gray-700 text-2xl'/>
                    <FiImage className='cursor-pointer hover:text-black text-gray-700 text-2xl'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatMessage