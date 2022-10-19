import React from 'react'
import { Button } from './button'
import { View, StyleSheet } from 'react-native'

export const NavigationBar = () => {
  return (
    <View style={styles.navigationBar}>
      <Button onPress={() => setText(text + 1)} title={'+'}></Button>
      <Button onPress={() => setText(text - 1)} title={'-'}></Button>
      <Button onPress={() => setText(text * 2)} title={'x'}></Button>
      <Button onPress={() => setText(text / 2)} title={'/'}></Button>
      <Button onPress={() => setText(0)} title={'0'}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  navigationBar: {
    height: '8%',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#333333',
  },
})
