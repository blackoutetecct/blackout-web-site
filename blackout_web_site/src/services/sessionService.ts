import { api } from "../libs/axios";

export class SessionService {
    private recoverSession(){
        let recovered_session = localStorage.getItem("blackout_chat_session");
        return recovered_session;
    }

    private async generatNewSession(){
        const {data} : {data: {id:string}} = await api.get("session");
        const { id } = data;
        localStorage.setItem("blackout_chat_session", id);
        return id;
    }

    async getSession(setSession: React.Dispatch<React.SetStateAction<string>>, ){
        let session = this.recoverSession();

        if(!session){
            session = await this.generatNewSession();
        }

        setSession(session);
    }

}