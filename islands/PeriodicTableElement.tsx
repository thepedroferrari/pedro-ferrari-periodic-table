/** @jsx h */
import { h } from 'preact';
import { ElementName } from '../components/PeriodicTable/ElementName.tsx';
import { ElementKey } from '../types/element.ts';
import { Position } from '../types/position.ts';

import { elements } from '../constants/constants.ts';

interface Props {
  elementKey: ElementKey;
  position: Position;
}

const PeriodicTableElement = ({ elementKey, position }: Props) => {
  const element = elements[elementKey];
  return (
    <li class={element.category} style={{ gridArea: position }}>
      <ElementName element={element} />
    </li>
  );
};

export default PeriodicTableElement;
