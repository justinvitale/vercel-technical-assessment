import Image from 'next/image'
import Link from 'next/link'
import styles from '../page.module.css'

export default function QuestionSix() {
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
          <h2 style={{ margin: '20px 0' }}>Technical Assessment</h2>
        </div>

        <div className={styles.question}>
          <h2>
            <span>6.</span> How could we improve or alter this familiarisation exercise?
          </h2>
          <p>
            Overall, I thoroughly enjoyed working through this technical assessment and I think it does a great job at exploring a candidate&apos;s self-sufficiency, ability to de-escalate situations and empathize with customers, as well as certain areas of technical expertise. However, most of the questions lean towards the customer experience rather than technical problem solving. It might be helpful to add some additional scenarios that are more technical. These could be based on real-world examples that Success Engineers often encounter. I do however acknowledge that exploring the soft skills of a candidate and evaluating a strong customer experience background may be more beneficial than targeting hard skills that can be learned.
          </p>
        </div>

      </main>
    </div>
  )
}
