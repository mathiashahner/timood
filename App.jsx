import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationBar } from './src/components/index'
import { StyleSheet, Text, View, NativeModules } from 'react-native'

export default function App() {
  const [text, setText] = useState(0)

  return (
    <>
      <StatusBar style='light' />

      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>

      <NavigationBar text={text} setText={setText} />
    </>
  )
}

const statusBarHeight = NativeModules.StatusBarManager.HEIGHT

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#232323',
  },
  text: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 100,
  },
})
