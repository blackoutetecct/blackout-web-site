import React, { useCallback, useEffect, useRef, useState } from 'react';
import './style.css';

import ChatImage from '../../images/chat2.svg';
import { api } from '../../libs/axios';
import Message from '../Message';

export default function Chat() {
  // Refs
  const botaoAbrirChatRef = useRef();
  const chatRef = useRef();
  const botaoEnviarMensagemRef = useRef();
  const inputMensagemRef = useRef();
  const divMensagensRef = useRef();

  // Estados
  const [messages, setMessages] = useState();
  const [userId, setUserId] = useState("");
  const [userMessage, setUserMessage] = useState("");

  // Função para enviar mensagem
  const enviarMensagem = useCallback(async () => {
    setUserMessage("");

    await api.post(`message/send?response=f906ca07-e369-4b2f-999e-26dac2f5c8e9`, {
      text: userMessage,
      sender: userId
    });

    // Busca todas as mensagens e aramazena somente as informações necessarias
    let allMessages = await api.get('message/all');
    allMessages = allMessages.data.map(message => {
      return {
        time: message.time,
        text: message.text,
        sender: message.sender
      };
    });
    setMessages(allMessages);

    // Espera 100 milisegundos apos o envio da mensagem e rola a div para baixo para a nova mensagem ficar visivel
    setTimeout(() => {
      divMensagensRef.current.scrollTop = divMensagensRef.current.scrollHeight;
    }, 100);
  }, [userId, userMessage]);

  useEffect(() => {
    // Busca mensagens a cada segundo
    const buscaMensagensACadaSegundo = setInterval(async () => {
      let allMessages = await api.get('message/all');
      allMessages = allMessages.data.map(message => {
        return {
          time: message.time,
          text: message.text,
          sender: message.sender
        };
      });
      setMessages(allMessages);
    }, 1000);

    // Recupera o ID do usuário ou cria um novo
    (async () => {
      try {
        let recovered_user_id = localStorage.getItem('blackout_chat_user_id');
        if (recovered_user_id) {
          setUserId(recovered_user_id);
          return;
        }
        const response = await api.post('user/save', {});
        const { id } = response.data;
        localStorage.setItem('blackout_chat_user_id', id);
        setUserId(id);
      } catch (error) {
        console.error(error);
      }
    })();

    function handleClick(){
        chatRef.current.classList.toggle('chatbox--active');
      };

    // Event listener para abrir/fechar o chat
    botaoAbrirChatRef.current.addEventListener('click', handleClick);

    // Limpeza dos intervalos quando o componente é desmontado
    return () => {
      clearInterval(buscaMensagensACadaSegundo);
      botaoAbrirChatRef.current.removeEventListener('click', handleClick)
    };
  }, []);

  useEffect(() => {
    // Função para enviar mensagem ao pressionar Enter
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        enviarMensagem();
      }
    };

    inputMensagemRef.current.addEventListener('keypress', handleKeyPress);

    return () => {
      inputMensagemRef.current.removeEventListener('keypress', handleKeyPress);
    };
  }, [userId, userMessage, enviarMensagem]);

  return (
    <div className="container">
      <div className="chatbox">
        <div className="chatbox__support" ref={chatRef}>
          <div className="chatbox__header">
            <div className="chatbox__image--header">
              <img src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" alt="user" />
            </div>
            <div className="chatbox__content--header">
              <h4 className="chatbox__heading--header">Fale conosco</h4>
              <p className="chatbox__description--header">Olá! como posso te ajudar?</p>
            </div>
          </div>
          <div className="chatbox__messages" ref={divMensagensRef}>
            {messages && messages.map((message, index) => (
              <Message
                message={message.text}
                sender={message.sender === userId ? "me" : "support"}
                key={index}
              />
            ))}
          </div>
          <div className="chatbox__footer">
            <input
              type="text"
              placeholder="Digitar mensagem..."
              className="message_input"
              ref={inputMensagemRef}
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
            />
            <button
              className="chatbox__send--footer send__button"
              ref={botaoEnviarMensagemRef}
              onClick={enviarMensagem}
            >
              Enviar
            </button>
          </div>
        </div>
        <div className="chatbox__button">
          <button ref={botaoAbrirChatRef}>
            <img src={ChatImage} className="img-chat" alt="chat" />
          </button>
        </div>
      </div>
    </div>
  );
}
