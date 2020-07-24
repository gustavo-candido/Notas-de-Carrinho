import React, { useState, useRef, useEffect } from 'react';

import { Text, View, TextInput } from 'react-native';

import Input from '../../../components/Input';

interface CartForm {
  updatePrice: React.Dispatch<React.SetStateAction<number>>;
}
const UnitForm: React.FC<CartForm> = ({ updatePrice }) => {
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const priceInputRef = useRef<TextInput>(null);
  const quantityInputRef = useRef<TextInput>(null);

  useEffect(() => {
    updatePrice(Number(price) * Number(quantity));
  }, [price, quantity, updatePrice]);

  return (
    <>
      <Text style={{ marginVertical: 10, marginLeft: 4 }}>Preço</Text>
      <Input
        ref={priceInputRef}
        icon="dollar-sign"
        keyboardType="numeric"
        containerStyle={{ width: '80%' }}
        placeholder="R$ 6,99"
        onSubmitEditing={() => {
          quantityInputRef.current?.focus();
        }}
        onChangeText={setPrice}
        value={price}
      />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '80%',
          marginTop: 10,
        }}
      >
        <Text style={{ marginLeft: 4 }}>Quantidade</Text>

        <Input
          ref={quantityInputRef}
          icon="plus"
          keyboardType="numeric"
          containerStyle={{ width: '35%' }}
          placeholder="1"
          value={quantity}
          onChangeText={setQuantity}
        />
      </View>
    </>
  );
};

export default UnitForm;
