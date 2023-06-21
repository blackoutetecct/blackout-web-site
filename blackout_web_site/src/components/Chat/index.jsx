import React, { useEffect, useRef } from "react";
import "./style.css";

import { useCallback, useState } from "react";
import { createPortal } from "react-dom";
import attendant from "../../images/chat.png";
import menu from "../../images/menu.png";
import open from "../../images/open-chatv2.png";
import submit from "../../images/submit.png";
import { api } from "../../libs/axios";

export default function Chat() {
  // Refs
  const chatRef = useRef();
  const divMensagensRef = useRef();
  const inputMensagemRef = useRef();

  // Estados
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [userId, setUserId] = useState("");
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [endConversation, setEndConversation] = useState(false);

  const enviarMensagem = useCallback(async () => {
    setUserMessage("")
    await api.post(
      `message/send?response=f906ca07-e369-4b2f-999e-26dac2f5c8e9`,
      {
        text: userMessage,
        sender: userId,
      }
    );

    // Busca todas as mensagens e aramazena somente as informações necessarias
    let allMessages = await api.get("message/all");
    allMessages = allMessages.data.map((message) => {
      return {
        time: message.time,
        text: message.text,
        sender: message.sender,
      };
    });
    setMessages(allMessages);

  }, [userId,userMessage]);

  useEffect(() => {
    // Busca mensagens a cada segundo
    const buscaMensagensACadaSegundo = setInterval(async () => {
      let allMessages = await api.get("message/all");
      allMessages = allMessages.data.map((message) => {
        return {
          time: message.time,
          text: message.text,
          sender: message.sender,
        };
      });
      setMessages(allMessages);
    }, 1000);

    // Recupera o ID do usuário ou cria um novo
    (async () => {
      try {
        let recovered_user_id = localStorage.getItem("blackout_chat_user_id");
        if (recovered_user_id) {
          setUserId(recovered_user_id);
          return;
        }
        const response = await api.post("user/save", {});
        const { id } = response.data;
        localStorage.setItem("blackout_chat_user_id", id);
        setUserId(id);
      } catch (error) {
        console.error(error);
      }
    })();

    // Limpeza dos intervalos quando o componente é desmontado
    return () => {
      clearInterval(buscaMensagensACadaSegundo);
    };
  }, []);

  useEffect(() => {
    // Função para enviar mensagem ao pressionar Enter
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        enviarMensagem();
      }
    };

    inputMensagemRef.current.addEventListener("keypress", handleKeyPress);

    return () => {
      inputMensagemRef.current.removeEventListener("keypress", handleKeyPress);
    };
  }, [userId, userMessage, enviarMensagem]);

  useEffect(() => {
    const headerMenu = document.querySelector('.line-on-the-right')
    headerMenu.addEventListener('click', () => {
      setIsButtonVisible(prev => !prev)
      document.querySelector('.chat-open').classList.toggle('invisible')
    });

    return () => {
      headerMenu.removeEventListener('click', () => null)
    }

  },[])

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

  function handleClick() {
    chatRef.current.classList.toggle("active");
  }

  return (
    <div
      className="chat-container"
      ref={chatRef}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="chat-menu">
        <div>
          <img
            className="chat-attendant-img"
            src={attendant}
            alt="Chat atendente"
          />
          <div>
            <h4>ATENDENTE</h4>
            <p>Olá! Como posso ajudar?</p>
          </div>
        </div>

        <img className="chat-menu-img" src={menu} alt="Menu" />
      </div>

      <div className="chat-messages" ref={divMensagensRef}>
        {messages.map((message, index) => {
          const className = `chat-${message.sender === userId ? 'user' : 'attendant'}`
          return <p className={className} key={index}>{message.text}</p>
        })}
        <ScrollChatToBottom/>
      </div>

      <div className="input-container">
        <input type="text" placeholder="Olá, preciso de ajuda!" ref={inputMensagemRef} value={userMessage} onChange={(e) => setUserMessage(e.target.value)}/>
        <div onClick={enviarMensagem}>
          <img src={submit} alt="" />
        </div>
      </div>
      {createPortal(
        <div className="chat-open">
          <div
            className="chat-open--circle"
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
          >
            <img src={open} alt="Open and close" />
            <div className="chat-open--polygon" />
          </div>
          <p className="chat-open--text">FALE CONOSCO</p>
        </div>,
        document.querySelector("body")
      )}
    </div>
  );
}

function ScrollChatToBottom(){
  const ref = useRef()
  useEffect(() => {
    ref?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest'
    })
  })

  return <div ref={ref}/>

}