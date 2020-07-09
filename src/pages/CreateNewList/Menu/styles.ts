import styled from 'styled-components/native';

export const Component = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  background: rgba(122, 122, 122, 0.1);
  flex-direction: column;
`;

export const MenuWrapper = styled.View`
  margin-top: 40px;
  background: #f7f7fe;
  align-self: flex-end;
`;

export const MenuOption = styled.TouchableOpacity`
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #d7d7d9;
`;

export const MenuOptionText = styled.Text``;
