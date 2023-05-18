import Image from 'next/image'
import Link from 'next/link'
import styles from '../page.module.css'

export default function QuestionTen() {
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
            <span>10.</span> A customer is creating a site and would like their project not to be indexed by search engines.<br></br>
            Please write a reply to the customer.
          </h2>
          <p>
            <br></br>
            Hi John,
            <br></br><br></br>
            Thanks for getting in touch. I understand that you&apos;d like to prevent your site from being indexed by search engines.
            <br></br><br></br>
            To prevent search engines from indexing your site on Vercel, you&apos;ll need to create or modify the robots.txt file in your project&apos;s public directory. Given that you don&apos;t want any search engine to index your site, here&apos;s an example of what that file should contain:
            <br></br>
          </p>
          <pre style={{ fontSize: '1rem' }}>
            {`
User-agent: *
Disallow: /
`}
          </pre>
          <p>
            <br></br>
            The &apos;User-agent&apos; directive is used to identify the search engine crawler. In this case, we&apos;re using * which is a wildcard that specifies all crawlers, while the &apos;Disallow&apos; directive tells the crawler not to index the specified page(s). In this case, / refers to the entire site.
            <br></br><br></br>
            It&apos;s worth noting that these directives will work for well-behaved crawlers, but it&apos;s important that any content you want to keep private is protected by authentication. This is because some crawlers may ignore the robots.txt file, and you should never rely on robots.txt to protect private information.
            <br></br><br></br>
            If you&apos;d like to find out more on how robots.txt and crawlers work, I recommend Google&apos;s help article on <u><a href="https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt">How to write an submit a robots.txt file</a></u>.
            <br></br><br></br>
            But of course, if you have any further trouble, let me know and I&apos;ll be happy to help.
            <br></br><br></br>
            Cheers,<br></br>
            Justin
            <br></br><br></br>
          </p>
          <p><span>References:</span><br></br>
          </p>
          <ul>
            <li>
              <a href={'https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt'}>https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt</a>
            </li>
          </ul>
        </div>

      </main>
    </div>
  )
}
