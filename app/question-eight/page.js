import Image from 'next/image'
import Link from 'next/link'
import styles from '../page.module.css'

export default function QuestionEight() {
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
            <span>8.</span> The customer from question 7 replies to your response with the below:<br />
            <i>“I&apos;m so frustrated. I&apos;ve been trying to make this work for hours and I just can&apos;t figure it out. It must be a platform issue so why don&apos;t you just fix it for me instead of asking me questions.”</i>
            <br /><br />
            Please write a follow-up reply to the customer.
          </h2>
          <p>
            <br />
            Empathy is one of the most important values that I adhere to when providing support to customers, particularly in situations like these where customers show frustration. I find that not only does empathy build trust in the troubleshooting process and lead to better problem-solving, it validates the customer&apos;s emotions and de-escalates the situation which is a win-win for both parties. I&apos;m also conscious that with more back-and-forth, a customer&apos;s responses can become progressively terse. I acknowledge this proactively when I start to sense it and use this as an opportunity to reassure the customer.
            <br /><br />
            If a customer experiencing a build issue was displaying frustration after I requested additional information, here&apos;s an example of what my response might look like:
            <br /><br />
            Hi John,
            <br /><br />
            I can certainly understand the frustration, and I truly appreciate your patience.
            <br /><br />
            The questions I&apos;ve asked here are not intended to burden you but rather to better understand the build issue you&apos;re facing so that I can provide the most effective and efficient solution for you. When it comes to working through issues like these, the more details we have, the easier it is for us to pinpoint the problem.
            <br /><br />
            Rest assured, I&apos;m committed to helping you get this sorted as quickly as possible so that you can get your project up and running.
            <br /><br />
            If you could share a bit more information about the error you&apos;re encountering or perhaps any steps you took before the error appeared, it would be of great help. <i>{`Note: Alternatively, I might request to jump on a Zoom call with the customer if I think it would lead to a better outcome here.`}</i>
            <br /><br />
            Looking forward to hearing back.
            <br /><br />
            Cheers,<br />
            Justin
          </p>
        </div>
      </main>
    </div>
  )
}
