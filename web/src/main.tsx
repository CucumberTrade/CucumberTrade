// src/main.tsx

import ReactDOM from 'react-dom/client';
import App from './App';      // <- import the default export
import './App.css';           // <- import your CSS

ReactDOM
  .createRoot(document.getElementById('root')!)
  .render(<App />);
