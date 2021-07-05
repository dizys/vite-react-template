import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components';

import {Entrances} from 'entrances';
import {EntrancesContext} from 'hooks';
import {theme} from 'theme';
import {App} from 'views/app';

import './global.css';

async function main() {
  const entrances = new Entrances();

  await entrances.servicesReady;

  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <EntrancesContext.Provider value={entrances}>
        <App />
      </EntrancesContext.Provider>
    </ThemeProvider>,
    document.getElementById('app'),
  );
}

main().catch(console.error);
