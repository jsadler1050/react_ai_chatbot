import { HiUserCircle } from 'react-icons/hi2';
import { RiRobot3Fill } from 'react-icons/ri'
import { MdErrorOutline } from "react-icons/md";


export default function ChatBubble({data}) {
    
    let aiError = data.error || null;
  
    return (

    <div className={`chat_box_container ${data.role === 'user'? 'user':'reversed'}`}>
        <div className="person">
            <div className= "person_avatar"> {/* User's avatar icon*/}
                {data.role === 'user' && <HiUserCircle/> }
                {data.role === 'assistant' && aiError ? 
                <MdErrorOutline/> : <RiRobot3Fill/>    
            }
            </div>
        </div>
        <div className="chat_box_context">
            <div className="chat_box_bubble">
                <span 
                style={aiError ? {background: 'red'}:{}}>
                    {data.content}</span>
            </div>
        </div>
    </div>
        
  )
}
