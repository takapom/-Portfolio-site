import styles from "./about-me.module.css"

export default function AboutMe() {
  const affiliations = [
    "大和大学 学士3年 (情報系 情報学部 情報学科)",
    "Tech Uni",
    "Sky株式会社",
  ]

  const interests = [
    "『ものづくり』が大好きです",
    "フロントエンドとバックエンド",
    "Next.js　Django",
    "セキュリティも興味ある(共通鍵のコードしか経験ない...)",
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
          <span className={styles.categoryIcon}>🎮</span> 興味
        </h3>
        <p className={styles.paragraph}>{interests[0]}</p>
        <p className={styles.paragraph}>{interests[1]}</p>
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
