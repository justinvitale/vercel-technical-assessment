import Image from 'next/image'
import Link from 'next/link'
import styles from '../page.module.css'

export default function QuestionOne() {
  return (
    <div>
      <main className={styles.main}>

        <div className={styles.grid}>
          <Link
            href="/"
            className={styles.back}
            target="_blank"
            rel="noopener noreferrer"
          >

            <h2>
              <span>&lt;-</span> Back to home
            </h2>
          </Link>
        </div>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/vercel.svg"
            alt="Vercel Logo"
            width={180}
            height={37}
            priority
          />
          <h2 style={{ margin: '20px;' }}>Technical Assessment</h2>
        </div>

        <div className={styles.question}>
          <h2>
            <span>1.</span> What do you want to learn or do more of at work?
          </h2>
          <p>
            Throughout my career, I&apos;ve primarily worked in roles where issues surfaced to support are limited to troubleshooting the product itself. While I&apos;ve always been passionate about diving into the complexities of any product I support and understanding the ins and outs, what excites me about Success Engineering at Vercel is the idea of expanding my support scope beyond the product. While I&apos;m most certainly excited to support customers using Vercel&apos;s array of service offerings, what piques my interest even more is the opportunity to troubleshoot problems that expand into the complexities of modern web architecture.
            <br></br><br></br>
            I&apos;m particularly drawn to this role because it would allow me to leverage my technical foundations to tackle more significant, complex problems on a day-to-day basis. I see a number of opportunities to push my boundaries and extend my expertise in areas such as front-end frameworks, CI/CD pipelines, and networking, to ultimately deliver exceptional support experiences to Vercel&apos;s customer base.



          </p>
        </div>

      </main>
    </div>
  )
}

