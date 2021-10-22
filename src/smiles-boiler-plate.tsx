import './set-public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';

import Root from './App';

const lifecycles = singleSpaReact({
  React: React as never,
  ReactDOM,
  rootComponent: Root,
  domElementGetter: () => {
    return document.getElementById('sspa-content') as HTMLElement;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
