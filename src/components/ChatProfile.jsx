import { IoIosSearch } from 'react-icons/io'
import Helena from '../assets/Helena.svg'
import { SlOptions } from 'react-icons/sl'
import { FiImage } from 'react-icons/fi'

const ChatProfile = () => {
  return (
    <div className='w-[270px] flex-col justify-center pt-4 px-10 border-l'>
        <div className="flex flex-col text-center">
            <img src={Helena} alt="" className='rounded-full mt-4 mb-2 w-[120px] ml-9'/>
            <h1 className='font-semibold text-lg'>Helena</h1>
            <p className='text-gray-600'>Active 20m ago</p>
        </div>
        <div className='my-8 text-center bg-black text-white py-2 rounded-xl'>
            <button>View Profile</button>
        </div>
        <div className='flex-col items-center text-center'>
            <div className='flex gap-4 items-center py-1 hover:text-gray-700 cursor-pointer'>
                <IoIosSearch className='text-2xl'/>
                <p className=''>Search chat</p>
            </div>
            <div className='flex gap-4 items-center py-1 hover:text-gray-700 cursor-pointer'>
                <FiImage className='text-2xl'/>
                <p>Sent images</p>
            </div>
            <div className='flex gap-4 items-center py-1 hover:text-gray-700 cursor-pointer'>
                <SlOptions className='text-2xl'/>
                <p>More options</p>
            </div>
        </div>
    </div>
  )
}

export default ChatProfile