/** @jsx h */
import { Fragment, h } from 'preact';
import { useState } from 'preact/hooks';
import { Categories } from '../types/categories.ts';

const FilterForm = () => {
  return (
    <Fragment>
      <form>
        <div class="category">
          <input type="checkbox" id="build" name="build" />
          <label for="build">Build</label>
          {Object.keys(Categories).map((category) => (
            <span>{category}</span>
          ))}
        </div>
        <div class="level">
          <span>Group 2</span>
        </div>
      </form>
    </Fragment>
  );
};

export default FilterForm;
