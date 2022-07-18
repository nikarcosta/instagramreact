const sugestoes = [
    {img: "assets/img/bad.vibes.memes.svg", alt: "foto-perfil", nome: "bad.vibes.memes", razao: "Segue você"},
    {img: "assets/img/chibirdart.svg", alt: "foto-perfil", nome: "chibirdart", razao: "Segue você"},
    {img: "assets/img/razoesparaacreditar.svg", alt: "foto-perfil", nome: "razoesparaacreditar", razao: "Novo no Instagram"},
    {img: "assets/img/adorable_animals.svg", alt: "foto-perfil", nome: "adorable_animals", razao: "Segue você"},
    {img: "assets/img/smallcutecats.svg", alt: "foto-perfil", nome: "smallcutecats", razao: "Segue você"}
];

function Sugestao(props){
    return(
        <div className="sugestao">
        <div className="usuario">
          <img src={props.img} alt={props.alt}/>
          <div className="texto">
            <div className="nome">{props.nome}</div>
            <div className="razao">{props.razao}</div>
          </div>
        </div>

        <div className="seguir">Seguir</div>
      </div>
    );
}

export default function Sugestoes(){
    return(
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            { sugestoes.map((sugestao, index) => (<Sugestao key={index} img={sugestao.img} alt={sugestao.alt} nome={sugestao.nome} razao={sugestao.razao}/>)) }
        </div>
    );
}