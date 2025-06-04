"use client"

import { useState } from "react"
import styles from "./tech-stack.module.css"

type TechCategory = "languages" | "frontend" | "backend" | "tools" | "other"

type Technology = {
  name: string
  icon: string
  proficiency: number // 1-5
  category: TechCategory
  description?: string
}

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<TechCategory | "all">("all")
  const [activeTech, setActiveTech] = useState<string | null>(null)

  const technologies: Technology[] = [
    // プログラミング言語
    {
      name: "Python",
      icon: "🐍",
      proficiency: 4,
      category: "languages",
      description: "Djangoでバックエンド開発に使用",
    },
    {
      name: "TypeScript",
      icon: "📘",
      proficiency: 4,
      category: "languages",
      description: "型安全な開発のための主要言語として使用",
    },
    {
      name: "JavaScript",
      icon: "📒",
      proficiency: 4,
      category: "languages",
      description: "Webフロントエンド開発の基盤として使用",
    },
    {
      name: "Java",
      icon: "☕",
      proficiency: 2,
      category: "languages",
      description: "バックエンド開発とインターンでの使用経験",
    },
    {
      name: "Go",
      icon: "😍",
      proficiency: 3,
      category: "languages",
      description: "個人開発とインターンでの使用経験",
    },

    // フロントエンド
    {
      name: "HTML/CSS",
      icon: "🎨",
      proficiency: 3,
      category: "frontend",
      description: "Webページの構造とスタイリング",
    },
    {
      name: "JavaScript",
      icon: "📒",
      proficiency: 3,
      category: "frontend",
      description: "Webフロントエンド開発の基盤として使用",
    },
    {
      name: "TypeScript",
      icon: "📘",
      proficiency: 4,
      category: "frontend",
      description: "型安全な開発のための主要言語として使用",
    },
    {
      name: "React",
      icon: "⚛️",
      proficiency: 3,
      category: "frontend",
      description: "UIコンポーネント構築の主要ライブラリ",
    },
    {
      name: "Next.js",
      icon: "▲",
      proficiency: 3,
      category: "frontend",
      description: "個人開発とインターンでの使用",
    },

    // バックエンド
    { name: "MySQL", icon: "🐘", proficiency: 3, category: "backend", description: "リレーショナルデータベース" },
    {
      name: "Firebase",
      icon: "🔥",
      proficiency: 3,
      category: "backend",
      description: "Googleのアプリ開発プラットフォーム",
    },

    // ツール
    { name: "Git", icon: "🔄", proficiency: 5, category: "tools", description: "バージョン管理システム" },
    { name: "Docker", icon: "🐳", proficiency: 3, category: "tools", description: "コンテナ化プラットフォーム" },
    { name: "GitHub Actions", icon: "🔄", proficiency: 3, category: "tools", description: "CI/CDパイプライン" },
    { name: "VS Code", icon: "📝", proficiency: 5, category: "tools", description: "主要コードエディタ" },

    // その他
    { name: "Figma", icon: "🎯", proficiency: 3, category: "other", description: "UIデザインツール" },
  ]

  const categories = [
    { id: "all", name: "All" },
    { id: "languages", name: "Languages" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "tools", name: "Tools" },
    { id: "other", name: "Other" },
  ]

  const filteredTech =
    activeCategory === "all"
      ? technologies.filter((tech, index, self) => index === self.findIndex((t) => t.name === tech.name))
      : technologies.filter((tech) => tech.category === activeCategory)

  const handleTechClick = (techName: string) => {
    if (activeTech === techName) {
      setActiveTech(null)
    } else {
      setActiveTech(techName)
    }
  }

  const getActiveTech = () => {
    return technologies.find((tech) => tech.name === activeTech)
  }

  return (
    <div className={styles.techStackContainer}>
      <h2 className={styles.sectionTitle}>Tech Stack</h2>
      <div className={styles.sectionDivider}></div>

      <div className={styles.categoryNav}>
        {categories.map((category) => (
          <button
            key={category.id}
            className={`${styles.categoryButton} ${activeCategory === category.id ? styles.active : ""}`}
            onClick={() => setActiveCategory(category.id as TechCategory | "all")}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className={styles.techGrid}>
        {filteredTech.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className={`${styles.techItem} ${activeTech === tech.name ? styles.activeTech : ""}`}
            onClick={() => handleTechClick(tech.name)}
          >
            <div className={styles.techIcon}>{tech.icon}</div>
            <div className={styles.techInfo}>
              <div className={styles.techName}>{tech.name}</div>
              <div className={styles.proficiencyBar}>
                {[1, 2, 3, 4, 5].map((level) => (
                  <div
                    key={level}
                    className={`${styles.proficiencyLevel} ${level <= tech.proficiency ? styles.filled : ""}`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeTech && (
        <div className={styles.techDetails}>
          <div className={styles.techDetailsContent}>
            <div className={styles.techDetailsHeader}>
              <span className={styles.techDetailsIcon}>{getActiveTech()?.icon}</span>
              <h3 className={styles.techDetailsName}>{getActiveTech()?.name}</h3>
            </div>
            <p className={styles.techDetailsDescription}>{getActiveTech()?.description}</p>
            <div className={styles.techDetailsProficiency}>
              <span className={styles.techDetailsProficiencyLabel}>Proficiency:</span>
              <div className={styles.techDetailsProficiencyBar}>
                {[1, 2, 3, 4, 5].map((level) => (
                  <div
                    key={level}
                    className={`${styles.techDetailsProficiencyLevel} ${level <= (getActiveTech()?.proficiency || 0) ? styles.filled : ""}`}
                  ></div>
                ))}
              </div>
              <span className={styles.techDetailsProficiencyText}>
                {getActiveTech()?.proficiency === 1 && "Beginner"}
                {getActiveTech()?.proficiency === 2 && "Elementary"}
                {getActiveTech()?.proficiency === 3 && "Intermediate"}
                {getActiveTech()?.proficiency === 4 && "Advanced"}
                {getActiveTech()?.proficiency === 5 && "Expert"}
              </span>
            </div>
          </div>
          <button className={styles.techDetailsClose} onClick={() => setActiveTech(null)}>
            ×
          </button>
        </div>
      )}
    </div>
  )
}
