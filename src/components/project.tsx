"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import styles from "./project.module.css"

type Project = {
  id: string
  title: string
  description: string
  features?: string[]
  techDetails?: string
  imageUrl: string
  tags: string[]
  githubUrl?: string
  demoUrl?: string
  featured: boolean
}

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "featured">("all")

  const projects: Project[] = [
    {
      id: "project1",
      title: "ポートフォリオサイト",
      description: "Next.jsとTypeScriptで構築した個人ポートフォリオサイト。",
      features: ["レスポンシブデザイン", "ダークモード対応", "スムーズなアニメーション"],
      techDetails: "SSG/ISRによる高速化、CSSモジュールによるスタイリング",
      imageUrl: "/portfolio2.png",
      tags: ["Next.js", "TypeScript", "CSS Modules"],
      githubUrl: "https://github.com/takapom/-Portfolio-site",
      demoUrl: "/",
      featured: true,
    },
    {
      id: "project2",
      title: "就活管理アプリ",
      description: "就活生向けの総合支援プラットフォーム",
      features: ["タスク管理機能", "掲示板機能", "LLMによる自己分析支援", "ES管理機能"],
      techDetails: "フロントエンド: Next.js/TypeScript、バックエンド: Golang、認証: JWT",
      imageUrl: "/syukatu-site.png",
      tags: ["Next.js", "TypeScript", "Golang"],
      githubUrl: "https://github.com/takapom/syukatu-back",
      demoUrl: "https://syukatu-front.vercel.app/",
      featured: true,
    },
      {
        id: "project3",
        title: "Grumble(オンプレ構築)",
        description: "11/30にある技育展ハッカソンにて現在も開発中のアプリです。",
        features: ["愚痴投稿", "お焚き上げイベント", "成仏機能", "いいね機能"],
        techDetails: "React Native, TypeScript, Golang, PostgreSQL",
        imageUrl: "/gim.png",
        tags: ["React Native", "TypeScript", "Golang", "PostgreSQL", "オンプレ構築"],
        githubUrl: "https://github.com/takapom/Grumble-back",
        demoUrl: "https://grumble.dokkiitech.com/auth",
        featured: true,
      },
      {
        id: "project4",
        title: "ConoHa",
        description: "GMOハッカソンにて既存サービスを0から開発し最優秀賞を受賞",
        features: ["学習時間記録", "友人との進捗共有", "目標設定機能", "統計グラフ表示"],
        techDetails: "サーバー構築",
        imageUrl: "/study_app.png",
        tags: ["TypeScript", "Next.js", "Firebase", "Material UI", "Python"],
        githubUrl: "https://github.com/takapom/GMO_Team_B",
        demoUrl: "https://gmo-team-b.vercel.app/",
        featured: false,
      }
      
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.featured)

  return (
    <div className={styles.projectsContainer}>
      <h2 className={styles.sectionTitle}>Products</h2>
      <div className={styles.sectionDivider}></div>

      <div className={styles.filterContainer}>
        <button
          className={`${styles.filterButton} ${filter === "all" ? styles.active : ""}`}
          onClick={() => setFilter("all")}
        >
          All Projects
        </button>
        <button
          className={`${styles.filterButton} ${filter === "featured" ? styles.active : ""}`}
          onClick={() => setFilter("featured")}
        >
          Featured
        </button>
      </div>

      <div className={styles.projectsGrid}>
        {filteredProjects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectImageContainer}>
              <Image
                src={project.imageUrl || "/portfolio.png"}
                alt={project.title}
                width={500}
                height={300}
                className={styles.projectImage}
              />
              <div className={styles.projectOverlay}>
                <div className={styles.projectLinks}>
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      <span className={styles.projectLinkIcon}>🐙</span>
                      <span>GitHub</span>
                    </Link>
                  )}
                  {project.demoUrl && (
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      <span className={styles.projectLinkIcon}>🔗</span>
                      <span>Demo</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              
              {project.techDetails && (
                <div className={styles.techDetails}>
                  <h4 className={styles.techDetailsTitle}>技術詳細</h4>
                  <p className={styles.techDetailsText}>{project.techDetails}</p>
                </div>
              )}
              
              <div className={styles.projectTags}>
                <h4 className={styles.tagsTitle}>使用技術</h4>
                <div className={styles.tagsList}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.projectTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}