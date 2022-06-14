const socket = io("https://chat-server-shri.herokuapp.com/");

const message = document.getElementById('message');
const messages = document.getElementById('messages');

message.addEventListener('keyup',(e)=>{
    if(e.keyCode===13){
        handleSubmit();
        message.value = '';
    }
})

const handleSubmit = ()=>{
    socket.emit('message',{data:message.value});
    console.log(message.value);
}

socket.on('message',({data})=>{
    handNewMessage(data);
})

const handNewMessage = (message)=>{
    messages.appendChild(buildNewmessage(message));
}

const buildNewmessage = (message)=>{
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(message));
    return li;
}