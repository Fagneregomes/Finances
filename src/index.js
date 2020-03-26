import React from 'react';
import {StyleSheet, View} from 'react-native';

import Teste from '~/teste';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Teste />
    </View>
  );
}
