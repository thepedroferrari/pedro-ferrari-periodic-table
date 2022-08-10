/** @jsx h */
import { h } from 'preact';
import { Ref } from 'preact/hooks';

import { ElementKey } from '../types/element.ts';
import { getElementContent } from '../utils/getElementContent.tsx';

interface Props {
  dialogRef: Ref<HTMLDialogElement>;
  selectedElement: ElementKey | null;
}

export const Dialog = ({ dialogRef, selectedElement }: Props) => {
  if (selectedElement === null) {
    return null;
  }

  return (
    <dialog class="dialog" ref={dialogRef}>
      <header>
        <form method="dialog">
          <button>Close</button>
        </form>
      </header>
      {getElementContent(selectedElement)}
    </dialog>
  );
};
