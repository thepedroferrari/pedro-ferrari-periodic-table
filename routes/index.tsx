/** @jsx h */
import { Fragment, h } from 'preact';
import PeriodicTable from '../islands/PeriodicTable.tsx';

const Head = () => (
  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Passionate Frontend Developer" />
    <title>Pedro Ferrari: @thepedroferrari</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Quantico:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="stylesheet" href="/normalise.css" />
    <link rel="stylesheet" href="/root.css" />
    <link rel="stylesheet" href="/style.css" />
  </head>
);

export default function Home() {
  return (
    <Fragment>
      <Head />
      <main>
        <h2>How to solve programming problems:</h2>
        <ol start={0}>
          <li>
            <em>Don't</em> panic
          </li>
          <li>
            What are the <em>inputs</em>?
          </li>
          <li>
            What are the <em>expected outputs</em>?
          </li>
          <li>
            Work through some examples <em>by hand</em>.
          </li>
          <li>
            Create a simple mechanical solution. Something that doesn't really
            solve the issue but gives you a starting thinking point.
          </li>
          <li>Develop incrementally and test as you go</li>
        </ol>

        <PeriodicTable />
      </main>
    </Fragment>
  );
}
