
import "../levels.css";
import InteractiveImage from "../../components/InteractiveImage";
import releDesligado from "../images/rele_desligado.png";
import releLigado from "../images/rele_ligado.png";
import Button from "../../components/Button";

function Minigame_1() {
  return(
    <>
      <div className="windows-xp-container"> 
      <div className="windows-xp-box">
        <div className="windows-bar">
          <span className="bar-text-xp">Início da Computação - A história dos Bits!</span>
          <div className="bar-controls-xp">
            <button className="control-btn-xp min-max">_</button>
            <button className="control-btn-xp min-max">□</button>
            <button className="control-btn-xp close">X</button>
          </div>
        </div>

        <div className="content-xp">
          <div className="welcome-text-xp">
            <h1> Relé </h1>
          </div>

          <div className="text">
            
          </div>

          <div className="images_container">
            <InteractiveImage src={releLigado} src2={releDesligado} alt="Relé ligado" alt2="ReléDesligado"/>
          </div>
        
          <div className="buttons-container-xp">
            <Button text="Voltar" path="/levels/level-1/introduction" variant="btn_menu"/>
            <Button text="Próximo" path="/levels/level-1/minigame" variant="btn_menu"/>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}


export default Minigame_1;