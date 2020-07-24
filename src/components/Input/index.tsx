import React, {
  useState,
  useImperativeHandle,
  useRef,
  forwardRef,
} from 'react';

import { Feather as Icon } from '@expo/vector-icons';
import { TextInput, TextInputProps, Keyboard } from 'react-native';

import { Component, InputButton } from './styles';

interface InputProps extends TextInputProps {
  containerStyle?: {};
  icon: string;
  onSubmitEditing?: () => void;
  onButtonPress?: () => void;
  rotate?: boolean;
}

interface InputRef {
  focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
  { icon, containerStyle, onSubmitEditing, rotate, ...rest },
  ref
) => {
  const inputElementRef = useRef<TextInput>(null);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current?.focus();
    },
  }));

  return (
    <Component style={containerStyle}>
      <TextInput
        ref={inputElementRef}
        onSubmitEditing={onSubmitEditing || Keyboard.dismiss}
        style={{
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          borderWidth: 1,
          borderRightWidth: 0,
          borderColor: '#554fa0',
          flex: 1,
          padding: 8,
        }}
        {...rest}
      />

      <InputButton onPress={() => {}}>
        {rotate ? (
          <Icon
            name={icon}
            size={16}
            color="#f7f7fe"
            style={{ transform: [{ rotate: '90deg' }] }}
          />
        ) : (
          <Icon name={icon} size={16} color="#f7f7fe" />
        )}
      </InputButton>
    </Component>
  );
};

export default forwardRef(Input);
