
import renderer from 'react-test-renderer';
import App from '../src/App';
import React from "react";

it('renders correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});