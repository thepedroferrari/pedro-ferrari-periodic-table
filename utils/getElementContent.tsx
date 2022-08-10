/** @jsx h */
import { h } from 'preact';
import { elements } from '../constants/elements.ts';
import { ElementKey } from '../types/element.ts';
import { TypeScript } from '../components/PeriodicTable/Elements/TypeScript.tsx';

export const getElementContent = (key: ElementKey) => {
  switch (key) {
    case 'typescript':
      return <TypeScript />;
    default:
      return <BasicDialogContent selectedElement={key} />;
  }
};

const BasicDialogContent = ({
  selectedElement,
}: {
  selectedElement: ElementKey;
}) => {
  return (
    <section>
      <h2>{elements[selectedElement].name}</h2>
      <p>get github api and filter by technology / package.json</p>
    </section>
  );
};
