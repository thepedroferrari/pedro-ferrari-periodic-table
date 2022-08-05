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

  const userCategories = i18n[getUserLanguage()].categories;

  return (
    <form>
      <section class="categories">
        {Object.entries(userCategories).map(([k, v]) => (
          <label>
            <input type="checkbox" name={k} onChange={handleCheckbox} />
            <div class={k}></div>
            <span>{v}</span>
          </label>
        ))}
      </section>
    </form>
  );
};

export default FilterForm;
