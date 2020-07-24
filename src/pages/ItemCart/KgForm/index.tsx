import React, { useState, useRef, useEffect } from 'react';

import { Text, View, TextInput } from 'react-native';

import Input from '../../../components/Input';
import formatValue from '../../../utils/formatValue';

interface CartForm {
  updatePrice: React.Dispatch<React.SetStateAction<number>>;
  updateQuantity: React.Dispatch<React.SetStateAction<number>>;
}
const KgForm: React.FC<CartForm> = ({ updatePrice, updateQuantity }) => {
  const [price, setPrice] = useState('');
  const [weight, setWeight] = useState('');

  const priceInputRef = useRef<TextInput>(null);
  const weightInputRef = useRef<TextInput>(null);

  useEffect(() => {
    updatePrice(Number(price) * Number(weight));
  }, [price, weight, updatePrice]);

  useEffect(() => {
    updateQuantity(Number(weight));
  }, [updateQuantity, weight]);

  return (
    <>
      <Text style={{ marginVertical: 10, marginLeft: 4 }}>Preço/kg</Text>

      <Input
        ref={priceInputRef}
        icon="dollar-sign"
        keyboardType="numeric"
        containerStyle={{ width: '80%' }}
        placeholder="6.99"
        onSubmitEditing={() => {
          weightInputRef.current?.focus();
        }}
        onChangeText={setPrice}
        value={price}
      />

      <Text style={{ marginVertical: 10, marginLeft: 4 }}>Peso</Text>

      <Input
        ref={priceInputRef}
        icon="anchor"
        keyboardType="numeric"
        containerStyle={{ width: '80%' }}
        placeholder="1.2"
        onSubmitEditing={() => {
          weightInputRef.current?.focus();
        }}
        onChangeText={setWeight}
        value={weight}
      />
    </>
  );
};

export default KgForm;
