(function() {
  try {
    var store = window.fetch;
    var targets = [
      typeof window !== 'undefined' ? window : null,
      typeof Window !== 'undefined' && Window.prototype ? Window.prototype : null,
      typeof globalThis !== 'undefined' ? globalThis : null,
      typeof self !== 'undefined' ? self : null
    ];
    targets.forEach(function(target) {
      if (!target) return;
      try {
        Object.defineProperty(target, 'fetch', {
          get: function() { return store; },
          set: function(v) { store = v; },
          configurable: true,
          enumerable: true
        });
      } catch (e) {}
    });
  } catch (e) {}
})();

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

