import React, { useState, useMemo, useCallback } from 'react';

import { Text, ScrollView, TouchableOpacity, View } from 'react-native';

import {
  Component,
  Modal,
  Unit,
  FooterButton,
  Footer,
  ButtonText,
} from './styles';

import formatValue from '../../utils/formatValue';

import UnitForm from './UnitForm';

const ItemCart: React.FC = () => {
  const units = ['unid.'];
  const [currentUnit, setCurrentUnit] = useState('unid.');
  const [price, setPrice] = useState(0);

  const formattedPrice = useMemo(() => formatValue(price), [price]);

  const CurrentForm = useCallback(() => {
    switch (currentUnit) {
      case 'unid.':
        return <UnitForm updatePrice={setPrice} />;

      default:
        break;
    }
  }, [currentUnit]);

  return (
    <Component>
      <Modal>
        <View style={{ padding: 10 }}>
          <Text>Farofa pronta Yoki</Text>
          <Text>{formattedPrice}</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 10 }}
          >
            {units.map((unit) => (
              <TouchableOpacity
                onPress={() => {
                  setCurrentUnit(unit);
                }}
                key={unit}
              >
                <Unit selected={unit === currentUnit}>{unit}</Unit>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {CurrentForm()}
        </View>

        <Footer>
          <FooterButton
            style={{
              borderBottomLeftRadius: 10,
              borderRightWidth: 1,
              borderRightColor: '#C4C4C4',
            }}
            underlayColor="#675FD3"
            onPress={() => {}}
          >
            <ButtonText>Voltar</ButtonText>
          </FooterButton>

          <FooterButton
            style={{ borderBottomRightRadius: 10 }}
            underlayColor="#675FD3"
            onPress={() => {}}
          >
            <ButtonText>Adicionar ao carrinho</ButtonText>
          </FooterButton>
        </Footer>
      </Modal>
    </Component>
  );
};

export default ItemCart;
