/** @jsx h */
import { Fragment, h } from 'preact';
import { ElementKey, Element } from '../../types/element.ts';

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

export const ElementName = ({ element }: { element: Element }) => {
  return <span>{getElementName(element)}</span>;
};
