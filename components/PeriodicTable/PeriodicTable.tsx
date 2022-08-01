/** @jsx h */
import { h } from 'preact';
import { ElementKey } from '../../types/element.ts';
import { PeriodicTableElement } from './PeriodicTableElement.tsx';
import { Categories } from '../../types/categories.ts';

export const PeriodicTable = () => {
  return (
    <section class="periodic-table">
      <header>
        <h1>Periodic Table of Knowledge</h1>
        <p>Stuff</p>
      </header>
      <form>
        <div class="category">
          {Object.keys(Categories).map((category) => (
            <span>{category}</span>
          ))}
        </div>
        <div class="level">
          <span>Group 2</span>
        </div>
      </form>
      {/* // FRONTEND? PROGRAMMING LANGUAGES */}
      <PeriodicTableElement elementKey={ElementKey.typescript} position="a01" />
      <PeriodicTableElement elementKey={ElementKey.javascript} position="b01" />
      <PeriodicTableElement elementKey={ElementKey.python} position="c01" />
      <PeriodicTableElement elementKey={ElementKey.html} position="d01" />
      <PeriodicTableElement elementKey={ElementKey.css} position="e01" />
      <PeriodicTableElement elementKey={ElementKey.elixir} position="f01" />
      <PeriodicTableElement elementKey={ElementKey.dart} position="g01" />

      {/* // BACKEND? PROGRAMING LANGUAGES */}
      <PeriodicTableElement elementKey={ElementKey.java} position="a18" />
      <PeriodicTableElement elementKey={ElementKey.go} position="b18" />
      <PeriodicTableElement elementKey={ElementKey.php} position="c18" />
      <PeriodicTableElement elementKey={ElementKey.bash} position="d18" />
      <PeriodicTableElement elementKey={ElementKey.ruby} position="e18" />
      <PeriodicTableElement elementKey={ElementKey.lua} position="f18" />
      <PeriodicTableElement elementKey={ElementKey.graphql} position="g18" />

      {/* // MAIN FRAMEWORKS */}
      <PeriodicTableElement elementKey={ElementKey.react} position="b02" />
      <PeriodicTableElement elementKey={ElementKey.vue} position="c02" />
      <PeriodicTableElement elementKey={ElementKey.solid} position="d02" />
      <PeriodicTableElement elementKey={ElementKey.svelte} position="e02" />
      <PeriodicTableElement elementKey={ElementKey.angular} position="f02" />
      <PeriodicTableElement elementKey={ElementKey.flutter} position="g02" />

      {/* // FRAMEWORKS OF FRAMEWORKS */}
      <PeriodicTableElement elementKey={ElementKey.next} position="d03" />
      <PeriodicTableElement elementKey={ElementKey.Gatsby} position="e03" />
      <PeriodicTableElement
        elementKey={ElementKey['react-native']}
        position="f03"
      />
      <PeriodicTableElement elementKey={ElementKey.flutter} position="g03" />
      <PeriodicTableElement elementKey={ElementKey.remix} position="e04" />
      <PeriodicTableElement elementKey={ElementKey.fresh} position="e05" />
      <PeriodicTableElement elementKey={ElementKey.ionic} position="e06" />
      <PeriodicTableElement elementKey={ElementKey.nuxt} position="e07" />
      <PeriodicTableElement elementKey={ElementKey.sveltekit} position="e08" />
      <PeriodicTableElement elementKey={ElementKey.express} position="e09" />

      {/* // LIBRARIES */}
      <PeriodicTableElement elementKey={ElementKey.redux} position="c13" />
      <PeriodicTableElement elementKey={ElementKey.apollo} position="d12" />
      <PeriodicTableElement elementKey={ElementKey.relay} position="d13" />
      <PeriodicTableElement elementKey={ElementKey.nest} position="e12" />
      <PeriodicTableElement elementKey={ElementKey.d3} position="e13" />
      <PeriodicTableElement elementKey={ElementKey.three} position="e14" />
      <PeriodicTableElement elementKey={ElementKey.prisma} position="f12" />
      <PeriodicTableElement elementKey={ElementKey.jest} position="f13" />
      <PeriodicTableElement elementKey={ElementKey.cypress} position="f14" />
      <PeriodicTableElement elementKey={ElementKey.storybook} position="f15" />
      <PeriodicTableElement elementKey={ElementKey.trpc} position="f16" />
      <PeriodicTableElement elementKey={ElementKey.tailwind} position="g12" />
      <PeriodicTableElement
        elementKey={ElementKey['react-query']}
        position="f04"
      />

      {/* // OTHER ELEMENTS */}
      <PeriodicTableElement elementKey={ElementKey.seo} position="f09" />
      <PeriodicTableElement elementKey={ElementKey.node} position="b14" />
      <PeriodicTableElement elementKey={ElementKey.deno} position="b15" />
      <PeriodicTableElement elementKey={ElementKey.bun} position="b16" />
      <PeriodicTableElement elementKey={ElementKey.network} position="b17" />
      <PeriodicTableElement elementKey={ElementKey.sass} position="c15" />
      <PeriodicTableElement elementKey={ElementKey.rest} position="c16" />
      <PeriodicTableElement elementKey={ElementKey.git} position="c17" />
      <PeriodicTableElement
        elementKey={ElementKey.accessibility}
        position="d16"
      />
      <PeriodicTableElement elementKey={ElementKey.mentoring} position="d17" />
      <PeriodicTableElement elementKey={ElementKey.image} position="e17" />
      <PeriodicTableElement elementKey={ElementKey.agile} position="f05" />
      <PeriodicTableElement elementKey={ElementKey.scrum} position="f06" />

      {/* // BUILD */}
      <PeriodicTableElement elementKey={ElementKey.webpack} position="g04" />
      <PeriodicTableElement elementKey={ElementKey.parcel} position="g05" />
      <PeriodicTableElement elementKey={ElementKey.vite} position="g06" />
      <PeriodicTableElement elementKey={ElementKey.snowpack} position="g07" />
      <PeriodicTableElement elementKey={ElementKey.gulp} position="g08" />
      <PeriodicTableElement elementKey={ElementKey.grunt} position="g09" />

      {/* // SAAS PAAS */}
      <PeriodicTableElement elementKey={ElementKey.docker} position="d04" />
      <PeriodicTableElement elementKey={ElementKey.jira} position="d05" />
      <PeriodicTableElement elementKey={ElementKey.codepen} position="d06" />
      <PeriodicTableElement elementKey={ElementKey.jenkins} position="d07" />
      <PeriodicTableElement elementKey={ElementKey.kubernetes} position="d08" />
      <PeriodicTableElement elementKey={ElementKey.optimizely} position="e10" />
      <PeriodicTableElement elementKey={ElementKey.contentful} position="e11" />
      <PeriodicTableElement elementKey={ElementKey.sanity} position="f10" />
      <PeriodicTableElement elementKey={ElementKey.strapi} position="f11" />
      <PeriodicTableElement elementKey={ElementKey.trello} position="d09" />
      <PeriodicTableElement elementKey={ElementKey.miro} position="d10" />
      <PeriodicTableElement elementKey={ElementKey.figma} position="d11" />
      <PeriodicTableElement elementKey={ElementKey.wordpress} position="g10" />
      <PeriodicTableElement elementKey={ElementKey.shopify} position="g11" />

      {/* // CLOUD */}
      <PeriodicTableElement elementKey={ElementKey.aws} position="b13" />
      <PeriodicTableElement elementKey={ElementKey.gcp} position="c14" />
      <PeriodicTableElement elementKey={ElementKey.vercel} position="d14" />
      <PeriodicTableElement elementKey={ElementKey.netlify} position="d15" />
      <PeriodicTableElement elementKey={ElementKey.azure} position="e15" />
      <PeriodicTableElement elementKey={ElementKey.firebase} position="e16" />
      <PeriodicTableElement elementKey={ElementKey.linode} position="f17" />

      {/* // DATABASES */}
      <PeriodicTableElement elementKey={ElementKey.mysql} position="g13" />
      <PeriodicTableElement elementKey={ElementKey.postgres} position="g14" />
      <PeriodicTableElement elementKey={ElementKey.redis} position="g15" />
      <PeriodicTableElement elementKey={ElementKey.firestore} position="g16" />
      <PeriodicTableElement elementKey={ElementKey.mongo} position="g17" />

      {/* // SERVER */}
      <PeriodicTableElement elementKey={ElementKey.apache} position="f07" />
      <PeriodicTableElement elementKey={ElementKey.nginx} position="f08" />

      {/* WANT TO LEARN */}
      <PeriodicTableElement elementKey={ElementKey.tensorflow} position="h02" />
      <PeriodicTableElement elementKey={ElementKey.rust} position="h03" />
      <PeriodicTableElement elementKey={ElementKey.edge} position="h04" />
      <PeriodicTableElement elementKey={ElementKey.webgl} position="h05" />
      <PeriodicTableElement elementKey={ElementKey.webgpu} position="h06" />
      <PeriodicTableElement elementKey={ElementKey.astro} position="h07" />
      <PeriodicTableElement elementKey={ElementKey.clojure} position="h08" />
      <PeriodicTableElement elementKey={ElementKey.rxjs} position="h09" />
      <PeriodicTableElement elementKey={ElementKey.flask} position="h10" />
      <PeriodicTableElement elementKey={ElementKey.cpp} position="h11" />
      <PeriodicTableElement elementKey={ElementKey.elm} position="h12" />
      <PeriodicTableElement elementKey={ElementKey.fsharp} position="h13" />
      <PeriodicTableElement elementKey={ElementKey.Haskell} position="h14" />
      <PeriodicTableElement elementKey={ElementKey.pytorch} position="h15" />
      <PeriodicTableElement elementKey={ElementKey.r} position="h16" />
      <PeriodicTableElement elementKey={ElementKey.typeORM} position="h17" />

      {/* // INTERESTS */}

      <PeriodicTableElement elementKey={ElementKey.blockchain} position="i02" />
      <PeriodicTableElement elementKey={ElementKey.music} position="i03" />
      <PeriodicTableElement elementKey={ElementKey.gaming} position="i04" />
      <PeriodicTableElement elementKey={ElementKey.health} position="i05" />
      <PeriodicTableElement
        elementKey={ElementKey.sustainability}
        position="i06"
      />
      <PeriodicTableElement elementKey={ElementKey.science} position="i07" />
      <PeriodicTableElement elementKey={ElementKey.technology} position="i08" />
      <PeriodicTableElement elementKey={ElementKey.streaming} position="i09" />
      <PeriodicTableElement elementKey={ElementKey.design} position="i10" />
      <PeriodicTableElement elementKey={ElementKey.travel} position="i11" />
      <PeriodicTableElement elementKey={ElementKey.sports} position="i12" />
      <PeriodicTableElement elementKey={ElementKey.education} position="i13" />
      <PeriodicTableElement elementKey={ElementKey.marketing} position="i14" />
      <PeriodicTableElement elementKey={ElementKey.nonprofit} position="i15" />
      <PeriodicTableElement
        elementKey={ElementKey['privacy-security']}
        position="i16"
      />
      <PeriodicTableElement elementKey={ElementKey.coding} position="i17" />
    </section>
  );
};
