import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class CounterApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            marginBottom: 30,
            alignItems: 'center',
            fontWeight: '700',
            fontSize: 24,
            color: '#2196f3',
          }}>
          My Counter
        </Text>
        <Button
          onPress={this.props.increment}
          title="Increase Count"
          color="#ba68c8"
        />
        <Text style={styles.welcome}>{this.props.count}</Text>
        <Button
          onPress={this.props.decrement}
          title="Decrease Count"
          color="#1976d2"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
