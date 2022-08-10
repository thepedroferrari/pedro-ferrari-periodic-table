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

      <h2>Projects</h2>
      <ul>
        <li>
          # [VUE | TypeScript] A Memory Game built with VUE JS using the{' '}
          <strong>Composition API and TypeScript</strong> while hosting the
          Leaderboard in Firebase:
          <a href="https://github.com/thepedroferrari/Memory-Game-Vue-3">
            GitHub
          </a>
          <a href="https://matchit.pedroferrari.com/">
            https://matchit.pedroferrari.com/
          </a>
        </li>
        <li>
          # [BUN | SolidJS | TypeScript] A fun pokedex that instantly fetches
          pokemon and caches information:
          <a href="https://github.com/thepedroferrari/Bun-SolidJS">GitHub</a>
          <a href="https://github.com/thepedroferrari/Bun-SolidJS">
            https://solidpokedex.pedroferrari.com/
          </a>
        </li>
        <li>
          # [TypeScript | Docker | Apolo GraphQL | React | Redux] An E-Sports
          Client made with <strong>Apollo Client</strong> and React:
          <a href="https://dota.pedroferrari.com">
            https://dota.pedroferrari.com
          </a>
        </li>

        <li>
          # [TypeScript | React | Browser APIs | Caching] A case-study on
          Streaming Services that rely on TV Boxes and slower devices about how
          to save memory by forcing the garbage collector to dispose images and
          data.
          <a href="https://github.com/thepedroferrari/React-Streaming-Platform-Memory-Cleanup-Study">
            https://github.com/thepedroferrari/React-Streaming-Platform-Memory-Cleanup-Study
          </a>
        </li>

        <li>
          # [TypeScript | React | Node | GraphQL] A chat tool for Planning
          poker, one of the most wasteful ways to pretend we can define how long
          software will take to be built.
          <a href="https://github.com/thepedroferrari/planning-poker-client">
            Github Client
          </a>
          <a href="https://github.com/thepedroferrari/Planning-Poker-GraphQL-API">
            Github Server
          </a>
        </li>

        <li>
          # [TypeScript | React | Grommet | Firebase] A Property Auditor that
          lets you calculate the value and compare with other properties based
          on your personal profile:
          <a href="https://auditor.pedroferrari.com/">
            https://auditor.pedroferrari.com/
          </a>
        </li>
        <li>
          # [TypeScript Class] A one-hour class on usability of TypeScript after
          the basic understanding:
          <a href="https://github.com/thepedroferrari/ts-basics-presentation">
            https://github.com/thepedroferrari/ts-basics-presentation
          </a>
        </li>
        <li>
          # [Deno | TypeScript | XLSS] A tool to calculate expenses based on a
          export from HandelsBanken:
          <a href="https://github.com/thepedroferrari/DenoExcelReaderAPI">
            GitHub
          </a>
        </li>

        <li>
          # [JAVA | TypeScript | React] A tool to pool data from a Vertex/Java
          Backend:
          <a href="https://github.com/thepedroferrari/JAVA-service-poller-BE-React-FE">
            GitHub
          </a>
        </li>

        <li>
          # [React | TypeScript | XLSS] A tool to calculate expenses based on a
          export from HandelsBanken:
          <a href="https://github.com/thepedroferrari/HandelsBanken-XLSX-Visualizer">
            GitHub
          </a>
          <a href="https://github.com/thepedroferrari/Bun-SolidJS">
            https://ma.pedroferrari.com/
          </a>
        </li>
        <li>
          # [Deno | React | TypeScript | Oak] A simple calculator server that
          parses strings sent by the frontend:
          <a href="https://github.com/thepedroferrari/Deno-Simple-Calculator">
            GitHub Backend
          </a>
          <a href="https://github.com/thepedroferrari/React-use-Deno-Calculator">
            GitHub Frontend
          </a>
        </li>

        <li>
          # [Golang | GO] A Game of Conway written in GO
          <a href="https://github.com/thepedroferrari/GO-Conway">GitHub</a>
        </li>
        <li>
          # [JAVA] A Game of 21 written in Java
          <a href="https://github.com/thepedroferrari/GameOf21">GitHub</a>
        </li>
        <li>
          # [Node | Puppeteer | Headless Chrome | Rest] A tool that scrapes
          information from Hemnet website and servers it through API Requests
          <a href="https://github.com/thepedroferrari/hemnet-scrapper">
            GitHub
          </a>
        </li>
        <li>
          # [React | JavaScript] A Tetris game in React
          <a href="https://github.com/thepedroferrari/hemnet-scrapper">
            GitHub
          </a>
        </li>
        <li>
          # [TypeScript | React | Styled Components | Firebase] A typing game
          where you can save your score to a<strong>Firebase</strong>{' '}
          Leaderboard:
          <a href="https://typist.pedroferrari.com/">
            https://typist.pedroferrari.com/
          </a>
        </li>
        <li>
          # [Node | TypeScript | Apollo Server] A GraphQL Server for an E-Sports
          Rest API made with Apollo Server:
          <a href="http://the-dota-api.herokuapp.com/graphql">
            http://the-dota-api.herokuapp.com/graphql
          </a>
        </li>
        <li>
          # [TypeScript | Zustand] A Memory Game built with React using{' '}
          <strong>Zustand, React Tracked and TypeScript</strong> while hosting
          the Leaderboard in Firebase:
          <a href="https://memorygame.pedroferrari.com/">
            https://memorygame.pedroferrari.com/
          </a>
        </li>
        <li>
          # [Voice API] The <strong>Chrome Voice API</strong> tool that writes
          what you said and interacts with defined words:
          <a href="https://dictate.pedroferrari.com">
            https://dictate.pedroferrari.com
          </a>
        </li>
        <li>
          # [Bash | Chocolatey | JavaScript | Windows Installer] Windows
          Automation Installer / Updater / Uninstaller web generator tool built
          in <strong>JavaScript</strong> and <strong>Bash:</strong>
          <a href="https://rockinstaller.pedroferrari.com">
            https://rockinstaller.pedroferrari.com
          </a>
        </li>
        <li>
          # [TypeScript | React | Websockets | SSO ] A <strong>React</strong>{' '}
          fake store with
          <strong>authentication</strong> and real time database with
          <strong>Firebase</strong>:
          <a href="https://catchoftheday.pedroferrari.com">
            https://catchoftheday.pedroferrari.com
          </a>
        </li>
        <li>
          # [React | TypeScript | Canvas] The classic game{' '}
          <strong>Snake</strong> built with
          <strong>React and TypeScript</strong>:
          <a href="https://snake.pedroferrari.com">
            https://snake.pedroferrari.com
          </a>
        </li>
        <li>
          # [React | TypeScript | Canvas] The famous <strong>Pong Game</strong>{' '}
          built in
          <strong>React</strong>:
          <a href="https://pong.pedroferrari.com">
            https://pong.pedroferrari.com
          </a>
        </li>
        <li>
          # [NestJS | TypeScript | GraphQL | MongoDB] A <strong>Backend</strong>{' '}
          server written in
          <strong>NestJS/GraphQL/MongoDB</strong> to get cat images (very
          important tool):
          <a href="https://github.com/thepedroferrari/nestJS-GraphQL-MongoDB-Cats">
            https://github.com/thepedroferrari/nestJS-GraphQL-MongoDB-Cats
          </a>
        </li>
        <li>
          # [Giphy API | TypeScript] A React Giphy search with{' '}
          <strong>TypeScript</strong> and
          <strong>React Hooks</strong>:
          <a href="https://giphy.pedroferrari.com">
            https://giphy.pedroferrari.com
          </a>
        </li>
        <li>
          # [TypeScript | React] A Todo App using <strong>TypeScript</strong>{' '}
          and
          <strong>React Hooks</strong>:
          <a href="https://todo.pedroferrari.com">
            https://todo.pedroferrari.com
          </a>
        </li>
        <li>
          # [React] A simple Fetch using a <strong>REST</strong> API built in
          <strong>React</strong>:
          <a href="https://postfetcher.pedroferrari.com">
            https://postfetcher.pedroferrari.com
          </a>
        </li>
        <li>
          # [React | Redux] A movie database using <strong>themoviesdb</strong>{' '}
          API with
          <strong>React</strong> and <strong>Redux</strong>:
          <a href="https://moviesdb.pedroferrari.com">
            https://moviesdb.pedroferrari.com
          </a>
        </li>
        <li>
          # [React] A fake instagram-like tool built in <strong>React</strong>:
          <a href="https://insta.pedroferrari.com">
            https://insta.pedroferrari.com
          </a>
        </li>
        <li>
          # [JavaScript] A simple Counter Strike based mobile game:
          <a href="https://mobilestrike.pedroferrari.com">
            https://mobilestrike.pedroferrari.com
          </a>
        </li>
        <li>
          <del>
            IBM Watson voice API built in React:
            <a href="https://watson.pedroferrari.com">
              https://watson.pedroferrari.com
            </a>
          </del>
        </li>
      </ul>
    </section>
  </div>
);
