import react from 'react';
import reactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';


reactDOM.createRoot(document.getElementById('root')).render(

  <react.StrictMode>
    <Provider store={store}>


      <App>

      </App>
    </Provider>

  </react.StrictMode>
)
