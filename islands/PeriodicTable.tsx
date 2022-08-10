/** @jsx h */
import { h } from 'preact';
import { useRef, useState } from 'preact/hooks';
import { Dialog } from '../components/Dialog.tsx';
import FilterForm from '../components/PeriodicTable/FilterForm.tsx';
import PeriodicTableElement from '../components/PeriodicTable/PeriodicTableElement.tsx';
import { PeriodicTableHeader } from '../components/PeriodicTable/PeriodicTableHeader.tsx';
import { Levels } from '../constants/levels.ts';
import { Categories } from '../types/categories.ts';
import { ElementKey } from '../types/element.ts';

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

  const openDialog = () => {
    dialog.current?.showModal();
  };

  const [selectedElement, setSelectedElement] = useState<ElementKey | null>(
    null
  );
  const setElementAndOpenDialog = (elementKey: ElementKey) => {
    setSelectedElement(elementKey);
    openDialog();
  };

  return (
    <section class={`periodic-table${makeClassFromObject(filter)}`}>
      <PeriodicTableHeader />
      <FilterForm setFilter={setFilter} />
      {/* // FRONTEND? PROGRAMMING LANGUAGES */}
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.typescript}
        position="a01"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.javascript}
        position="b01"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.python}
        position="c01"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.html}
        position="d01"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.css}
        position="e01"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.elixir}
        position="f01"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.dart}
        position="g01"
      />

      {/* // BACKEND? PROGRAMING LANGUAGES */}
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.java}
        position="a18"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.go}
        position="b18"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.php}
        position="c18"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.bash}
        position="d18"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.ruby}
        position="e18"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.lua}
        position="f18"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.graphql}
        position="g18"
      />

      {/* // MAIN FRAMEWORKS */}
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.react}
        position="b02"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.vue}
        position="c02"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.solid}
        position="d02"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.svelte}
        position="e02"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.angular}
        position="f02"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.flutter}
        position="g02"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.express}
        position="g03"
      />

      {/* // FRAMEWORKS OF FRAMEWORKS */}
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.next}
        position="d03"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.Gatsby}
        position="e03"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey['react-native']}
        position="f03"
      />

      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.remix}
        position="e04"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.fresh}
        position="e05"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.ionic}
        position="e06"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.nuxt}
        position="e07"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.sveltekit}
        position="e08"
      />

      {/* // LIBRARIES */}
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.redux}
        position="c13"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.apollo}
        position="d12"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.relay}
        position="d13"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.nest}
        position="e12"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.d3}
        position="e13"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.three}
        position="e14"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.prisma}
        position="f12"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.jest}
        position="f13"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.cypress}
        position="f14"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.storybook}
        position="f15"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.trpc}
        position="f16"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.tailwind}
        position="g12"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey['react-query']}
        position="d11"
      />

      {/* // OTHER ELEMENTS */}
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.seo}
        position="f09"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.node}
        position="b14"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.deno}
        position="b15"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.bun}
        position="b16"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.network}
        position="b17"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.sass}
        position="c15"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.rest}
        position="c16"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.git}
        position="c17"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.accessibility}
        position="d16"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.mentoring}
        position="d17"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.image}
        position="e17"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.agile}
        position="f07"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.scrum}
        position="f08"
      />

      {/* // BUILD */}
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.webpack}
        position="g04"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.parcel}
        position="g05"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.vite}
        position="g06"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.snowpack}
        position="g07"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.gulp}
        position="g08"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.grunt}
        position="g09"
      />

      {/* // SAAS PAAS */}
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.docker}
        position="d04"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.jira}
        position="d05"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.codepen}
        position="d06"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.jenkins}
        position="d07"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.kubernetes}
        position="d08"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.optimizely}
        position="e10"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.contentful}
        position="e11"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.sanity}
        position="f10"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.strapi}
        position="f11"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.trello}
        position="d09"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.miro}
        position="d10"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.figma}
        position="e09"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.wordpress}
        position="g10"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.shopify}
        position="g11"
      />

      {/* // CLOUD */}
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.aws}
        position="b13"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.gcp}
        position="c14"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.vercel}
        position="d14"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.netlify}
        position="d15"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.azure}
        position="e15"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.firebase}
        position="e16"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.linode}
        position="f17"
      />

      {/* // DATABASES */}
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.mysql}
        position="g13"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.postgres}
        position="g14"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.redis}
        position="g15"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.firestore}
        position="g16"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.mongo}
        position="g17"
      />

      {/* // SERVER */}
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.apache}
        position="f04"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.nginx}
        position="f05"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.caddy}
        position="f06"
      />

      {/* WANT TO LEARN */}
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.tensorflow}
        position="h02"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.rust}
        position="h03"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.edge}
        position="h04"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.webgl}
        position="h05"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.webgpu}
        position="h06"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.astro}
        position="h07"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.clojure}
        position="h08"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.rxjs}
        position="h09"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.flask}
        position="h10"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.cpp}
        position="h11"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.elm}
        position="h12"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.fsharp}
        position="h13"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.Haskell}
        position="h14"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.pytorch}
        position="h15"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.r}
        position="h16"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.typeORM}
        position="h17"
      />

      {/* // INTERESTS */}

      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.blockchain}
        position="i02"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.music}
        position="i03"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.gaming}
        position="i04"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.health}
        position="i05"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.sustainability}
        position="i06"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.science}
        position="i07"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.technology}
        position="i08"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.streaming}
        position="i09"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.design}
        position="i10"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.travel}
        position="i11"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.sports}
        position="i12"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.education}
        position="i13"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.marketing}
        position="i14"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.nonprofit}
        position="i15"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey['privacy-security']}
        position="i16"
      />
      <PeriodicTableElement
        setElementAndOpenDialog={setElementAndOpenDialog}
        elementKey={ElementKey.coding}
        position="i17"
      />
      <Dialog dialogRef={dialog} selectedElement={selectedElement} />
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
