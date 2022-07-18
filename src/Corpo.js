import Posts from "./Posts";
import Stories from "./Stories";
import Sugestoes from "./Sugestoes";


function Usuario(){
    const nomeUsuario = "Catana";
    const nickName = "catancomics";

    return(
        <div className="usuario">
        <img src="assets/img/catanacomics.svg" alt="profile"/>
        <div className="texto">
          <strong>{nickName}</strong>
          {nomeUsuario}
        </div>
      </div>  
    );
}

export default function Corpo(){
    return(
        <div className="corpo">
          <div className="esquerda">
            <Stories />
            <Posts />
          </div>
  
          <div className="sidebar">
            <Usuario />
            <Sugestoes />  
            <div className="links">
              Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>
  
            <div className="copyright">
              © 2021 INSTAGRAM DO FACEBOOK
            </div>
          </div>
        </div>
    );
}