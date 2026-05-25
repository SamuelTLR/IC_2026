import Button from '../components/Button.jsx';
import "./levels.css";
import FundoEletrico from "../components/FundoEletrico.jsx";

function Menu() {
    return (
        <>
            <FundoEletrico/>
            <div className="title-container">
                <h1>
                    Computer Bits
                </h1>
                <h2>CEFET-MG - Samuel Tomazela - 2026</h2>
            </div>

            <div className='main-button-container'>
                <Button text="Iniciar" path="/levels/level-1/introduction" variant='btn_menu'/>
            </div>
        </>
    )
}
    
export default Menu;
