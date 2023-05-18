import Image from 'next/image'
import Link from 'next/link'
import styles from '../page.module.css'

export default function QuestionTwo() {
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
            <span>2.</span> Describe how you solved a challenge or technical issue that you faced in a previous role. How did you determine that your solution was successful?
          </h2>
          <p>
            A recent challenging scenario I encountered at FullStory was a customer that had a React-based e-commerce website with a real-time recommendation system. The &apos;Recommended for You&apos; section on the page would update dynamically based on the user&apos;s interactions with various products, including the addition or removal of a product from their cart.
            <br></br><br></br>
            While FullStory was capturing general interactions on the site, it wasn&apos;t accurately capturing the user interactions leading to changes in the &apos;Recommended for You&apos; section. After further investigation, I determined that this was due to the highly dynamic nature of this DOM element, which was being updated asynchronously based on user actions and React&apos;s state changes. FullStory uses MutationObserver to observe DOM changes, and it was not picking up on these changes reliably due to their rapid and asynchronous nature. Within the FullStory app itself, this resulted in the playback experience being inconsistent with the actual user experience. This was troublesome as the customer was not able to accurately observe user journeys or create funnels in FullStory based on what the recommendation system was doing.
            <br></br><br></br>
            To address this, I suggested a solution that combined the use of React practices with FullStory&apos;s FS.event method, which is a part of FullStory&apos;s API that allows customers to manually send custom event data to FullStory. These custom events are then searchable and analyzable in FullStory, just like the events that FullStory captures automatically when DOM mutations occur.
            <br></br><br></br>
            Rather than attempting to capture every individual DOM mutation which was not currently possible for FullStory, I proposed tracking the high-level user interactions that were triggering these changes by using FS.event. The React application was already maintaining a state for the user&apos;s interactions and the status of the recommendation system. I recommended to the customer that their developers send custom events using FS.event every time this state changed, essentially tagging significant interactions that led to changes in the recommendation section. For example, if a user viewed a particular product, that action would be sent as a custom event to FullStory as:
          </p>
          <br></br>
          <pre style={{ fontSize: '1rem' }}>{`FS.event('Product Viewed', {
    productId: '123',
    productName: 'Sample Product'
})`}</pre>
          <p>
            <br></br><br></br>
            By combining this functionality with FS.event, the customer was able to reconstruct the sequence of user interactions that led to changes in the &apos;Recommended for You&apos; section, providing an accurate representation of their user journey.
            <br></br><br></br>
            I was able to measure this solution&apos;s success by the customer&apos;s ability to now be able to correctly quantify the data from their &apos;Recommended for You&apos; section in FullStory. This then allowed them to track these users in FullStory by creating funnels and measuring conversion rates for those users.
          </p>
        </div>
      </main>
    </div>
  )
}
