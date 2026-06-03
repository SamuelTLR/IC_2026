import { useEffect, useRef } from "react";

const FundoEletrico = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    // Configuração dos Bits
    const particles = [];
    const particleCount = 100; // Quantidade de bits
    const connectionDist = 150; // Distância para o "raio" aparecer

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        value: Math.round(Math.random())
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = "14px monospace";
      
      particles.forEach((p, i) => {
        // Move os bits
        p.x += p.vx;
        p.y += p.vy;

        // Rebate nas bordas
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Desenha o bit
        ctx.fillStyle = "rgba(23, 132, 227, 0.8)";
        ctx.fillText(p.value, p.x, p.y);

        // Lógica da "Eletricidade" (Conexões)
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            ctx.beginPath();
            // Efeito de brilho azul
            ctx.strokeStyle = `rgba(0, 191, 255, ${1 - dist / connectionDist})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
    background: '#050505'
  }} />;
};

export default FundoEletrico;
