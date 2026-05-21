import { useNavigate, BrowserRouter, Routes, Route  } from 'react-router-dom';
import "./Navbar.css";
import FundoEletrico from "./FundoEletrico.jsx";

function Navbar() {
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
                <div className='Iniciar' onClick={buttonIniciar}>
                    Iniciar
                </div>
            </div>
        </>
    )
}
    
export default Navbar;
