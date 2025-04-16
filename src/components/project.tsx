"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import styles from "./project.module.css"

type Project = {
  id: string
  title: string
  description: string
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
      description: "Next.jsとTypeScriptで構築した個人ポートフォリオサイト。CSSモジュールを使用してスタイリング。",
      imageUrl: "/portfolio2.png",
      tags: ["Next.js", "TypeScript", "CSS Modules"],
      githubUrl: "https://github.com/takapom/-Portfolio-site",
      demoUrl: "/",
      featured: true,
    },
    {
      id: "project2",
      title: "就活管理アプリ",
      description: "Next.jsを使用した就活管理アプリケーション。Firebaseでユーザーごとのデータ保存",
      imageUrl: "/syukatu-site.png",
      tags: ["Next.js", "TypeScript", "Firebase"],
      githubUrl: "https://github.com/takapom/internship-helper-app-public",
      featured: true,
    },
    {
      id: "project3",
      title: "ブログサイト",
      description: "これまでの学習やインターンでの学びを記録するアウトプットを目的とした。",
      imageUrl: "/blog-site.png",
      tags: ["JavaScript", "Next.js", "Firebase"],
      githubUrl: "https://github.com/takapom/blog-site",
      demoUrl: "https://api-client.example.com",
      featured: false,
    },
    {
      id: "project4",
      title: "天気予報アプリ",
      description: "API連携の練習のため開発しました",
      imageUrl: "/weather-site.png",
      tags: ["Next.js", "JavaScript", "Open Weather API"],
      githubUrl: "https://github.com/takapom/Weather-App",
      featured: true,
    },
    {
        id: "project5",
        title: "ポケモンライブラリ",
        description: "API連携の練習のため開発しました",
        imageUrl: "/placeholder.svg?height=300&width=500",
        tags: ["Next.js", "JavaScript", "Open Weather API"],
        githubUrl: "https://github.com/takapom/Pokemon-library",
        featured: true,
      },
      {
        id: "project6",
        title: "物件情報入力アプリ（マイソク）",
        description: "インターンのチーム開発での成果物です",
        imageUrl: "/placeholder.svg?height=300&width=500",
        tags: ["React", "JavaScript", "Material UI"],
        githubUrl: "https://github.com/takapom/intern-team",
        featured: true,
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
              <div className={styles.projectTags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.projectTag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
