import { useEffect, useRef } from "react";

const CanvasBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w, h, particles;
    const particleDistance = 40;
    const mouse = { x: undefined, y: undefined, radius: 100 };

    function resizeReset() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;

      particles = [];
      for (
        let y = (((h - particleDistance) % particleDistance) + particleDistance) / 2;
        y < h;
        y += particleDistance
      ) {
        for (
          let x = (((w - particleDistance) % particleDistance) + particleDistance) / 2;
          x < w;
          x += particleDistance
        ) {
          particles.push(new Particle(x, y));
        }
      }
    }

    function animationLoop() {
      ctx.clearRect(0, 0, w, h);
      drawScene();
      requestAnimationFrame(animationLoop);
    }

    function drawScene() {
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      drawLine();
    }

    function drawLine() {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < particleDistance * 1.5) {
            const opacity = 1 - distance / (particleDistance * 1.5);
            ctx.strokeStyle = `rgba(255,127,80, ${opacity})`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 4;
        this.baseX = this.x;
        this.baseY = this.y;
        this.speed = Math.random() * 25 + 5;
      }
      draw() {
        ctx.fillStyle = "rgba(255, 255, 255, 1)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
      update() {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = mouse.radius;
        const force = (maxDistance - distance) / maxDistance;
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const directionX = forceDirectionX * force * this.speed;
        const directionY = forceDirectionY * force * this.speed;

        if (distance < mouse.radius) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            const dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            const dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }
      }
    }

    // Initialize the canvas
    resizeReset();
    animationLoop();

    // Add event listeners
    const handleResize = () => resizeReset();
    const handleMouseMove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };
    const handleMouseOut = () => {
      mouse.x = undefined;
      mouse.y = undefined;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0 }} />;
};

export default CanvasBackground;
