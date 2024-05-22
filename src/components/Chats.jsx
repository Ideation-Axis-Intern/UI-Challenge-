
const Chats = () => {
  return (
    <div className="flex-col relative text-sm">
        <div className="absolute right-2">
            <p className="text-white bg-black my-2 py-2 px-3 rounded-l-xl rounded-tr-xl w-fit">This is the main chat template</p>
        </div>
        <p className="text-center text-gray-500 top-14 absolute w-full">Nov 30, 2023, 9:41 AM</p>
            <div className="absolute top-20 left-4">
                <p className="mt-1 px-3 rounded-r-xl rounded-tl-xl bg-gray-200 py-2 w-fit">Oh?</p>
                <p className="mt-1 px-3 rounded-r-xl rounded-tl-xl bg-gray-200 py-2 w-fit">Cool</p>
                <p className="mt-1 px-3 rounded-r-xl rounded-tl-xl bg-gray-200 py-2 w-fit">How does it work?</p>
            </div>
        <div>
            <div className="absolute top-48 right-2 w-[370px]">
                <p className="mt-1 px-3 rounded-l-xl rounded-tr-xl bg-black text-white py-2 w-fit">Simple</p>
                <p className="mt-1 px-3 rounded-l-xl rounded-tr-xl bg-black text-white py-2 w-fit">You just edit any text  to type in the conversation you want to show, and delete any bubbles you don’t want to use
                </p>
                <p className="mt-1 px-3 rounded-l-xl rounded-tr-xl bg-black text-white py-2 w-fit">How does it work?</p>
            </div>
        </div>
            <div className="absolute top-[360px] left-4">
                <p className="mt-1 px-3 rounded-r-xl rounded-tl-xl bg-gray-200 py-2 w-fit">Hmm</p>
                <p className="mt-1 px-3 rounded-r-xl rounded-tl-xl bg-gray-200 py-2 w-fit">I think I get it</p>
                <p className="mt-1 px-3 rounded-r-xl rounded-tl-xl bg-gray-200 py-2 w-fit">Will head to the Help Center if I have more questions tho</p>
            </div>
    </div>
  )
}

export default Chats