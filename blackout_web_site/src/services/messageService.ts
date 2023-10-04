import { api } from "../libs/axios";
import { IMessage } from "../types/message";

export class MessageService {
  async enviarMensagem(
    userMessage: string,
    setUserMessage: React.Dispatch<React.SetStateAction<string>>,
    session: string,
    setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>
  ) {
    //Envia mensagem
    await api.post(`message`, {
      text: userMessage,
      session,
    });
    setUserMessage("");

    // Busca todas as mensagens
   await this.buscaTodasMensagens(session, setMessages);
  }

  async buscaTodasMensagens(
    session: string,
    setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>
  ) {
    let { data } = await api.get("message", {
      params: {
        session,
      },
    });
    const messages: IMessage[] = data.map((message) => {
      return {
        time: message.time,
        text: message.text,
        admin: message.admin,
      };
    });
    setMessages(messages);
  }
}
