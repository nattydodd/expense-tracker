import { configure } from '@storybook/react';

const atoms = require.context('../src/components/atoms', true, /\.stories\.tsx$/);
const molecules = require.context('../src/components/molecules', true, /\.stories\.tsx$/);

function loadStories() {
  atoms.keys().forEach((filename) => atoms(filename));
  molecules.keys().forEach((filename) => molecules(filename));
}

configure(loadStories, module);
