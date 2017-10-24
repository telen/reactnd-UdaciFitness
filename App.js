import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddEntry from './components/AddEntry'

export default class App extends React.Component {

  componentWillMount() {
    console.log('Before')
    // debugger
    console.log('After')
  }
  render() {
    return (
      <View >
        <AddEntry />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
