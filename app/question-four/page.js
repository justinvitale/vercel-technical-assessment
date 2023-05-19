import Image from 'next/image'
import Link from 'next/link'
import styles from '../page.module.css'

export default function QuestionFour() {
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
            <span>4.</span> When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?
          </h2>
          <p>
            Serverless Functions are great for performing operations that require any server-side execution, such as tasks where you&apos;re interacting with a database or an external API. As an example, if you were fetching data from a third-party service, a Serverless Function would allow you to do this securely without exposing sensitive information on the client-side. Additionally, Serverless Functions on Vercel auto-scale, which make them a great fit for variable workloads.
            <br></br><br></br>
            On the other hand, because Edge Functions are executed closer to the user, the geographical proximity would result in improved response times for users. Example use cases for Edge Functions would include personalizing content for a user, or making decisions based on their location.
            <br></br><br></br>
            While Edge Middleware is also executed at the edge, these functions execute before a request is processed on a site. This allows you to modify the response based on the request. Edge Middleware excels at tasks such as authentication, redirects, and URL rewrites.
            <br></br><br></br>
            Overall, I&apos;d say that the choice between these functions depend on the nature of the operation, the sensitivity of the data involved, and the performance requirements.
          </p>
          <br></br>
          <p><span>References:</span><br></br></p>
          <ul>
            <li>
              https://vercel.com/docs/concepts/functions/serverless-functions
            </li>
            <li>
              https://vercel.com/docs/concepts/functions/edge-functions
            </li>
            <li>
              https://vercel.com/docs/concepts/functions/edge-middleware
            </li>
          </ul>
        </div>

      </main>
    </div>
  )
}

