import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function QuestionOne() {
  return (
    <main className={styles.main}>
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

      <div className={styles.grid}>
        <Link
          href="/question-one"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            <span>1.</span> What do you want to learn or do more of at work? <span>-&gt;</span>
          </h2>
        </Link>

        <Link
          href="/question-two"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            <span>2.</span> Describe how you solved a challenge or technical issue that you faced in a previous role. How did you determine that your solution was successful? <span>-&gt;</span>
          </h2>
        </Link>

        <Link
          href="/question-three"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            <span>3.</span> How would you compare Next.js with another frontend framework? <span>-&gt;</span>
          </h2>
        </Link>

        <Link
          href="/question-four"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            <span>4.</span> When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel? <span>-&gt;</span>
          </h2>
        </Link>

        <Link
          href="/question-five"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            <span>5.</span> What do you think is one of the most common problems which customers ask Vercel for help with? How would you help customers to overcome common problems, short-term and long-term? <span>-&gt;</span>
          </h2>
        </Link>

        <Link
          href="/question-six"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            <span>6.</span> How could we improve or alter this familiarisation exercise? <span>-&gt;</span>
          </h2>
        </Link>

        <h1 className={styles.center}>Customer Scenarios</h1>

        <Link
          href="/question-seven"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            <span>7.</span> Imagine a customer writes in requesting help with a build issue on a framework or technology that you&apos;ve not seen before. How would you go about troubleshooting this and what questions would you ask the customer to understand the situation better? <span>-&gt;</span>
          </h2>
        </Link>

        <Link
          href="/question-eight"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            <span>8.</span> The customer from question 7 replies to your response with the below:<br></br>
            <em>&quot;I&apos;sm so frustrated. I&apos;sve been trying to make this work for hours and I just can&apos;st figure it out. It must be a platform issue so why don&apos;st you just fix it for me instead of asking me questions.&quot;</em><br></br>
            Please write a follow-up reply to the customer. <span>-&gt;</span>
          </h2>
        </Link>

        <Link
          href="/question-nine"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            <span>9.</span> A customer has a project on Vercel and they want to redirect the /blog path to another website.<br></br>Please write a reply to the customer. <span>-&gt;</span>
          </h2>
        </Link>

        <Link
          href="/question-ten"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            <span>10.</span> A customer is creating a site and would like their project not to be indexed by search engines.<br></br>Please write a reply to the customer. <span>-&gt;</span>
          </h2>
        </Link>
      </div>
    </main>
  )
}
