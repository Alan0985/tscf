import { ContactForm } from './components/ContactForm';
import { ThemeProvider } from 'styled-components';

import './App.css';

const theme = {
  color: {
    primary: '#1565c0',
    white: '#fff',
  },
  vp: {
    xs: '375px',
    sm: '768px',
  },
};

function App()
{
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ContactForm />
      </div>
    </ThemeProvider>

  );
}

export default App;
