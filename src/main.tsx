import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MotionConfig, MotionGlobalConfig } from 'motion/react';
import { IconContext } from '@phosphor-icons/react';
import '@fontsource-variable/geist';
import '@fontsource-variable/geist-mono';
import './index.css';
import App from './App.tsx';

// Tooling hook: allow ?shouldSkipAnimations=true (or ?mode=editable) to disable motion.
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('shouldSkipAnimations') === 'true' || urlParams.get('mode') === 'editable') {
  MotionGlobalConfig.skipAnimations = true;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <IconContext.Provider value={{ weight: 'regular', size: 18 }}>
        <App />
      </IconContext.Provider>
    </MotionConfig>
  </StrictMode>
);
