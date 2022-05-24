import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const Test = (
  <div>
    <div>f1</div>
  </div>
);

root.render(
  <StrictMode>
    <App />
    <Test />
  </StrictMode>
);
