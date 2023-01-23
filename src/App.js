import { BrowserRouter, Link } from 'react-router-dom';
import AppRoute from './routes';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AppRoute />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/viewer">Viewer</Link>
        </li>
      </ul>
    </BrowserRouter>
  );
}

export default App;
