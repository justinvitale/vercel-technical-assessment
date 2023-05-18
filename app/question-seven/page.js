import Image from 'next/image'
import Link from 'next/link'
import styles from '../page.module.css'

export default function QuestionSeven() {
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
            <span>7.</span> Imagine a customer writes in requesting help with a build issue on a framework or technology that you&apos;ve not seen before. How would you go about troubleshooting this and what questions would you ask the customer to understand the situation better?
          </h2>
          <p>
            <br />
            My fundamental support approach does not change greatly when encountering new problems or unfamiliar technologies. I usually consider a five-step framework, in the order of understanding, replicating, researching, communicating, and escalating if necessary.
            <br /><br />
            For the sake of this exercise, I&apos;ll assume that a customer is experiencing an issue with Vue.js. The first thing I&apos;d do is validate the customer&apos;s concerns and reassure them that I&apos;m here to help. I&apos;d request further information about the error they&apos;re encountering, the steps they&apos;ve taken that led to the error, and what their expected outcome would be.
            <br /><br />
            Next, I&apos;d conduct some research on Vue.js, focusing primarily on aspects related to the build process in this case. This might involve reading documentation, searching StackOverflow, and attempting to identify any relevant issues on the Vue GitHub repo.
            <br /><br />
            Following this, I would attempt to reproduce the customer&apos;s issue in a controlled environment. I would set up a simple Vue.js application where I could mirror the steps the customer has taken to see if I can generate the same error message. This approach would provide me with a first-hand understanding of the issue, which is a valuable perspective and would allow me to validate if the issue is isolated to the customer or not.
            <br /><br />
            Throughout this process, I&apos;d ensure the customer stays updated. I believe that transparency is key and that customers should feel heard, so I&apos;d let them know that I&apos;m actively investigating the issue and reassure them that we&apos;ll get there, even if I haven&apos;t found a solution yet.
            <br /><br />
            In the event that I&apos;m unable to determine a root cause despite my best efforts, I would escalate the issue to our engineering team, providing a detailed escalation report that includes steps to reproduce the error, the expected result, the actual result, and a summary of what troubleshooting steps have been taken already.
            <br /><br />
            Lastly, once the problem is resolved, I would look at documenting the issue in our team&apos;s internal knowledge base to help myself and other team members save time in the future, should a similar issue surface. If the issue was escalated, I would also be interested in looking at what steps were taken to identify a cause so that I could retain this for future troubleshooting.
          </p>
        </div>
      </main>
    </div>
  );
}
