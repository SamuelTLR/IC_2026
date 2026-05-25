import "../levels.css";
import AbacoImg from "../images/abaco.png"
import PascalinaImg from "../images/pascalina.png"
import FundoEletrico from "../../components/FundoEletrico";
import Button from "../../components/Button";

function Introduction_1() {
  return (
    <>
    <FundoEletrico/>
    <div style={{ color: 'white', padding: '50px' }}>
      <h1 className="main-title">O Início da Computação</h1>
      <h2 className="subtitle">A jornada dos Bits!</h2>

      <div className="content-card">
        <p className="texto">
          A história dos computadores acompanhou a evolução da sociedade durante os séculos XX e XXI. 
          Entretanto, a história do computador não teve início apenas na modernidade. 
          Na verdade, a palavra “computador” vem do verbo “computar” que, por sua vez, significa <strong>“calcular”</strong>. 
          Sendo assim, podemos pensar que a criação de computadores começa desde a idade antiga, já que a relação de contar já intrigava os homens.
          <br></br>
          <br></br>
          Dessa forma, uma das primeiras máquinas de computador foi o <strong>“ábaco”</strong>, instrumento mecânico de origem chinesa criado no século V a.C. Assim, podemos considera-lo o “primeiro computador”, uma espécie de calculadora que realizava operações algébricas.

        </p>

        <div className="images-container">
            <img src={AbacoImg} alt="foto de um ábaco antigo" style={{width: "30rem", height: "auto"}}/>
        </div>

        <p className="texto">
          Só foi depois de muitos anos que o primeiro computador que realizava contas automaticamente, um pouco mais parecido com o que temos hoje, porém cheio de engrenagens.  
          Pascalina, uma máquina mecânica capaz de somar e subtrair usando engrenagens, um salto conceitual decisivo construído em 1642 por <strong>Blaise Pascal</strong>
        </p>

        <div className="images-container">
            <img src={PascalinaImg} alt="foto da máquina Pascalina" style={{width: "30rem", height: "auto"}}/>
        </div>

        <p className="texto">
          A ideia de uma máquina programável só surgiu com <strong>Charles Babbage</strong> no século XIX. 
          Sua Difference Engine (1822) e depois a ambiciosa Analytical Engine já continham conceitos impressionantes: memória, unidade aritmética e controle por cartões perfurados.
          <br></br>
          Mas como o computador que a gente tem hoje chegou em nossas mãos? 
          <br></br>
          <br></br>
          Lembre-se que os computadores de hoje são aparelhos eletrônicos que recebem, armazenam e produzem informações de maneira automática. 
          E tudo isso começou após a criação de um componente ELETRÔNICO. O <strong>RELÉ:</strong>
        </p>
      
        <div className="buttons-container">
          <Button text="Voltar" path="/"/>
          <Button text="Próximo" path="/levels/level-1/minigame"/>
        </div>
        
      </div>
    </div>
    </>
  );
}

export default Introduction_1;