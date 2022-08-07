/** @jsx h */
import { h } from 'preact';
import { StateUpdater } from 'preact/hooks';
import { ElementKey } from '../../types/element.ts';
import { Position } from '../../types/position.ts';
import { ElementName } from './ElementName.tsx';

import { elements } from '../../constants/elements.ts';

interface Props {
  elementKey: ElementKey;
  position: Position;
  setOpen: StateUpdater<ElementKey | null>;
}

const PeriodicTableElement = ({ elementKey, position, setOpen }: Props) => {
  const element = elements[elementKey];

  return (
    <li
      class={`element ${element.category} level-${element.level}`}
      style={{ gridArea: position }}
      onClick={() => setOpen(elementKey)}
    >
      <ElementName element={element} />
    </li>
  );
};

export default PeriodicTableElement;
