/** @jsx h */
import { h } from 'preact';
import { ElementKey } from '../../types/element.ts';
import { Position } from '../../types/position.ts';
import { ElementName } from './ElementName.tsx';

import { elements } from '../../constants/constants.ts';

interface Props {
  elementKey: ElementKey;
  position: Position;
}

export const PeriodicTableElement = ({ elementKey, position }: Props) => {
  const element = elements[elementKey];
  return (
    <li class={element.category} style={{ gridArea: position }}>
      <ElementName element={element} />
    </li>
  );
};
