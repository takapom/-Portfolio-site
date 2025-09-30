"use client"

import { useEffect, useRef } from 'react'
import styles from './BackgroundEffects.module.css'

export default function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // キャンバスのサイズをウィンドウに合わせる
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // パーティクルの定義
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      hue: number
      canvasWidth: number
      canvasHeight: number

      constructor(canvasWidth: number, canvasHeight: number) {
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
        this.x = Math.random() * this.canvasWidth
        this.y = Math.random() * this.canvasHeight
        this.size = Math.random() * 3 + 0.5
        this.speedX = Math.random() * 1 - 0.5
        this.speedY = Math.random() * 1 - 0.5
        this.opacity = Math.random() * 0.5 + 0.2
        this.hue = Math.random() * 60 + 200 // 青〜紫の色相
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // 画面外に出たら反対側から出現
        if (this.x > this.canvasWidth) this.x = 0
        else if (this.x < 0) this.x = this.canvasWidth

        if (this.y > this.canvasHeight) this.y = 0
        else if (this.y < 0) this.y = this.canvasHeight
      }

      draw() {
        if (!ctx) return
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.fillStyle = `hsl(${this.hue}, 80%, 60%)`
        ctx.shadowBlur = 15
        ctx.shadowColor = `hsl(${this.hue}, 80%, 60%)`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    // パーティクルの配列を作成
    const particlesArray: Particle[] = []
    const numberOfParticles = 80

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle(canvas.width, canvas.height))
    }

    // 接続線を描画
    function connectParticles() {
      if (!ctx) return
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.save()
            ctx.globalAlpha = 0.15 * (1 - distance / 120)
            ctx.strokeStyle = '#60a5fa'
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
            ctx.restore()
          }
        }
      }
    }

    // アニメーションループ
    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const particle of particlesArray) {
        particle.update()
        particle.draw()
      }

      connectParticles()
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <>
      <div className={styles.gradientMesh} />
      <canvas ref={canvasRef} className={styles.particleCanvas} />
      <div className={styles.gradientOrb1} />
      <div className={styles.gradientOrb2} />
      <div className={styles.gradientOrb3} />
      <div className={styles.gradientOrb4} />
      <div className={styles.gradientOrb5} />
    </>
  )
}
