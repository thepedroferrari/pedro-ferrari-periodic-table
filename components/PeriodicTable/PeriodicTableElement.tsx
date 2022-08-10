/** @jsx h */
import { Fragment, h } from 'preact';
import { Element, ElementKey } from '../../types/element.ts';
import { Position } from '../../types/position.ts';

import { elements } from '../../constants/elements.ts';

interface Props {
  elementKey: ElementKey;
  position: Position;
  setElementAndOpenDialog: (elementKey: ElementKey) => void;
}

const PeriodicTableElement = ({
  elementKey,
  position,
  setElementAndOpenDialog,
}: Props) => {
  const element = elements[elementKey];

  return (
    <span
      class={`element ${element.category} level-${element.level}`}
      style={{ gridArea: position }}
      onClick={() => setElementAndOpenDialog(elementKey)}
    >
      {getElementName(element)}
    </span>
  );
};

export default PeriodicTableElement;

const getElementName = (element: Element): h.JSX.Element => {
  switch (element.shortName) {
    case ElementKey.blockchain:
      return <Fragment>Block&shy;chain</Fragment>;
    case ElementKey.sustainability:
      return <Fragment>Sustain&shy;ability</Fragment>;
    case ElementKey.accessibility:
      return <Fragment>a11y</Fragment>;
    case ElementKey.angular:
      return <Fragment>Angular</Fragment>;
    case ElementKey.react:
      return <Fragment>React</Fragment>;
    case ElementKey.vue:
      return <Fragment>VUE</Fragment>;
    case ElementKey.postgres:
      return <Fragment>Postgres</Fragment>;
    case ElementKey.technology:
      return <Fragment>Tech</Fragment>;
    case ElementKey.tensorflow:
      return <Fragment>Tensor&shy;flow</Fragment>;
    case ElementKey.wordpress:
      return <Fragment>Word&shy;Press</Fragment>;
    case ElementKey.typescript:
      return <Fragment>TS</Fragment>;
    case ElementKey.javascript:
      return <Fragment>JS</Fragment>;
    default:
      return <Fragment>{element.name}</Fragment>;
  }
};
