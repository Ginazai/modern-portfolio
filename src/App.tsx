import { ThemeProvider } from './context/ThemeProvider';
import { RafaelPortfolio } from './components/generated/RafaelPortfolio';

function App() {
  return (
    <ThemeProvider>
      <RafaelPortfolio />
    </ThemeProvider>
  );
}

export default App;
