import Image from "next/image"
import styles from "./page.module.css"
import SocialLinks from "@/components/social-links"
import AboutMe from "@/components/about-me"
import Projects from "@/components/project"
import TechStack from "@/components/tech-stack"
import Footer from "@/components/Footer"
import Future from "@/components/future"

export default function Home() {
  return (
    <div>
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>たかぽん</h1>
            <p className={styles.subtitle}>Student Engineer</p>
          </div>
          <div className={styles.profileImageContainer}>
            <Image
              src="/circular_icon.png" // 修正箇所
              alt="プロフィール画像"
              width={200}
              height={200}
              className={styles.profileImage}
            />
            <p className={styles.imageCredit}>
              icon by{""}
              <a href="#" className={styles.creditLink}>
                @takapon
              </a>
            </p>
          </div>
        </header>

        <SocialLinks />
        <AboutMe />
        <TechStack />
        <Projects />
        <Future />
      </div>
    </main>
    <Footer />
    </div>
  )
}
