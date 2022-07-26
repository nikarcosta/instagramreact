import React from "react";

const posts = [
    {imgUsuario: "assets/img/meowed.svg", alt: "foto-perfil", usuario: "meowed", conteudo:"assets/img/gato-telefone.svg", altConteudo: "foto-post", imgCurtidas: "assets/img/respondeai.svg", altCurtidas:"foto-perfil", mainLiked:"respondeai", qtdLikes:"outras 101.523 pessoas", liked:"true", mediaType:"image"},
    {imgUsuario: "assets/img/barked.svg", alt: "foto-perfil",usuario: "barked", conteudo:"assets/img/dog.svg", altConteudo: "foto-post", imgCurtidas: "assets/img/adorable_animals.svg", altCurtidas:"foto-perfil", mainLiked:"adorable_animals", qtdLikes:"outras 99.159 pessoas", liked:"true", mediaType:"image"},
    {imgUsuario: "assets/img/barked.svg", alt: "foto-perfil",usuario: "barked", conteudo:"assets/video/video.mp4", altConteudo: "foto-post", imgCurtidas: "assets/img/adorable_animals.svg", altCurtidas:"foto-perfil", mainLiked:"adorable_animals", qtdLikes:"outras 99.159 pessoas", liked:"true", mediaType:"video"}
];


function Post(props){

    const [liked, setLiked] = React.useState(props.liked);

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
                {
                    props.mediaType === 'image' ? (<img src={props.conteudo} alt={props.altConteudo} onClick={() => setLiked(!liked)}/>) : (<video onClick={() => setLiked(!liked)} autoPlay muted loop controls>
                    <source src={props.conteudo} type="video/mp4"></source>
                  </video>)
                }
                
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        {
                            liked ? (<ion-icon name="heart" className="liked" onClick={() => setLiked(!liked)}></ion-icon>): (<ion-icon name="heart-outline" onClick={() => setLiked(!liked)}></ion-icon>)
                        }
                         
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
                </div>
                <div className="curtidas">
                    <img src={props.imgCurtidas} alt={props.altCurtidas} />
                    <div className="texto">
                        Curtido por <strong>{props.mainLiked}</strong> e <strong>{props.qtdLikes}</strong>
                    </div>
                </div>
            </div>
      </div>
    );
}

export default function Posts(){
    return(
        <>
        <div className="posts">
            { posts.map((post, index) => (<Post key={index} imgUsuario={post.imgUsuario} alt={post.alt} usuario={post.usuario} conteudo={post.conteudo} altConteudo={post.altConteudo} imgCurtidas={post.imgCurtidas} altCurtidas={post.altCurtidas} mainLiked={post.mainLiked} qtdLikes={post.qtdLikes} liked={post.liked} mediaType={post.mediaType}/>))}
        </div>
        </>              
    );
}