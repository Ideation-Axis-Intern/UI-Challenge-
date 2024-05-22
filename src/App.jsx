import ChatMessage from "./components/ChatMessage"
import ChatProfile from "./components/ChatProfile"
import ChatView from "./components/ChatView"

const App = () => {
  return (
    <div className="flex justify-between">
        <ChatView/>
        <ChatMessage/>
        <ChatProfile/>
    </div>
  )
}

export default App