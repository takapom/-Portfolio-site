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
        title: "トレーニング機器予約システム",
        description: "ジム利用者向けの機器予約管理システム",
        features: ["リアルタイム予約状況表示", "予約管理機能", "利用履歴確認", "通知機能"],
        techDetails: "Django REST Framework + Next.js、Material UI使用",
        imageUrl: "/gim.png",
        tags: ["Next.js", "TypeScript", "Python(Django)", "Material UI"],
        githubUrl: "https://github.com/takapom/Training-Reservation-App",
        featured: true,
      },
      {
        id: "project4",
        title: "勉強管理アプリ",
        description: "友人と勉強時間を共有し、モチベーションを維持するアプリ",
        features: ["学習時間記録", "友人との進捗共有", "目標設定機能", "統計グラフ表示"],
        techDetails: "Django REST Framework、Material UI使用",
        imageUrl: "/study_app.png",
        tags: ["TypeScript", "Next.js", "Python(Django)", "Material UI"],
        githubUrl: "https://github.com/takapom/study_application",
        featured: false,
      },
      {
        id: "project5",
        title: "物件情報入力アプリ（マイソク）",
        description: "不動産会社向けの物件情報管理システム",
        features: ["物件情報入力フォーム", "画像アップロード", "PDF生成機能", "検索・フィルタリング"],
        techDetails: "インターンのチーム開発、React + Material UIで構築",
        imageUrl: "/intern-site.png",
        tags: ["React", "JavaScript", "Material UI"],
        githubUrl: "https://github.com/takapom/intern-team",
        featured: true,
      },
      {
        id: "project6",
        title: "ブログサイト",
        description: "技術的な学びや経験を記録・共有するための個人ブログ",
        features: ["Markdown記事投稿", "カテゴリー分類", "検索機能", "コメント機能"],
        techDetails: "Next.js(フロント) + Django(バックエンド)、MDX対応",
        imageUrl: "/blog_picture.png",
        tags: ["TypeScript", "Next.js", "Django"],
        githubUrl: "https://github.com/takapom/blog_back",
        demoUrl: "https://blog-front-red.vercel.app/",
        featured: false,
      },
      
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