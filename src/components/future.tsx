"use client"

import { useState } from "react"
import styles from "./future.module.css"

// 将来の目標やプロジェクトのデータ
const futureItems = [
  {
    id: 1,
    title: "フルスタック開発",
    description: "バックエンドとフロントエンドの両方のスキルを磨く、特にバックエンドではGoやDjangoを磨く",
    icon: "💻",
  },
  {
    id: 2,
    title: "チーム開発の経験",
    description: "インターンや友人とのチーム開発のプロジェクトを通して、実践的な経験を積む",
    icon: "🌐",
  },
  {
    id: 3,
    title: "モバイルアプリ開発",
    description: "React Native、Swiftを学び、モバイルアプリの開発に挑戦する",
    icon: "📱",
  },
  {
    id: 4,
    title: "パフォーマンスチューニングへの挑戦",
    description: "アプリケーションのパフォーマンスを最適化し、ユーザー体験を向上させる",
    icon: "🤖",
  },
  {
    id: 5,
    title: "マネタイズ経験",
    description: "アプリを開発し、学生の間に1円でも収益を上げる経験をする",
    icon: "💰",
  },
  {
    id: 6,
    title: "大富豪",
    description: "お金持ちになって最強の男になる",
    icon: "👨",
  },
]

export default function Future() {
  const [activeItem, setActiveItem] = useState<number | null>(null)

  return (
    <section className={styles.futureSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Future Vision<span className={styles.titleAccent}>.</span>
        </h2>
        <p className={styles.subtitle}>今後挑戦していきたいこと・なりたい人物像</p>

        <div className={styles.itemsGrid}>
          {futureItems.map((item) => (
            <div
              key={item.id}
              className={`${styles.item} ${activeItem === item.id ? styles.active : ""}`}
              onMouseEnter={() => setActiveItem(item.id)}
              onMouseLeave={() => setActiveItem(null)}
            >
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{item.icon}</span>
              </div>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDescription}>{item.description}</p>
              <div className={styles.itemBackground}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
