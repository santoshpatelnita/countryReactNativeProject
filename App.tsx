import React, { Component } from 'react';
import {NavigationContainer,} from '@react-navigation/native';
import RootNavigator from './app/screens/RootNavigator/RootNavigator';
console.disableYellowBox = true;

class App extends Component {

  constructor(props :any) {
    super(props);
    this.state = { };
  }

  render() {
    return (   
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
    );
  }
}

export default App;
