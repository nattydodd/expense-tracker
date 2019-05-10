import { configure } from '@storybook/react';

const atoms = require.context('../src/atoms', true, /\.stories\.tsx$/);
const molecules = require.context('../src/molecules', true, /\.stories\.tsx$/);

function loadStories() {
  atoms.keys().forEach((filename) => atoms(filename));
  molecules.keys().forEach((filename) => molecules(filename));
}

configure(loadStories, module);
