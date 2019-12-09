import React from 'react';

import { Route, Switch } from 'react-router-dom';

import TypeFaceContainer from './components/style-guide/Typeface';
import PaletteContainer from './components/style-guide/Palette';
import ElementsContainer from './components/style-guide/Elements';
import ResultContainer from './components/style-guide/Result/Result';

export default function Routing() {
  return (
    <Switch>
      <Route exact path="/" component={TypeFaceContainer} />
      <Route path="/typeface" component={TypeFaceContainer} />
      <Route path="/palette" component={PaletteContainer} />
      <Route path="/elements" component={ElementsContainer} />
      <Route path="/result/" component={ResultContainer} />
    </Switch>
  );
}
