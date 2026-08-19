import { Theme } from './settings/types';
import { RafaelPortfolio } from './components/generated/RafaelPortfolio';

let theme: Theme = 'light';

function App() {
  function setTheme(nextTheme: Theme) {
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  return <RafaelPortfolio />;
}

export default App;
