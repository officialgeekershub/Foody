import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const IconButton = ({icon, onPress, color}) => {
  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
      <Icon name={icon} size={24} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7
  }
})

export default IconButton;
