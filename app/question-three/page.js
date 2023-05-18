import Image from 'next/image'
import Link from 'next/link'
import styles from '../page.module.css'

export default function QuestionThree() {
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
            <span>3.</span> How would you compare Next.js with another frontend framework?
          </h2>
          <p>
            For this question, I&apos;ve chosen Svelte as a comparison framework to Next.js. I&apos;d like to first highlight that unlike Next.js which is a full-stack framework, Svelte conversely, is primarily a front-end framework. Given this, I&apos;ll also talk about some of SvelteKit&apos;s merits to draw a better comparison, which brings Svelte slightly closer to a full-stack solution.
            <br></br><br></br>
            The main considerations when choosing between these frameworks boil down to the project requirements. Next.js provides out-of-the-box support for Server-Side Rendering (SSR) and (Static Site Generation). Moreover, it allows for static and dynamic routes within the same project. On the other hand, Svelte, on its own, does not provide built-in support for SSR or SSG. However, the introduction of SvelteKit brings in some of the functionality that Next.js provides, allowing for both SSR and SSG.
            <br></br><br></br>
            Next.js offers a powerful development experience with features such as hot code reloading, automatic routing based on the file system, and automatic code splitting. Next.js is typically renowned for its &quot;convention over configuration&quot; approach, so it can lead to faster development and less boilerplate code. However, Svelte, like Vue.js, is known for its simplicity and ease of use which makes it a more developer-friendly experience. It has a clean, easy-to-understand syntax which is appealing to many developers. SvelteKit also enables developers to introduce file system based routing.
            <br></br><br></br>
            In terms of performance, while Next.js does include some optimizations, such as automatic code splitting, the client-side bundle will always include the React library, which makes it larger than any equivalent Svelte application. In contrast, Svelte compiles code into a tightly bundled framework-less vanilla JavaScript, leading to smaller bundle sizes and faster performance.
            <br></br><br></br>
            Lastly, I&apos;d like to touch on the community and ecosystem around these frameworks. Because Next.js is built on React, developers can leverage the largely existing React community and ecosystem within it. While still growing, Svelte&apos;s community and ecosystem does not offer the same level as depth, with SvelteKit&apos;s being even smaller. This may be a barrier for some developers who are looking to minimize effort in their project by leveraging pre-existing resources or documentation.
            <br></br><br></br>
            In summary, Next.js provides a full-stack solution and robust developer experience but comes with performance drawbacks. Svelte shines in its simplicity, clean syntax, and performance optimization, but lacks built-in SSR and SSG support. SvelteKit bridges this gap by bringing more Next.js-like functionalities into the Svelte ecosystem, but introducing SvelteKit to a project would also require additional effort.
            <br></br><br></br>
            Companies such as Hulu, TikTok, and Twitch use Next.js for their full-stack web apps, while 1Password, Square, and IBM use Svelte for some of their frontend experiences.
            <br></br><br></br>
          </p>
          <p><span>References:</span><br></br></p>
          <ul>
            <li>
              https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started
            </li>
            <li>
              https://nextjs.org/docs
            </li>
            <li>
              https://kit.svelte.dev/docs/introduction
            </li>
          </ul>
        </div>

      </main>
    </div>
  )
}
