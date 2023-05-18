import Image from 'next/image'
import Link from 'next/link'
import styles from '../page.module.css'

export default function QuestionNine() {
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
            <span>9.</span> A customer has a project on Vercel and they want to redirect the /blog path to another website.<br></br>Please write a reply to the customer.
          </h2>
          <p>
            <br></br>
            Hi John,
            <br></br><br></br>
            Thanks for reaching out! I&apos;ll be happy to help you set up a redirect.
            <br></br><br></br>
            In Vercel, redirects are configured in the vercel.json file, which can be located in the root directory of your project. If you&apos;re wanting to redirect from /blog to another website, here&apos;s how you would do this:
            <br></br>
          </p>
          <pre style={{ fontSize: '1rem' }}>
            {`
{
  "redirects": [
    {
      "source": "/blog",
      "destination": "https://your-other-website.com",
      "permanent": true
    }
  ]
}
`}
          </pre>
          <br></br>
          <p>
            Per our documentation on <u><a href="https://vercel.com/docs/concepts/projects/project-configuration#redirects">redirects</a></u>, I&apos;d also like to break down what each property does in case you find yourself needing to set up another redirect at some point:
            <br></br><br></br>
          </p>
          <ul>
            <li>source: This is the path on your website that you want to redirect from. In your case, it would be &quot;/blog&quot;.</li>
            <li>destination: This is where you want your users to be taken to when they hit the source.</li>
            <li>permanent: This boolean property sets whether the redirect is permanent (status code 308) or temporary (status code 307). A permanent redirect tells search engines that this change is here to stay.</li>
            <li>has: This optional parameter isn&apos;t used in the example I provided you, but it can be helpful for more complex redirects. Each object in the array can have type, key, and value properties to match specific conditions in the request.</li>
          </ul>
          <p>
            <br></br>
            Lastly, there are a couple of security considerations to bear in mind when using redirects. You should ensure that the target website uses HTTPS to maintain the security of your users&apos; data, and you should only redirect to sites that you trust and control.
            <br></br><br></br>
            Please feel free to get back in touch if you have any other questions.
            <br></br><br></br>
            Cheers,<br></br>
            Justin
          </p>
        </div>
      </main>
    </div>
  )
}
