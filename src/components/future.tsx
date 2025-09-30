"use client"

import { useState } from "react"
import styles from "./future.module.css"

// 将来の目標やプロジェクトのデータ
const futureItems = [
  {
    id: 1,
    title: "バックエンド開発",
    description: "バックエンドエンジニアとしてのスキルを磨き、実践的な経験を積む",
    icon: "💻",
  },
  {
    id: 2,
    title: "Dify",
    description: "長期インターンシップでのプロジェクトに注力",
    icon: "🌐",
  },
  {
    id: 3,
    title: "カンファレンス登壇",
    description: "バックエンド領域でのカンファレンス登壇",
    icon: "📱",
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
