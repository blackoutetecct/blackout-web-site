import React, { useCallback, useEffect, useRef, useState } from "react";
import "./style.css";

import attendant from '../../images/chat.png'
import menu from '../../images/menu.png'
import submit from '../../images/submit.png'
import { api } from "../../libs/axios";

export default function Chat() {
  // Refs
  const botaoAbrirChatRef = useRef();
  const chatRef = useRef();
  const inputMensagemRef = useRef();
  const divMensagensRef = useRef();

  // // Estados
  // const [messages, setMessages] = useState();
  // const [userId, setUserId] = useState("");
  // const [userMessage, setUserMessage] = useState("");
  // const [endConversation, setEndConversation] = useState(false);

  // // Função para enviar mensagem
  // const enviarMensagem = useCallback(async () => {
  //   setUserMessage("");

  //   await api.post(
  //     `message/send?response=f906ca07-e369-4b2f-999e-26dac2f5c8e9`,
  //     {
  //       text: userMessage,
  //       sender: userId,
  //     }
  //   );

  //   // Busca todas as mensagens e aramazena somente as informações necessarias
  //   let allMessages = await api.get("message/all");
  //   allMessages = allMessages.data.map((message) => {
  //     return {
  //       time: message.time,
  //       text: message.text,
  //       sender: message.sender,
  //     };
  //   });
  //   setMessages(allMessages);

  //   // Espera 100 milisegundos apos o envio da mensagem e rola a div para baixo para a nova mensagem ficar visivel
  //   setTimeout(() => {
  //     divMensagensRef.current.scrollTop = divMensagensRef.current.scrollHeight;
  //   }, 100);
  // }, [userId, userMessage]);

  // useEffect(() => {
  //   // Busca mensagens a cada segundo
  //   const buscaMensagensACadaSegundo = setInterval(async () => {
  //     let allMessages = await api.get("message/all");
  //     allMessages = allMessages.data.map((message) => {
  //       return {
  //         time: message.time,
  //         text: message.text,
  //         sender: message.sender,
  //       };
  //     });
  //     setMessages(allMessages);
  //   }, 1000);

  //   // Recupera o ID do usuário ou cria um novo
  //   (async () => {
  //     try {
  //       let recovered_user_id = localStorage.getItem("blackout_chat_user_id");
  //       if (recovered_user_id) {
  //         setUserId(recovered_user_id);
  //         return;
  //       }
  //       const response = await api.post("user/save", {});
  //       const { id } = response.data;
  //       localStorage.setItem("blackout_chat_user_id", id);
  //       setUserId(id);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   })();

  //   function handleClick() {
  //     chatRef.current.classList.toggle("chatbox--active");
  //   }

  //   // Event listener para abrir/fechar o chat
  //   botaoAbrirChatRef.current.addEventListener("click", handleClick);

  //   // Limpeza dos intervalos quando o componente é desmontado
  //   return () => {
  //     clearInterval(buscaMensagensACadaSegundo);
  //     botaoAbrirChatRef.current.removeEventListener("click", handleClick);
  //   };
  // }, []);

  // useEffect(() => {
  //   // Função para enviar mensagem ao pressionar Enter
  //   const handleKeyPress = (event) => {
  //     if (event.key === "Enter") {
  //       enviarMensagem();
  //     }
  //   };

  //   inputMensagemRef.current.addEventListener("keypress", handleKeyPress);

  //   return () => {
  //     inputMensagemRef.current.removeEventListener("keypress", handleKeyPress);
  //   };
  // }, [userId, userMessage, enviarMensagem]);

  // async function tentaFinalizarChat() {
  //   setEndConversation(true)
  // }

  // function cancelarFinalizacaoChat(){
  //   setEndConversation(false)
  // }

  // async function confirmarFinalizacaotoChat(){
  //   const deleteAdminMessages = await api.delete(`message`, {
  //     params: { userId: "79df6165-6922-45a6-b99e-0ed2b1cdcf87" },
  //   });
  //   const deleteUserMessages = await api.delete(`message`, {
  //     params: { userId },
  //   });
  //   setEndConversation(false)
  //   chatRef.current.classList.remove("chatbox--active")
  // }

  return (
   <div className="chat-container">

    <div className="chat-menu">
      <div>
        <img className="chat-attendant-img" src={attendant} alt="Chat atendente" />
        <div>
          <h4>ATENDENTE</h4>
          <p>Olá! Como posso ajudar?</p>
        </div>
      </div>

      <img className="chat-menu-img" src={menu} alt="Menu" />
    </div>

    <div className="chat-messages">
      <p className="chat-attendant"> Como posso te ajudar? </p>
      <p className="chat-user"> Como posso te ajudar? </p>
    </div>

    <div className="input-container"> 
       
      <input type="text" placeholder="Olá, preciso de ajuda!" />
      <div> 
        <img src={submit} alt="" />  
      </div>

    </div>

   </div>
  );
}
