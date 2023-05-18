import Image from 'next/image'
import Link from 'next/link'
import styles from '../page.module.css'

export default function QuestionFive() {
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
            <span>5.</span> Imagine a customer writes in requesting help with a build issue on a framework or technology that you&apos;ve not seen before. How would you go about troubleshooting this and what questions would you ask the customer to understand the situation better?
          </h2>
          <p>
            <br></br>
            Given the nature of Vercel&apos;s product, I&apos;d expect deployment failures, configuration issues, and performance-related issues such as caching to be the most common.
            <br></br><br></br>
            For deployment failures, problems with dependency issues, version incompatibilities, or build command errors could be common. The path to resolution for these issues might be as simple as a typo in a build command, or as complex as an incompatibility issue between certain package versions.
            <br></br><br></br>
            Configuration issues, particularly around features like redirects, rewrites, headers, and caching, could be another common problem area. This could relate to vercel.json misconfigurations, or misunderstandings on how to configure project environment variables.
            <br></br><br></br>
            Caching issues, potentially involving misunderstandings of Vercel&apos;s edge network, may also be common. Users may encounter unexpected behaviour due to cache control headers, or a cache purge being required.
            <br></br><br></br>
            My short-term approach to these issues would look like:<br></br>
          </p>
          <ul>
            <li>Working with the customer to troubleshoot issues to resolution</li>
            <li>Correcting any misconfigurations in the customer&apos;s config files or their Vercel environment</li>
            <li>Comprehensively explaining my findings and sharing any appropriate knowledge with customers, in attempt to help them build a more concrete understanding and avoid future occurrences of the same issue</li>
            <li>Providing customers with documentation to help them be more self-sufficient</li>
          </ul>
          <br></br><br></br>
          <p>My long-term approach to these issues would look like:<br></br></p>
          <ul>
            <li>Collaborating with engineering and product teams to identify areas of improvement in the product, such as working with product teams if a confusing UI is often resulting in misconfiguration issues, or working with engineering teams if better error messaging or even automated checks could be made for certain configurations</li>
            <li> Ensuring adequate public-facing documentation, and proactively expanding the knowledge base</li>
            <li>Engineering a solution of my own if it involves a process that I can streamline</li>
          </ul>
        </div>

      </main >
    </div >
  )
}

