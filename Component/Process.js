import React, { useState } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const ProgressBar = ({ progress }) => {
  const [animation] = useState(new Animated.Value(progress));

  React.useEffect(() => {
    Animated.timing(animation, {
      toValue: progress,
      duration: 500
    }).start();
  }, [progress]);

  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <Animated.View style={[styles.progress, { width: animation }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    marginBottom:5,
    
  },
  bar: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: '#ed2c7f',
  },
});

export default ProgressBar;