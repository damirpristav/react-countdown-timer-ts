import React, { FC } from 'react';
import './App.scss';

import Countdown from './components/Countdown';

const App: FC = () => {
  return (
    <div className="wrapper">
      <Countdown date="September 30 2020 12:44 GMT+2" />
    </div>
  );
}

export default App;
