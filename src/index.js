import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
console.log(3, 'on main');
console.log(1, 'on merge');
console.log(2, 'on merge');

const Test = (
  <div>
    <div>f1</div>
    <div>f2</div>
  </div>
);

console.log(1, 'on main');
console.log(2, 'on main');

root.render(
  <StrictMode>
    <App />
    <Test />
  </StrictMode>
);
