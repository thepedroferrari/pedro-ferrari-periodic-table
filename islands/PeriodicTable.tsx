/** @jsx h */
import { h } from 'preact';
import { useState, useRef, useEffect } from 'preact/hooks';
import FilterForm from '../components/PeriodicTable/FilterForm.tsx';
import PeriodicTableElement from '../components/PeriodicTable/PeriodicTableElement.tsx';
import { PeriodicTableHeader } from '../components/PeriodicTable/PeriodicTableHeader.tsx';
import { elements } from '../constants/elements.ts';
import { ElementKey } from '../types/element.ts';
import { Levels } from '../constants/levels.ts';
import { Categories } from '../types/categories.ts';
import { getElementContent } from '../utils/getElementContent.tsx';

export type Filters = Record<Categories | Levels, boolean>;
const initialFilters: Filters = {
  build: false,
  cloud: false,
  databases: false,
  framework: false,
  interests: false,
  library: false,
  other: false,
  'programming-language': false,
  'saas-paas': false,
  server: false,
  'want-to-learn': false,
  0: false,
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
};

const PeriodicTable = () => {
  const [filter, setFilter] = useState(initialFilters);
  const dialog = useRef<HTMLDialogElement>(null);

  // inert section
  const [open, setOpen] = useState<ElementKey | null>(null);

  useEffect(() => {
    if (open) {
      dialog.current?.showModal();
    } else {
      dialog.current?.close();
    }
  }, [open]);

  return (
    <section class={`periodic-table${makeClassFromObject(filter)}`}>
      <PeriodicTableHeader />
      <FilterForm setFilter={setFilter} />
      {/* // FRONTEND? PROGRAMMING LANGUAGES */}
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.typescript}
        position="a01"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.javascript}
        position="b01"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.python}
        position="c01"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.html}
        position="d01"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.css}
        position="e01"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.elixir}
        position="f01"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.dart}
        position="g01"
      />

      {/* // BACKEND? PROGRAMING LANGUAGES */}
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.java}
        position="a18"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.go}
        position="b18"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.php}
        position="c18"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.bash}
        position="d18"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.ruby}
        position="e18"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.lua}
        position="f18"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.graphql}
        position="g18"
      />

      {/* // MAIN FRAMEWORKS */}
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.react}
        position="b02"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.vue}
        position="c02"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.solid}
        position="d02"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.svelte}
        position="e02"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.angular}
        position="f02"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.flutter}
        position="g02"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.express}
        position="g03"
      />

      {/* // FRAMEWORKS OF FRAMEWORKS */}
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.next}
        position="d03"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.Gatsby}
        position="e03"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey['react-native']}
        position="f03"
      />

      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.remix}
        position="e04"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.fresh}
        position="e05"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.ionic}
        position="e06"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.nuxt}
        position="e07"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.sveltekit}
        position="e08"
      />

      {/* // LIBRARIES */}
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.redux}
        position="c13"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.apollo}
        position="d12"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.relay}
        position="d13"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.nest}
        position="e12"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.d3}
        position="e13"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.three}
        position="e14"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.prisma}
        position="f12"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.jest}
        position="f13"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.cypress}
        position="f14"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.storybook}
        position="f15"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.trpc}
        position="f16"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.tailwind}
        position="g12"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey['react-query']}
        position="d11"
      />

      {/* // OTHER ELEMENTS */}
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.seo}
        position="f09"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.node}
        position="b14"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.deno}
        position="b15"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.bun}
        position="b16"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.network}
        position="b17"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.sass}
        position="c15"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.rest}
        position="c16"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.git}
        position="c17"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.accessibility}
        position="d16"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.mentoring}
        position="d17"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.image}
        position="e17"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.agile}
        position="f07"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.scrum}
        position="f08"
      />

      {/* // BUILD */}
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.webpack}
        position="g04"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.parcel}
        position="g05"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.vite}
        position="g06"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.snowpack}
        position="g07"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.gulp}
        position="g08"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.grunt}
        position="g09"
      />

      {/* // SAAS PAAS */}
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.docker}
        position="d04"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.jira}
        position="d05"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.codepen}
        position="d06"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.jenkins}
        position="d07"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.kubernetes}
        position="d08"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.optimizely}
        position="e10"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.contentful}
        position="e11"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.sanity}
        position="f10"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.strapi}
        position="f11"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.trello}
        position="d09"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.miro}
        position="d10"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.figma}
        position="e09"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.wordpress}
        position="g10"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.shopify}
        position="g11"
      />

      {/* // CLOUD */}
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.aws}
        position="b13"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.gcp}
        position="c14"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.vercel}
        position="d14"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.netlify}
        position="d15"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.azure}
        position="e15"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.firebase}
        position="e16"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.linode}
        position="f17"
      />

      {/* // DATABASES */}
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.mysql}
        position="g13"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.postgres}
        position="g14"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.redis}
        position="g15"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.firestore}
        position="g16"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.mongo}
        position="g17"
      />

      {/* // SERVER */}
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.apache}
        position="f04"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.nginx}
        position="f05"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.caddy}
        position="f06"
      />

      {/* WANT TO LEARN */}
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.tensorflow}
        position="h02"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.rust}
        position="h03"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.edge}
        position="h04"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.webgl}
        position="h05"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.webgpu}
        position="h06"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.astro}
        position="h07"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.clojure}
        position="h08"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.rxjs}
        position="h09"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.flask}
        position="h10"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.cpp}
        position="h11"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.elm}
        position="h12"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.fsharp}
        position="h13"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.Haskell}
        position="h14"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.pytorch}
        position="h15"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.r}
        position="h16"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.typeORM}
        position="h17"
      />

      {/* // INTERESTS */}

      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.blockchain}
        position="i02"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.music}
        position="i03"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.gaming}
        position="i04"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.health}
        position="i05"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.sustainability}
        position="i06"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.science}
        position="i07"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.technology}
        position="i08"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.streaming}
        position="i09"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.design}
        position="i10"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.travel}
        position="i11"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.sports}
        position="i12"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.education}
        position="i13"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.marketing}
        position="i14"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.nonprofit}
        position="i15"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey['privacy-security']}
        position="i16"
      />
      <PeriodicTableElement
        setOpen={setOpen}
        elementKey={ElementKey.coding}
        position="i17"
      />
      {open !== null && (
        <dialog class="dialog" ref={dialog}>
          {getElementContent(open) === null ? (
            <section>
              <h2>{elements[open].name}</h2>
              <p>Hello</p>
            </section>
          ) : (
            getElementContent(open)
          )}
        </dialog>
      )}
    </section>
  );
};

export default PeriodicTable;

const makeClassFromObject = (obj: Record<string, boolean>) => {
  let classes = '';
  Object.entries(obj).forEach(([k, v]) => {
    if (v) {
      classes += ` ${k}`;
    }
  });

  return classes;
};
