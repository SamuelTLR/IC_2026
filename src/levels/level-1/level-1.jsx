import FundoEletrico from "../../components/FundoEletrico.jsx";
import Button from "../../components/Button.jsx";
import { useNavigate } from "react-router-dom";
import "./level-1.css";

function Level1() {
  const navigate = useNavigate();

  const buttonProximo = () => {
        navigate('/levels/level-1/minigame');
  };

   const buttonVoltar = () => {
        navigate('/');
    };

  return (
    <>
    <FundoEletrico/>
      <body>
      <main style={{ padding: '40px 20px', display: 'flex', alignItems:'flex-start' }}>
        <div className="content-card">
          {/* Cabeçalho destacado */}
          <h1 className="main-title">O Início da Computação</h1>
          <h2 className="subtitle">A história por trás dos bits</h2>
          
          <p className="texto">
            A evolução dos computadores acompanhou a evolução da sociedade durante os séculos XX e XXI. 
            Entretanto, a história do computador não teve início apenas na modernidade. 
            Na verdade, a palavra “computador” vem do verbo “computar” que, por sua vez, significa “calcular”. 
            Sendo assim, podemos pensar que a criação de computadores começa na idade antiga, já que a relação de contar já intrigava os homens.
            <br /><br />
            <div className="imagem">
              <img src="../img/abaco.png" alt="Ábaco antigo" style={{ width: '400px', height: 'auto', mixBlendMode: 'multiply' }}/>
            </div>
            Sendo assim, uma das primeiras máquinas de computador foi o “ábaco”, instrumento mecânico de origem chinesa criado no século V a.C. 
            Ele é considerado o “primeiro computador”, uma "calculadora" que realizava operações algébricas.

            Só foi depois de muitos anos que o primeiro computador que realizava contas automaticamente, um pouco mais parecido com a calculadora que temos hoje, porém cheio de engrenagens. 
            Pascalina, uma máquina mecânica capaz de somar e subtrair usando engrenagens, um salto conceitual decisivo construído em 1642 por Blaise Pascal.

            A ideia de uma máquina programável só surgiu com Charles Babbage no século XIX. Sua Difference Engi ne (1822) e depois a ambiciosa Analytical Engine (nunca concluída) já continham conceitos impressionantes: memória, unidade aritmética e controle por cartões perfurados.
            Mas como o computador que a gente tem hoje chegou em nossas mãos? 
            Lembre-se que os computadores de hoje são aparelhos eletrônicos que recebem, armazenam e produzem informações de maneira automática. 
            E tudo isso começou após a criação de um componente ELETRÔNICO.

          </p>

          <div className="buttons">
            <Button onClick={buttonVoltar}>
              Voltar
            </Button>
            <Button onClick={buttonProximo}>
              Próximo
            </Button>
          </div>

          
        </div>
        
        
      </main>
      </body>
    </>
  );
}

export default Level1;