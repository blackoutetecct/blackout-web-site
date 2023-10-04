import React, { useEffect, useMemo, useRef } from "react";
import "./style.css";

import {  useState } from "react";
import { createPortal } from "react-dom";
import attendant from "../../images/chat.png";
import close from "../../images/close.png";
import minimize from "../../images/minimize.png";
import open from "../../images/open-chatv2.png";
import submit from "../../images/submit.png";
import { api } from "../../libs/axios";
import { MessageService } from "../../services/messageService.ts";
import { SessionService } from "../../services/sessionService.ts";

export default function Chat() {
  // Refs
  const chatRef = useRef();
  const divMensagensRef = useRef();
  const inputMensagemRef = useRef();
  const finishChatRef = useRef();

  // Estados
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [session, setSession] = useState("");

  const messageService = useMemo(() => new MessageService(),[]);
  const sessionService = useMemo(()=> new SessionService(),[]);

  useEffect(() => {
    // Recupera o Seção do chat ou cria uma nova
    (async () => {
      await sessionService.getSession(setSession);
    })();
  }, [sessionService]);

  useEffect(() => {
// Busca mensagens a cada segundo
  const buscaMensagensACadaSegundo = setInterval(async () => {
    await messageService.buscaTodasMensagens(session, setMessages);
  }, 1000);

   // Limpeza dos intervalos quando o componente é desmontado
   return () => {
    clearInterval(buscaMensagensACadaSegundo);
  };
  }, [session, messageService]);

  useEffect(() => {
    // Função para enviar mensagem ao pressionar Enter
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        messageService.enviarMensagem(userMessage, setUserMessage, session, setMessages);
      }
    };

    inputMensagemRef.current.addEventListener("keypress", handleKeyPress);

    const ref = inputMensagemRef.current;

    return () => {
      ref.removeEventListener("keypress", handleKeyPress);
    };
  }, [session, userMessage, messageService, ]);

  useEffect(() => {
    const headerMenu = document.querySelector(".line-on-the-right");
    headerMenu.addEventListener("click", () => {
      document.querySelector(".chat-open").classList.toggle("invisible");
    });

    return () => {
      headerMenu.removeEventListener("click", () => null);
    };
  }, []);

  async function finalizaChat(){
    await api.delete(`message`, {
      params: { session: session },
    });
    localStorage.removeItem("blackout_chat_session");
    chatRef.current.classList.remove("active")
    handleFinishChatVisibility();
  }

  function handleClick() {
    chatRef.current.classList.toggle("active");
  }

  function handleFinishChatVisibility() {
    finishChatRef.current.classList.toggle("active");
  }

  return (
    <div
      className="chat-container"
      ref={chatRef}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="menu-actions">
        <button onClick={handleClick}>
          <img src={minimize} alt="Minimize icon" />
        </button>
        <button onClick={handleFinishChatVisibility}>
          <img src={close} alt="Close icon" />
        </button>
      </div>

      <div ref={finishChatRef} className="finish_chat_modal">
        <p className="finish_chat_modal--title">Encerrar Chat</p>

        <p className="finish_chat_modal--confirm-text">
          Todas as mensagens no chat serão apagadas. Deseja encerrar esta
          sessão?
        </p>

        <div className="finish_chat_modal--actions-wrapper">
          <button className="finish_chat_modal--cancel" onClick={handleFinishChatVisibility}>Cancelar</button>
          <button className="finish_chat_modal--confirm" onClick={finalizaChat}>
            Finalizar agora
          </button>
        </div>
      </div>

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
      </div>

      <div className="chat-messages" ref={divMensagensRef}>
        {messages.map((message, index) => {
          const className = `chat-${
            !message.admin ? "user" : "attendant"
          }`;
          return (
            <p className={className} key={index}>
              {message.text}
            </p>
          );
        })}
        <ScrollChatToBottom />
      </div>

      <div className="input-container">
        <input
          type="text"
          placeholder="Olá, preciso de ajuda!"
          ref={inputMensagemRef}
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <div onClick={() => {
          messageService.enviarMensagem(userMessage, setUserMessage, session, setMessages);
        }}>
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

function ScrollChatToBottom() {
  const ref = useRef();
  useEffect(() => {
    ref?.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  });

  return <div ref={ref} />;
}
