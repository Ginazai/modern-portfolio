import { ThemeProvider } from './context/ThemeProvider';
import { LangProvider } from './context/LangProvider';
import { RafaelPortfolio } from './components/generated/RafaelPortfolio';

function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <RafaelPortfolio />
      </LangProvider>
    </ThemeProvider>
  );
}

export default App;
