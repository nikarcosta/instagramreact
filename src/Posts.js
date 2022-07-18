import React from "react";

const posts = [
    {imgUsuario: "assets/img/meowed.svg", alt: "foto-perfil", usuario: "meowed", conteudo:"assets/img/gato-telefone.svg", altConteudo: "foto-post", imgCurtidas: "assets/img/respondeai.svg", altCurtidas:"foto-perfil"},
    {imgUsuario: "assets/img/barked.svg", alt: "foto-perfil",usuario: "barked", conteudo:"assets/img/dog.svg", altConteudo: "foto-post", imgCurtidas: "assets/img/adorable_animals.svg", altCurtidas:"foto-perfil"}
];


function Acoes(){

    const [nameIconHeartOutline, setNameIconHeartOutline] = React.useState("nao-curtido visivel");
    const [nameIconHeart, setNameIconHeart] = React.useState("curtido escondido");
  
    function curtir(){
      setNameIconHeartOutline("nao-curtido escondido");
      setNameIconHeart("curtido visivel md hydrated");
    }
  
    function descurtir(){
      setNameIconHeartOutline("nao-curtido visivel md hydrated");
      setNameIconHeart("curtido escondido");
    }
  
      return(
          <div className="acoes">
          <div>
            <ion-icon class={nameIconHeartOutline} name="heart-outline" onClick={curtir}></ion-icon>
            <ion-icon class={nameIconHeart} name="heart" onClick={descurtir}></ion-icon>  
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>
      );
  }


function Post(props){
    return(
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.imgUsuario} alt={props.alt}/>
                    {props.usuario}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={props.conteudo} alt={props.altConteudo}/>
            </div>

            <div className="fundo">
                <Acoes />
                <div className="curtidas">
                    <img src={props.imgCurtidas} alt={props.altCurtidas} />
                    <div className="texto">
                        Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                    </div>
                </div>
            </div>
      </div>
    );
}

export default function Posts(){
    return(
        <div className="posts">
            { posts.map((post, index) => (<Post key={index} imgUsuario={post.imgUsuario} alt={post.alt} usuario={post.usuario} conteudo={post.conteudo} altConteudo={post.altConteudo} imgCurtidas={post.imgCurtidas} altCurtidas={post.altCurtidas}/>))}
        </div>      
    );
}