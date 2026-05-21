import FundoEletrico from "../components/FundoEletrico.jsx";
import "./level-1.css";

function Level1() {
  return (
    <>
    <FundoEletrico/>
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
            Dessa forma, uma das primeiras máquinas de computador foi o “ábaco”, instrumento mecânico de origem chinesa criado no século V a.C. 
            Assim, ele é considerado o “primeiro computador”, uma espécie de calculadora que realizava operações algébricas.
          </p>
        </div>
      </main>
    </>
  );
}

export default Level1;