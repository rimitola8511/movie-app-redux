import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Home from './pages/Home';
import Hero from './components/Hero';
import CssBaseline from '@mui/material/CssBaseline';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Hero />
        <Home />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
