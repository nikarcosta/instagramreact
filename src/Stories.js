const stories = [
    {img: "assets/img/9gag.svg", alt: "foto-perfil", usuario: "9gag"},
    {img: "assets/img/meowed.svg", alt: "foto-perfil", usuario: "meowed"},
    {img: "assets/img/barked.svg", alt: "foto-perfil", usuario: "barked"},
    {img: "assets/img/nathanwpylestrangeplanet.svg", alt: "foto-perfil", usuario: "nathanwpylestrangeplanet"},
    {img: "assets/img/wawawicomics.svg", alt: "foto-perfil", usuario: "wawawicomics"},
    {img: "assets/img/respondeai.svg", alt: "foto-perfil", usuario: "respondeai"},
    {img: "assets/img/filomoderna.svg", alt: "foto-perfil", usuario: "filomoderna"},
    {img: "assets/img/memeriagourmet.svg", alt: "foto-perfil", usuario: "memeriagourmet"}
]

function Story(props){
    return(
        <div className="story">
        <div className="imagem">
          <img src={props.img} alt={props.alt} />
        </div>
        <div className="usuario">
          {props.usuario}
        </div>
      </div>  
    );
}

export default function Stories(){
    return(
    <div className="stories">
        { stories.map((story,index) => (<Story key={index} img={story.img} alt={story.alt} usuario={story.usuario}/>))}
        <div className="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    </div> 
    );
}