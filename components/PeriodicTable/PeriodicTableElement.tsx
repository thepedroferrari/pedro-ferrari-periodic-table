/** @jsx h */
import { h } from 'preact';
import { ElementKey } from '../../types/element.ts';
import { Position } from '../../types/position.ts';

import { elements } from '../../constants/constants.ts';

interface Props {
  elementKey: ElementKey;
  position: Position;
}

export const PeriodicTableElement = ({ elementKey, position }: Props) => {
  const { shortName, category } = elements[elementKey];
  return (
    <li class={category} style={{ gridArea: position }}>
      <span>{shortName}</span>
    </li>
  );
};
