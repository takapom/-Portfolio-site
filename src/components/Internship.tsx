'use client';

import React from 'react';
import styles from './Internship.module.css';
import { useRouter } from 'next/navigation';

export default function Internship() {
  const router = useRouter();

  const internships = [
    {
      company: 'Omluc inc.',
      slug: 'omluc',
      period: '2024年4月 - 現在',
      description: 'Difyのプラグイン開発に所属。AIワークフローの自動化とカスタムプラグインの実装を担当',
      technologies: ['Python', 'TypeScript', 'Dify', 'Docker', 'REST API'],
    },
    {
      company: 'ONE CAREER',
      slug: 'onecareer',
      period: '2025年8月 - 2025年9月',
      description: 'GoとReactでの既存システムのパフォーマンスチューニング。レスポンス時間を40%改善',
      technologies: ['Go', 'React', 'PostgreSQL', 'Redis', 'GraphQL'],
    },    
    {
      company: 'GMOインターネット',
      slug: 'gmo',
      period: '2025年8月 - 2025年9月',
      description: 'Webアプリケーション開発。新規機能の設計から実装、テストまでを一貫して担当',
      technologies: ['TypeScript', 'Next.js', 'Node.js', 'MySQL', 'AWS'],
    },
    {
      company: 'GA technologies',
      slug: 'gatech',
      period: '2025年7月 - 2025年8月',
      description: 'ユーザードリブン開発とRuby on Railsを用いた不動産プラットフォームの機能改善',
      technologies: ['Ruby on Rails', 'React', 'PostgreSQL', 'Docker', 'RSpec'],
    },
    {
      company: 'ラクス',
      slug: 'rakus',
      period: '2025年6月 - 2025年7月',
      description: 'Vue.jsとNode.jsを用いたチーム開発。アジャイル開発手法を実践',
      technologies: ['Vue.js', 'Node.js', 'Express', 'MongoDB', 'Jest'],
    },
    {
      company: 'Sky',
      slug: 'sky',
      period: '2025年5月 - 2025年6月',
      description: 'Skyスタイル部に所属。社内システムのUI/UX改善プロジェクトに参加',
      technologies: ['JavaScript', 'CSS3', 'HTML5', 'Figma', 'Git'],
    },
    {
      company: 'ZYXX inc.',
      slug: 'zyxx',
      period: '2025年2月 - 2025年3月',
      description: 'Java (Spring Boot)を用いた書籍管理アプリケーション開発。RESTful APIの設計と実装',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'JUnit', 'Maven'],
    },
    {
      company: 'iimon inc.',
      slug: 'iimon',
      period: '2025年3月 - 2025年4月',
      description: '不動産業界向けマイソクアプリケーション開発。PDF生成機能の実装',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'PDF.js'],
    },
    {
      company: 'スリーシェイク',
      slug: 'threeshake',
      period: '2025年8月',
      description: 'SREのハンズオンとキャッチアップ。インフラ自動化とモニタリングの実践',
      technologies: ['Kubernetes', 'Terraform', 'Prometheus', 'Grafana', 'CI/CD'],
    },
    {
      company: 'スタンバイ',
      slug: 'standby',
      period: '2025年7月',
      description: '課題解決型チーム開発。求人検索サービスの新機能開発',
      technologies: ['Python', 'Django', 'Elasticsearch', 'Docker', 'GitHub Actions'],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          <span className={styles.titleMain}>Internship</span>
          <span className={styles.titleSub}>Experience</span>
        </h1>
        <p className={styles.subtitle}>実践的な開発経験と技術スキルの向上</p>
      </div>
      
      <div className={styles.timeline}>
        {internships.map((internship, index) => (
          <div
            key={index}
            className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
          >
            <div className={styles.timelineDot}></div>
            <div
              className={styles.card}
              onClick={() => router.push(`/internships/${internship.slug}`)}
            >
              <div className={styles.cardHeader}>
                <h2 className={styles.company}>{internship.company}</h2>
                <div className={styles.periodBadge}>
                  <svg className={styles.calendarIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className={styles.period}>{internship.period}</span>
                </div>
              </div>
              
              <div className={styles.cardBody}>
                <p className={styles.description}>{internship.description}</p>
                
                <div className={styles.technologies}>
                  <h3 className={styles.techTitle}>使用技術</h3>
                  <div className={styles.techTags}>
                    {internship.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className={styles.cardFooter}>
                <button className={styles.detailButton}>
                  <span>詳細を見る</span>
                  <svg className={styles.arrowIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
