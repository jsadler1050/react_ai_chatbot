import { io } from 'socket.io-client';
import { store } from '../store'
import { storeResponse, aiError } from '../store/chatSlice';

let socket;

export const socketServer = () => {
    socket = io('http://localhost:5004'); //change this when you're not using a local server

    socket.on('connect', () => {
       // console.log(`Connected to socket server: ${socket.id}`)

        socket.on('ai-response', (data) => {
            store.dispatch(storeResponse(data))
        });

        socket.on('ai-error', (error) => {
            store.dispatch(aiError(error))
        });
    })
}


export const sendMessageToServer = ({message, chatID}) => {
    let state =  store.getState(); // access to the state
    const chat = state.chat.chats.find(chat => chat.id === chatID)

    socket.emit('user-message', {
        ...chat  //this will change when using the application
    })
}