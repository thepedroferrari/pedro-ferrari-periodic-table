/** @jsx h */
import { h } from 'preact';

export const Message = () => (
  <div>
    <section class="card about">
      <div class="hero"></div>
      <div class="main">
        <img
          class="avatar"
          width="100"
          height="100"
          src="./pedro-ferrari-senior-software-engineer.jpg"
          alt="Pedro Ferrari Senior Software Engineer"
        />
        <div class="user-details">
          <h3>Pedro Ferrari</h3>
          <span class="location">
            <span>Stockholm, Sweden</span>
          </span>
        </div>
      </div>
      <div class="contact">
        <menu>
          <li>
            <a href="mailto:pedro@pedroferrari.com">pedro@pedroferrari.com</a>
          </li>
          <li>
            <a href="https://github.com/thepedroferrari/">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/thepedroferrari/">LinkedIn</a>
          </li>
          <li>
            <a href="https://stackoverflow.com/users/6593250/pedro-ferrari">
              Stack Overflow
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/thepedroferrari">Facebook</a>
          </li>
        </menu>
      </div>
    </section>
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
          Create a simple mechanical solution. Something that doesn't really
          solve the issue but gives you a starting thinking point.
        </li>
        <li>Develop incrementally and test as you go</li>
      </ol>
    </section>
  </div>
);
