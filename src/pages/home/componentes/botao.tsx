import React, { useCallback, useState, useEffect, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

const Botao = () => {
  return (
    <View style={styles.container}>

      <Image
        style={styles.tinyLogo}
        source={require('../../../res/led.png')}
      />

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });

export default Botao;