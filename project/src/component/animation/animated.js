import {View, Text, StyleSheet, Animated} from 'react-native';
import React from 'react';

const Ani = () => {
  const pos = new Animated.ValueXY({x: 0, y: 0});
  console.log(pos);
  Animated.timing(pos, {
    toValue: {x: 200, y: 500},
    duration: 2000,
  }).start();
  return (
    <View style={styles.main}>
      <Animated.View style={{height: 80}}>
        <Text>umesh</Text>
      </Animated.View>
    </View>
  );
};

export default Ani;
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  small: {},
});
