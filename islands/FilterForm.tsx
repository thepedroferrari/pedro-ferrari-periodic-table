/** @jsx h */
import { h, JSX } from 'preact';
import { StateUpdater, useCallback } from 'preact/hooks';
import { Filters } from './PeriodicTable.tsx';
import { getUserLanguage, i18n } from '../utils/i18n.ts';

interface Props {
  setFilter: StateUpdater<Filters>;
}
const FilterForm = ({ setFilter }: Props) => {
  const handleCheckbox = (e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    const target = e.target as HTMLInputElement;
    setFilter((prev) => ({
      ...prev,
      [target.name]: target.checked,
    }));
  };

  const { categories, levels } = i18n[getUserLanguage()];

  return (
    <form>
      <section class="categories">
        {Object.entries(categories).map(([k, v]) => (
          <label>
            <input type="checkbox" name={k} onChange={handleCheckbox} />
            <div class={k}></div>
            <span>{v}</span>
          </label>
        ))}
      </section>
      <section class="levels">
        {Object.entries(levels).map(([k, v]) => (
          <label>
            <input
              type="checkbox"
              name={`level-${k}`}
              onChange={handleCheckbox}
            />
            <div class={k}></div>
            <span>{v}</span>
          </label>
        ))}
      </section>
    </form>
  );
};

export default FilterForm;
