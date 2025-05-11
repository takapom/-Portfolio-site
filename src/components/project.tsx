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
      tags: ["Next.js", "TypeScript", "Firebase", "Python(Django)"],
      githubUrl: "https://github.com/takapom/internship-helper-app-public",
      demoUrl: "https://internship-helper-app-public.vercel.app/",
      featured: true,
    },
      {
        id: "project3",
        title: "トレーニング機器予約システム",
        description: "トレーニング機器を予約するためのシステムを開発中",
        imageUrl: "/gim.png",
        tags: ["Next.js", "TypeScript", "Python(Django)", "Material UI"],
        githubUrl: "https://github.com/takapom/Training-Reservation-App",
        featured: true,
      },
      {
        id: "project4",
        title: "日々のタスクアプリ",
        description: "毎日のタスクを履歴として管理できるアプリ。",
        imageUrl: "/",
        tags: ["TypeScript", "Next.js", "Python(Django)", "Materil UI"],
        githubUrl: "https://github.com/takapom/task-journal",
        featured: false,
      },
      {
        id: "project5",
        title: "物件情報入力アプリ（マイソク）",
        description: "インターンのチーム開発での成果物です",
        imageUrl: "/intern-site.png",
        tags: ["React", "JavaScript", "Material UI"],
        githubUrl: "https://github.com/takapom/intern-team",
        featured: true,
      },
      {
        id: "project6",
        title: "ブログサイト",
        description: "これまでの学習やインターンでの学びを記録するアウトプットを目的とした。",
        imageUrl: "/blog-site.png",
        tags: ["JavaScript", "Next.js", "Firebase"],
        githubUrl: "https://github.com/takapom/blog-site",
        demoUrl: "https://api-client.example.com",
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
