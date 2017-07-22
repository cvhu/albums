// import a library

import React from 'react';
import { Text, AppRegistry } from 'react-native';

// create a Component

const App = () => (
    <Text>Some Text</Text>
);
// render to the device

AppRegistry.registerComponent('albums', () => App);
