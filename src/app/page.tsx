"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import styles from "./page.module.css"
import SocialLinks from "@/components/social-links"
import AboutMe from "@/components/about-me"
import Projects from "@/components/project"
import TechStack from "@/components/tech-stack"
import Footer from "@/components/Footer"
import Future from "@/components/future"
import Internship from "@/components/Internship"

// アニメーション設定
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
}

const headerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
}

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <motion.div
          className={styles.container}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.header className={styles.header} variants={headerVariants}>
            <div className={styles.titleContainer}>
              <motion.h1
                className={styles.title}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Yuki Takagi
              </motion.h1>
              <motion.p
                className={styles.subtitle}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                Student Engineer
              </motion.p>
            </div>
            <motion.div
              className={styles.profileImageContainer}
              variants={imageVariants}
            >
              <Image
                src="/circular_icon.png"
                alt="プロフィール画像"
                width={200}
                height={200}
                className={styles.profileImage}
                priority
              />
              <p className={styles.imageCredit}>
                icon by{" "}
                <a href="#" className={styles.creditLink}>
                  @takapon
                </a>
              </p>
            </motion.div>
          </motion.header>

          <div className={styles.sectionStack}>
            {/* 横並びグループ1: SocialLinks + AboutMe */}
            <div className={styles.horizontalGroup}>
              <motion.section className={styles.sectionCard} variants={itemVariants}>
                <SocialLinks />
              </motion.section>
              <motion.section className={styles.sectionCard} variants={itemVariants}>
                <AboutMe />
              </motion.section>
            </div>

            {/* TechStack は単独で表示 */}
            <motion.section className={styles.sectionCardFull} variants={itemVariants}>
              <TechStack />
            </motion.section>

            {/* Internship は単独で表示 */}
            <motion.section className={styles.sectionCardFull} variants={itemVariants}>
              <Internship />
            </motion.section>

            {/* Projects は単独で表示 */}
            <motion.section className={styles.sectionCardFull} variants={itemVariants}>
              <Projects />
            </motion.section>

            {/* Future は単独で表示 */}
            <motion.section className={styles.sectionCardFull} variants={itemVariants}>
              <Future />
            </motion.section>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
