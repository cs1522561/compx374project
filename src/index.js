import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-country-select/dist/react-bootstrap-country-select.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Footer from './components/footer/footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
const footer = ReactDOM.createRoot(document.getElementById('footer'));
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);

footer.render(
  <React.StrictMode>
    <Footer />
    
  </React.StrictMode>
);
