import React, { useState, useMemo, useCallback } from 'react';

import {
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';

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
import KgForm from './KgForm';

interface ItemCartProps {
  product: string;
  closeModal: () => void;
}

const ItemCart: React.FC<ItemCartProps> = ({ product, closeModal }) => {
  const units = ['unid.', 'kg'];
  const [currentUnit, setCurrentUnit] = useState('unid.');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const formattedPrice = useMemo(() => formatValue(price), [price]);

  const motion = useState(new Animated.Value(0))[0];

  React.useEffect(() => {
    Animated.timing(motion, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  }, [motion]);

  const CurrentForm = useCallback(() => {
    switch (currentUnit) {
      case 'unid.':
        return <UnitForm updatePrice={setPrice} updateQuantity={setQuantity} />;

      case 'kg':
        return <KgForm updatePrice={setPrice} updateQuantity={setQuantity} />;

      default:
        break;
    }
  }, [currentUnit]);

  return (
    <Component>
      <Animated.View
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: motion.interpolate({
            inputRange: [0, 1],
            outputRange: [0.4, 1],
          }),
          transform: [
            {
              translateY: motion.interpolate({
                inputRange: [0, 1],
                outputRange: [100, 0],
              }),
            },
          ],
        }}
      >
        <Modal>
          <View style={{ padding: 10 }}>
            <Text>{product}</Text>
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
                zIndex: 15,
              }}
              underlayColor="#675FD3"
              onPress={closeModal}
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
      </Animated.View>
    </Component>
  );
};

export default ItemCart;
