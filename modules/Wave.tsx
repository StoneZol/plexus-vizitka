'use client'

import { useEffect, useRef } from 'react';

const Wave = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const perspectiveFix = 0;
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight /2

    const updateCanvasSize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight / 2;
      };
  
    updateCanvasSize();
  
    window.addEventListener('resize', updateCanvasSize);

    const focalX = canvas.width / 2;
    const focalY = canvas.height * 0.01;

    const verticalSpacing = 40;
    const speed = 0.02;
    let ofset = 0

    // Горизонтальные линии в перспективе
    const horizontalLines: number[] = [];
    const maxLines = 15;

    const lineCount = 15;
    // const spacing = canvas.width / lineCount;
    let spacingX = canvas.width / lineCount;

    for (let i = 1; i <= maxLines; i++) {
      horizontalLines.push(i);
    }

    function drawGrid() {

    const dpr = window.devicePixelRatio || 1;
    canvas!.width = window.innerWidth * dpr;
    canvas!.height = (window.innerHeight / 2) * dpr;
    canvas!.style.width = `${window.innerWidth}px`;
    canvas!.style.height = `${window.innerHeight / 2}px`;


    const spacing = 60;
    ofset += 1;
    if (ofset >= spacing) {
            ofset = 0;
    }
    ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

    ctx!.strokeStyle = `rgba(0,255,255, ${Math.random() * 0.5 + 0.75})`;
    ctx!.shadowColor = 'cyan';
    ctx!.shadowBlur = 20;
    ctx!.lineWidth = 2;

    spacingX = canvas!.width / lineCount;

      // Вертикальные линии (в перспективу)
    for (let i = 0; i < lineCount; i++) {
        const x = i * spacingX;
        const scale = (x - canvas!.width / 2) * (lineCount+perspectiveFix);
        const y = focalY + (canvas!.height - focalY) * 0.07;

        ctx?.beginPath();
        ctx?.moveTo(x, y);
        ctx?.lineTo(x + scale, canvas!.height);
        ctx?.stroke();
    }

      // Горизонтальные линии (двигаются по перспективе вниз)
      for (let i = 0; i < horizontalLines.length; i++) {
        horizontalLines[i] -= speed;
      
        if (horizontalLines[i] <= 1) {
          horizontalLines[i] = maxLines;
        }
      
        const scale = 1 / horizontalLines[i];
        const y = focalY + (canvas!.height - focalY) * scale;
      
        ctx!.beginPath();
        ctx!.moveTo(0, y);
        ctx!.lineTo(canvas!.width, y);
        ctx!.stroke();
      }
    }

    function animate() {
      drawGrid();
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return <canvas ref={canvasRef} id="wave" />;
};

export default Wave;

