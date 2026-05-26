import { useNavigate, BrowserRouter, Routes, Route  } from 'react-router-dom';
import "./Menu.css";
import FundoEletrico from "./FundoEletrico.jsx";
import Button from './Button.jsx';

function Menu() {
    const navigate = useNavigate();

    const buttonIniciar = () => {
        navigate('/levels/level-1');
    };

    return (
        <>
            <FundoEletrico/>
            <div className="Titulo">
                <h1>
                    Computer Bits
                </h1>
                <h2>CEFET-MG - Samuel Tomazela - 2026</h2>
            </div>

            <div className="Botoes">
                <Button onClick={buttonIniciar}>
                    Iniciar
                </Button>
            </div>
        </>
    )
}
    
export default Menu;
