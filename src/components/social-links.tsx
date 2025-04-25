import styles from "./social-links.module.css"

export default function SocialLinks() {
  const socialLinks = [
    {
      name: "Twitter(X)",
      handle: "@takapom_engin",
      icon: "🐦",
      color: "#1DA1F2",
      url: "https://x.com/takapom_engin",
    },
    {
      name: "instagram",
      handle: "@takapondes",
      icon: "🔶",
      color: "#FF8C00",
      url: "https://www.instagram.com/takapondes/",
    },
    {
      name: "GitHub",
      handle: "@takapom",
      icon: "🐙",
      color: "#FFFFFF",
      url: "https://github.com/takapom?tab=repositories",
    },
  ]

  const platformLinks = [
    {
      name: "My-blog",
      icon: "🎮",
      color: "#5865F2",
      url: "https://blog-site-ehel.vercel.app/",
    },
    {
      name: "Zenn",
      icon: "📝",
      color: "#3EA8FF",
      url: "https://zenn.dev/kazukix/articles/react-setup-2024",
    },
    {
      name: "Qiita",
      icon: "📚",
      color: "#55C500",
      url: "https://qiita.com/",
    },
  ]

  return (
    <div className={styles.socialLinksContainer}>
      <div className={styles.socialLinks}>
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className={styles.socialLink}
            style={{ backgroundColor: `${link.color}20`, borderColor: link.color }}
          >
            <div className={styles.socialLinkContent}>
              <div className={styles.socialLinkInfo}>
                <div className={styles.socialLinkName}>{link.name}</div>
                <div className={styles.socialLinkHandle}>{link.handle}</div>
              </div>
              <div className={styles.socialLinkIcon}>{link.icon}</div>
            </div>
          </a>
        ))}
      </div>

      <div className={styles.platformLinks}>
        {platformLinks.map((platform, index) => (
          <a
            key={index}
            href={platform.url}
            className={styles.platformLink}
            style={{ backgroundColor: `${platform.color}20`, borderColor: platform.color }}
          >
            <span className={styles.platformIcon}>{platform.icon}</span>
            <span className={styles.platformName}>{platform.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
