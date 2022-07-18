const nomeIcones = ["home","search-outline","add-circle-outline","heart-outline","person-outline"]

function Icone(props){
    return <ion-icon name={props.name}></ion-icon>;
}

export default function FundoMobile(){
    return(
        <div className="fundo-mobile">
            {nomeIcones.map((nomeIcone, index) => <Icone key={index} name={nomeIcone} />)}  
        </div>   
    );
}