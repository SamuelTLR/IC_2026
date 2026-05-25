import Button from '../components/Button.jsx';
import "./levels.css";

function Menu() {
    return (
        <>
            <div className='windows-xp-container'>
                <div className='windows-xp'>
                    <div className='windows-bar'>
                        <span className="bar-text-xp">Configuração do Computador</span>
                        <div className="bar-controls-xp">
                            <button className="control-btn-xp min-max">_</button>
                            <button className="control-btn-xp min-max">□</button>
                            <button className="control-btn-xp close">X</button>
                        </div>
                    </div>
                    <div className='menu-content-xp'>
                        <div className="welcome-text-xp">
                            <h1>A História da Computação</h1>
                            <h2>CEFET-MG • Samuel Tomazela • 2026</h2>
                        </div>

                        <div className='main-button-container'>
                            <Button text="Iniciar" path="/levels/level-1/introduction" variant='btn_menu'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
    
export default Menu;
