import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
console.log(1);
console.log(2);

const Test = (
  <div>
    <div>f1</div>
    <div>f2</div>
  </div>
);

root.render(
  <StrictMode>
    <App />
    <Test />
  </StrictMode>
);
