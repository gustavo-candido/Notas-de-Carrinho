import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface UnitProps {
  selected: boolean;
}

export const Component = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.View`
  background: #f7f7fe;
  width: 90%;
  border-radius: 10px;
`;

export const Unit = styled.Text<UnitProps>`
  font-family: 'NunitoSans_400Regular';
  border: 2px solid #554fa0;
  background: ${(props) => (props.selected ? '#554fa0' : 'transparent')};
  color: ${(props) => (props.selected ? '#f7f7fe' : '#000')};
  margin: 8px;
  padding: 5px 8px;
  border-radius: 5px;
  text-align: center;
  min-width: 70px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const FooterButton = styled.TouchableHighlight`
  background: #857edc;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
`;

export const ButtonText = styled.Text`
  font-family: 'NunitoSans_400Regular';
  color: #f7f7fe;
  font-size: 18px;
  max-width: 100px;
  text-align: center;
`;
