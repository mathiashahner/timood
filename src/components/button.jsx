import React, { useState } from 'react'
import { Text, StyleSheet, TouchableHighlight } from 'react-native'

export const Button = ({ onPress, title }) => {
  const [isPress, setIsPress] = useState(false)

  const touchProps = {
    activeOpacity: 1,
    underlayColor: '#282828',
    style: isPress ? styles.button : styles.button,
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => onPress(),
  }

  return (
    <TouchableHighlight {...touchProps}>
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: '#232323',
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#ffffff',
  },
})
