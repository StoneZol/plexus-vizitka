'use client'

import { useEffect, useRef} from 'react';

const NeonCity = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const drawTower = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.clearRect(0, 0, width, height);

    const baseX = width / 2;
    const baseY = height;

    const baseTowerWidth = width * 0.05;
    const towerHeight = width*0.2
    const levels = 16;
    const levelHeight = towerHeight / levels;

    // Основная башня
    for (let i = 0; i < levels; i++) {
      const y = baseY - (i + 1) * levelHeight;
      const widthFactor = 1 - (i / levels) * 0.5;
      const levelWidth = baseTowerWidth * widthFactor;
      const x = baseX - levelWidth / 2;

      const flicker = Math.random() > 0.8;

      ctx.beginPath();
      ctx.rect(x, y, levelWidth, levelHeight - 2);
      ctx.fillStyle = flicker ? '#0a0a0a' : '#101010';
      ctx.shadowColor = 'cyan';
      ctx.shadowBlur = 10;
      ctx.fill();

      ctx.strokeStyle = 'cyan';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(x + 4, y + 4);
      ctx.lineTo(x + levelWidth - 4, y + 4);
      ctx.strokeStyle = '#ff00ff';
      ctx.shadowColor = '#ff00ff';
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    const subTowerOffset = baseTowerWidth * 0.8;
    // Подбашни (по бокам от основной башни)

    const drawSubTower = (subLevels: number, startX: number) => {

      const subTowerWidth = baseTowerWidth * 0.5;
      const subTowerHeight = towerHeight / 100 * subLevels*5;
      const subLevelHeight = subTowerHeight / subLevels;

      for (let i = 0; i < subLevels; i++) {
        const y = baseY - (i + 1) * subLevelHeight;
        const widthFactor = 1 - (i / subLevels) * 0.3;
        const levelWidth = subTowerWidth * widthFactor;
        const x = startX - levelWidth / 2;

        ctx.beginPath();
        ctx.rect(x, y, levelWidth, subLevelHeight - 2);
        ctx.fillStyle = '#0d0d0d';
        ctx.shadowColor = 'cyan';
        ctx.shadowBlur = 10;
        ctx.fill();

        ctx.strokeStyle = 'cyan';
        ctx.lineWidth = 1.1;
        ctx.stroke();
      }
    };

    // Левые подбашни
    drawSubTower(15,baseX - subTowerOffset*0.8);
    drawSubTower(17,baseX - subTowerOffset*1.4);
    drawSubTower(11,baseX - subTowerOffset*2.2);
    drawSubTower(8,baseX - subTowerOffset*2.5);

    drawSubTower(11,baseX - subTowerOffset*1.1);
    drawSubTower(14,baseX - subTowerOffset*1.8);

    // Правые подбашни
    drawSubTower(18,baseX + subTowerOffset*0.8);
    drawSubTower(16,baseX + subTowerOffset*1.4);
    drawSubTower(14,baseX + subTowerOffset*2);
    drawSubTower(9,baseX + subTowerOffset*2.5);

    drawSubTower(10,baseX + subTowerOffset*1.1);
    drawSubTower(12,baseX + subTowerOffset*1.8);

    // Антенна
    ctx.beginPath();
    ctx.moveTo(baseX, baseY - towerHeight);
    ctx.lineTo(baseX, baseY - towerHeight - 30);
    ctx.strokeStyle = 'magenta';
    ctx.shadowColor = 'magenta';
    ctx.lineWidth = 2;
    ctx.stroke();

    
  };

  const resizeCanvas = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      if (ctx) {

        const dpr = window.devicePixelRatio || 1;
        canvas!.width = window.innerWidth * dpr;
        canvas!.height = (window.innerHeight / 2) * dpr;
        canvas!.style.width = `${window.innerWidth}px`;
        canvas!.style.height = `${window.innerHeight / 2}px`;

        ctx.setTransform(1, 0, 0, 1, 0, 0);

        drawTower(ctx, canvas.width, canvas.height);
      }
    }
  };

  useEffect(() => {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);
  
  


  return (
    <canvas id ="neon_city"ref={canvasRef}/>
  );
};

export default NeonCity;
