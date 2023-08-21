import 'react-app-polyfill/ie11';
import React from 'react';

import Header from './Header';
import List from '../containers/List';

const App = () => (
    <div>
        <Header />
        <List />
    </div>
);

export default App;
