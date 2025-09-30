import styles from "./about-me.module.css"

export default function AboutMe() {
  const affiliations = [
    "大和大学 情報学部",
    "Tech Uni",
    "ONE CAREER Inc",
    "Omluc Inc",
  ]

  const interests = [
    // "Webアプリ開発",
    // "ZENN記事読み込む",
    "サウナ",
    "セキュリティも興味ある(共通鍵のコードしか経験ない...)",
    "Webアプリ開発",
    "サウナ",
    "筋トレ",
    "テニス",
  ]

  return (
    <div className={styles.aboutMeContainer}>
      <h2 className={styles.sectionTitle}>About Me</h2>
      <div className={styles.sectionDivider}></div>

      <div className={styles.section}>
        <h3 className={styles.categoryTitle}>
          <span className={styles.categoryIcon}>👥</span> 所属
        </h3>
        <ul className={styles.list}>
          {affiliations.map((affiliation, index) => (
            <li key={index} className={styles.listItem}>
              {affiliation}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h3 className={styles.categoryTitle}>
          <span className={styles.categoryIcon}>🎮</span> 趣味
        </h3>
        <ul className={styles.list}>
          {interests.slice(2).map((interest, index) => (
            <li key={index} className={styles.listItem}>
              {interest}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
