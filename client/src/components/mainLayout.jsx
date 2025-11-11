import ChatPanel from "./chat/ChatPanel"
import InputMessage from "./bottomPanel/InputMessage"
import SidePanel from "./chat/SidePanel"

export default function MainLayout() {
  return (
    <div className="--dark-theme" id="chat">
      
      <div className="chat_box">
        <ChatPanel/>
      </div>

      <div className="chat_panel">
        <InputMessage/>
      </div>

      <div className="side_panel">
        <SidePanel/>
      </div>

    </div>

  )
}
