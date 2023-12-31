import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import '../node_modules/react-bootstrap/dist/react-bootstrap.min'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './Components/Store/auth-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AuthContextProvider>
);
