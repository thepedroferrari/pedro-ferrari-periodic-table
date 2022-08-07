/** @jsx h */
import { h } from 'preact';
import { YoutubeVideo } from '../../YoutubeVideo.tsx';

export const TypeScript = () => (
  <section>
    <header>
      <h2>TypeScript</h2>
    </header>
    <p>
      TypeScript is my favorite language today. Just like most developers, I
      started by twisting my nose and thinking why would I need to add
      complexity to JavaScript. Then one day after using it for a few months, I
      realised TypeScript just prevented me from creating an error I would've
      missed, tests wouldn't have caught it and the company could've have missed
      on business opportunities.
    </p>
    <section
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr));',
        gap: '1rem',
      }}
    >
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51csAp-ykgL._SX379_BO1,204,203,200_.jpg"
        alt="TypeScript Book"
        style={{ width: '100%' }}
      />
      <div>
        <p>
          Since that day around {new Date().getFullYear() - 2017} years ago, I
          decided to dig in deep into TypeScript. A senior developer at my team
          was also very excited about TypeScript and recommended me a book.
        </p>
        <p>
          A few years later I found myself in another position, a startup that
          had yet to adopt TypeScript and many other code utilities that
          facilitate the Frontend development flow. There I introduced
          TypeScript among rules of development so everyone would be at the same
          page. The reaction of many were the same as my own when I started, by
          questioning the need of it. As a mentor, I positioned myself as always
          available, promptly answering questions, taking extra time to teach
          and guide instead of just providing an answer; and willing to help
          ease any pain-points. After about three months we reached the end of a
          transition phase where most people started getting comfortable with
          TypeScript.
        </p>
      </div>
    </section>

    <h3>One of my presentations</h3>
    <YoutubeVideo videoId="fcUtATS5Y8Q" />
    <p>
      Check it on GitHub:{' '}
      <a href="https://github.com/thepedroferrari/ts-basics-presentation">
        https://github.com/thepedroferrari/ts-basics-presentation
      </a>
    </p>

    <h3>I love helping out</h3>
    <p>
      Today I am hosting seminars and creating content around TypeScript that
      empowers other developers, colleagues and students. It makes me the
      happiest when I am able to help someone get ahead into the next level, and
      I also learn a lot in the process.
    </p>
  </section>
);
