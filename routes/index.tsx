/** @jsx h */
import { Fragment, h } from 'preact';
import PeriodicTable from '../islands/PeriodicTable.tsx';

const Head = () => (
  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Passionate Frontend Developer" />
    <title>Pedro Ferrari: @thepedroferrari</title>
    <link
      media="print"
      onLoad={() => {
        (this as unknown as XMLHttpRequestEventTarget).onload = null;
        (this as unknown as Element).removeAttribute('media');
      }}
      href="https://fonts.googleapis.com"
    />
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
        <PeriodicTable />
      </main>
    </Fragment>
  );
}
