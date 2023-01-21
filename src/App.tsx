import { AppProvider } from '@/providers/app';
import { AppRoutes } from '@/routes/Routes';

import './i18n/i18nNext';
import './App.css';
import './assets/styles/reset.css';
import './assets/styles/fonts.css';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </div>
  );
}

export default App;
