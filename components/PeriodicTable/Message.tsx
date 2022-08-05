/** @jsx h */
import { h } from 'preact';

export const Message = () => (
  <section class="message">
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
        Create a simple mechanical solution. Something that doesn't really solve
        the issue but gives you a starting thinking point.
      </li>
      <li>Develop incrementally and test as you go</li>
    </ol>
  </section>
);
