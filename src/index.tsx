import React from 'react';
import { createRoot } from 'react-dom/client';

import './i18n';

import { App } from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);

serviceWorkerRegistration.register();
