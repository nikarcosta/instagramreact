import ReactDOM from "react-dom";
import Navibar from "./Navibar";
import Corpo from "./Corpo";
import FundoMobile from "./FundoMobile";

function App(){
    return(
        <div>
            <Navibar />
            <Corpo />
            <FundoMobile />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));