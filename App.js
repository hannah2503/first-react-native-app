import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Input from './Components/Input/Input';
import Tinder from './Components/Tinder/Tinder';

export default class App extends React.Component {
  state = {
    value: '',
    jokes: []
  }

  render() {
    return (
      <View style={styles.container}>
        <Input
          updateJokes={(jokes)=> this.setState({jokes: jokes})}
          value={this.state.value}
          onChange={(value) => this.setState({value: value})}
        />
        <Tinder
          jokes={this.state.jokes}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: 100,
    height: 50
  },
  tinder: {
    flex: 1
  }
});
