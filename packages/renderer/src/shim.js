/* eslint-disable */
import process from 'process';

if (typeof global === 'undefined' || typeof global.process === 'undefined') {
  // global window
  window.global = window;
  window.process = process;
}

/*
check if this is needed.
usage in vite.config.js (rollup options) - ignore process and assert
and import in index.tsx
*/
