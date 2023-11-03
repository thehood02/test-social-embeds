/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import PostScreen from "./src/PostScreen";

function App(): JSX.Element {
  return (
    <SafeAreaView>
     <PostScreen />
    </SafeAreaView>
  );
}

export default App;
