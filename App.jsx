import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, NativeModules } from 'react-native'
import { NavigationBar } from './src/components/index'

export default function App() {
  const [text, setText] = useState(0)

  return (
    <>
      <StatusBar style='light' />

      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>

      <NavigationBar />
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
  },
  navBar: {
    height: '8%',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#333333',
  },
})
