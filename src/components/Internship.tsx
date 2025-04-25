'use client';

import React from 'react';
import styles from './Internship.module.css';
import { useRouter } from 'next/navigation';

export default function Internship() {
  const router = useRouter();

  const internships = [
    {
      company: 'Omluc inc.',
      slug: 'omluc.com',
      period: 'Long-term internship',
      description: 'Difyのプラグイン開発に所属',
    },
    {
      company: 'ONE CAREER.',
      slug: 'innovatex',
      period: 'Summer 2025',
      description: 'GoとReactでの既存システムのパフォーマンスチューニング',
    },
    {
      company: 'ZYXX inc,',
      slug: 'futuretech',
      period: 'Winter 2025',
      description: 'Java(Spring Boot)を用いた書籍管理アプリ開発',
    },
    {
        company: 'iimon inc,',
        slug: 'futuretech',
        period: 'Spring 2025',
        description: '不動産業界のマイソクアプリ開発',
      },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Internships</h1>
      <div className={styles.grid}>
        {internships.map((internship, index) => (
          <div
            key={index}
            className={styles.card}
            onClick={() => router.push(`/internships/${internship.slug}`)}
          >
            <div className={styles.cardContent}>
              <h2 className={styles.company}>{internship.company}</h2>
              <p className={styles.period}>{internship.period}</p>
              <p className={styles.description}>{internship.description}</p>
              <span className={styles.linkText}>Check</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
