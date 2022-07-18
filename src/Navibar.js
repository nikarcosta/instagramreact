const nomeIcones = ["paper-plane-outline","compass-outline","heart-outline","person-outline"];

function Icone(props){
    return <ion-icon name={props.name}></ion-icon>;
}

export default function Navibar(){
    return(
        <div className="navbar">
        <div className="container">
          <div className="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div class="separador"></div>
            <img src="assets/img/logo.png" alt="logo"/>
          </div>

          <div className="logo-mobile">
            <ion-icon name="logo-instagram"></ion-icon>
          </div>

          <div className="instagram-mobile">
            <img src="assets/img/logo.png" alt="logo-mobile"/>
          </div>
  
          <div className="pesquisa">
            <input type="text" placeholder="Pesquisar" />
          </div>
  
          <div className="icones">
              {nomeIcones.map((nomeIcone, index) => (
                  <Icone key={index} name={nomeIcone} />))}
          </div>

          <div className="icones-mobile">
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
        </div>
      </div>
    );
}