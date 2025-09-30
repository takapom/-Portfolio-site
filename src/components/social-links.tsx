import styles from "./social-links.module.css"
import { FaXTwitter, FaInstagram, FaGithub } from "react-icons/fa6"
import { SiZenn, SiQiita } from "react-icons/si"
import { HiPencilSquare } from "react-icons/hi2"
import { IconType } from "react-icons"

type SocialLink = {
  name: string
  handle: string
  icon: IconType
  color: string
  url: string
}

type PlatformLink = {
  name: string
  icon: IconType
  color: string
  url: string
}

export default function SocialLinks() {
  const socialLinks: SocialLink[] = [
    {
      name: "Twitter(X)",
      handle: "@takapom_engin",
      icon: FaXTwitter,
      color: "#000000",
      url: "https://x.com/takapom_engin",
    },
    {
      name: "Instagram",
      handle: "@takapondes",
      icon: FaInstagram,
      color: "#E4405F",
      url: "https://www.instagram.com/takapondes/",
    },
    {
      name: "GitHub",
      handle: "@takapom",
      icon: FaGithub,
      color: "#ffffff",
      url: "https://github.com/takapom?tab=repositories",
    },
  ]

  const platformLinks: PlatformLink[] = [
    {
      name: "My-blog",
      icon: HiPencilSquare,
      color: "#5865F2",
      url: "https://blog-front-red.vercel.app/",
    },
    {
      name: "Zenn",
      icon: SiZenn,
      color: "#3EA8FF",
      url: "https://zenn.dev/takapom",
    },
    {
      name: "Qiita",
      icon: SiQiita,
      color: "#55C500",
      url: "https://qiita.com/",
    },
  ]

  return (
    <div className={styles.socialLinksContainer}>
      <div className={styles.socialLinks}>
        {socialLinks.map((link, index) => {
          const IconComponent = link.icon
          return (
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
                <div className={styles.socialLinkIcon}>
                  <IconComponent />
                </div>
              </div>
            </a>
          )
        })}
      </div>

      <div className={styles.platformLinks}>
        {platformLinks.map((platform, index) => {
          const IconComponent = platform.icon
          return (
            <a
              key={index}
              href={platform.url}
              className={styles.platformLink}
              style={{ backgroundColor: `${platform.color}20`, borderColor: platform.color }}
            >
              <span className={styles.platformIcon}>
                <IconComponent />
              </span>
              <span className={styles.platformName}>{platform.name}</span>
            </a>
          )
        })}
      </div>
    </div>
  )
}
