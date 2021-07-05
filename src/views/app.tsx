import React from 'react';
import {observer} from 'mobx-react-lite';
import {Router, Switch, Route} from 'react-router-dom';
import {useEntrances} from 'hooks';
import {HomeView} from './home';
import {TestView} from './test';

export const App = observer(() => {
  const {history} = useEntrances();

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/test" component={TestView} />
      </Switch>
    </Router>
  );
});
