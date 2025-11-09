"use client"

import { useState } from "react"
import styles from "./tech-stack.module.css"
import { 
  SiPython, 
  SiTypescript, 
  SiJavascript, 
  SiOpenjdk,
  SiGo,
  SiReact,
  SiNextdotjs,
  SiMysql,
  SiFirebase,
  SiGit,
  SiDocker,
  SiGithubactions,
  SiFigma,
  SiHtml5,
  SiCss3,
  SiRubyonrails,
  SiDjango,
  SiSupabase,
  SiOpenai,
  SiAmazon
} from "react-icons/si"
import { VscCode } from "react-icons/vsc"
import { IconType } from "react-icons"

type TechCategory = "languages" | "frontend" | "backend" | "tools" | "other"

type Technology = {
  name: string
  icon: IconType
  proficiency: number // 1-5
  category: TechCategory
  description?: string
}

export default function TechStack() {
  const [activeTech, setActiveTech] = useState<string | null>(null)

  const technologies: Technology[] = [
    // プログラミング言語
    {
      name: "Python",
      icon: SiPython,
      proficiency: 4,
      category: "languages",
      description: "Djangoでバックエンド開発に使用",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      proficiency: 4,
      category: "languages",
      description: "型安全な開発のための主要言語として使用",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      proficiency: 4,
      category: "languages",
      description: "Webフロントエンド開発の基盤として使用",
    },
    {
      name: "Java",
      icon: SiOpenjdk,
      proficiency: 2,
      category: "languages",
      description: "バックエンド開発とインターンでの使用経験",
    },
    {
      name: "Go",
      icon: SiGo,
      proficiency: 3,
      category: "languages",
      description: "個人開発とインターンでの使用経験",
    },

    // フロントエンド
    {
      name: "HTML",
      icon: SiHtml5,
      proficiency: 3,
      category: "frontend",
      description: "Webページの構造とマークアップ",
    },
    {
      name: "CSS",
      icon: SiCss3,
      proficiency: 3,
      category: "frontend",
      description: "Webページのスタイリング",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      proficiency: 3,
      category: "frontend",
      description: "Webフロントエンド開発の基盤として使用",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      proficiency: 4,
      category: "frontend",
      description: "型安全な開発のための主要言語として使用",
    },
    {
      name: "React",
      icon: SiReact,
      proficiency: 3,
      category: "frontend",
      description: "UIコンポーネント構築の主要ライブラリ",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      proficiency: 3,
      category: "frontend",
      description: "個人開発とインターンでの使用",
    },

    // バックエンド
    {
      name: "Django",
      icon: SiDjango,
      proficiency: 3,
      category: "backend",
      description: "Python製の高レベルWebフレームワーク",
    },
    {
      name: "Go",
      icon: SiGo,
      proficiency: 3,
      category: "backend",
      description: "高速な並行処理に優れたバックエンド開発",
    },
    {
      name: "Ruby on Rails",
      icon: SiRubyonrails,
      proficiency: 2,
      category: "backend",
      description: "Ruby製のWebアプリケーションフレームワーク",
    },
    { name: "MySQL", icon: SiMysql, proficiency: 3, category: "backend", description: "リレーショナルデータベース" },
    {
      name: "Firebase",
      icon: SiFirebase,
      proficiency: 3,
      category: "backend",
      description: "Googleのアプリ開発プラットフォーム",
    },
    {
      name: "Supabase",
      icon: SiSupabase,
      proficiency: 3,
      category: "backend",
      description: "オープンソースのFirebase代替サービス",
    },

    // ツール
    { name: "Git", icon: SiGit, proficiency: 5, category: "tools", description: "バージョン管理システム" },
    { name: "Docker", icon: SiDocker, proficiency: 3, category: "tools", description: "コンテナ化プラットフォーム" },
    { name: "GitHub Actions", icon: SiGithubactions, proficiency: 3, category: "tools", description: "CI/CDパイプライン" },
    { name: "VS Code", icon: VscCode, proficiency: 5, category: "tools", description: "主要コードエディタ" },

    // その他
     { name: "Figma", icon: SiFigma, proficiency: 3, category: "other", description: "UIデザインツール" },
     { name: "Dify", icon: SiOpenai, proficiency: 3, category: "other", description: "AIアプリ開発プラットフォーム" },
     { name: "AWS CDK", icon: SiAmazon, proficiency: 2, category: "other", description: "Infrastructure as Code。AWSリソースをTypeScriptで定義" },
  ]

  // 表示用に「フロントエンド / バックエンド / その他」に再編成
  // 「その他」はフロント/バックエンドに重複する技術名を除外
  const groupedFrontend = technologies.filter((t) => t.category === "frontend")
  const groupedBackend = technologies.filter((t) => t.category === "backend")
  const excludedNames = new Set<string>([
    ...groupedFrontend.map((t) => t.name),
    ...groupedBackend.map((t) => t.name),
  ])
  const groupedOther = technologies.filter(
    (t) =>
      (t.category === "languages" || t.category === "tools" || t.category === "other") &&
      !excludedNames.has(t.name)
  )
  const grouped = {
    frontend: groupedFrontend,
    backend: groupedBackend,
    other: groupedOther,
  }

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

      <div className={styles.categoryGrid}>
        <section className={styles.categoryCard}>
          <header className={styles.categoryHeader}>
            <span className={`${styles.categoryBadge} ${styles.frontendBadge}`}>🎨</span>
            <h3 className={styles.categoryTitle}>フロントエンド</h3>
          </header>
          <div className={styles.chipGrid}>
            {grouped.frontend.map((tech) => {
              const IconComponent = tech.icon
              return (
                <button
                  key={tech.name}
                  className={styles.chip}
                  onClick={() => handleTechClick(tech.name)}
                  aria-label={`${tech.name} の詳細`}
                >
                  <span className={styles.chipIcon}>
                    <IconComponent />
                  </span>
                  <span className={styles.chipLabel}>{tech.name}</span>
                  <span className={styles.chipLevels} aria-hidden="true">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <i key={level} className={`${styles.chipLevel} ${level <= tech.proficiency ? styles.filled : ""}`} />
                    ))}
                  </span>
                </button>
              )
            })}
          </div>
        </section>

        <section className={styles.categoryCard}>
          <header className={styles.categoryHeader}>
            <span className={`${styles.categoryBadge} ${styles.backendBadge}`}>🛠</span>
            <h3 className={styles.categoryTitle}>バックエンド</h3>
          </header>
          <div className={styles.chipGrid}>
            {grouped.backend.map((tech) => {
              const IconComponent = tech.icon
              return (
                <button
                  key={tech.name}
                  className={styles.chip}
                  onClick={() => handleTechClick(tech.name)}
                  aria-label={`${tech.name} の詳細`}
                >
                  <span className={styles.chipIcon}>
                    <IconComponent />
                  </span>
                  <span className={styles.chipLabel}>{tech.name}</span>
                  <span className={styles.chipLevels} aria-hidden="true">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <i key={level} className={`${styles.chipLevel} ${level <= tech.proficiency ? styles.filled : ""}`} />
                    ))}
                  </span>
                </button>
              )
            })}
          </div>
        </section>

        <section className={styles.categoryCard}>
          <header className={styles.categoryHeader}>
            <span className={`${styles.categoryBadge} ${styles.otherBadge}`}>✨</span>
            <h3 className={styles.categoryTitle}>その他</h3>
          </header>
          <div className={styles.chipGrid}>
            {grouped.other.map((tech) => {
              const IconComponent = tech.icon
              return (
                <button
                  key={tech.name}
                  className={styles.chip}
                  onClick={() => handleTechClick(tech.name)}
                  aria-label={`${tech.name} の詳細`}
                >
                  <span className={styles.chipIcon}>
                    <IconComponent />
                  </span>
                  <span className={styles.chipLabel}>{tech.name}</span>
                  <span className={styles.chipLevels} aria-hidden="true">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <i key={level} className={`${styles.chipLevel} ${level <= tech.proficiency ? styles.filled : ""}`} />
                    ))}
                  </span>
                </button>
              )
            })}
          </div>
        </section>
      </div>

      {activeTech && (
        <div className={styles.techDetails}>
          <div className={styles.techDetailsContent}>
            <div className={styles.techDetailsHeader}>
              <span className={styles.techDetailsIcon}>
                {getActiveTech()?.icon && (() => {
                  const IconComponent = getActiveTech()!.icon
                  return <IconComponent />
                })()}
              </span>
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
