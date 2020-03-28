import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0, 175, 194, 0.80)',
})`
  flex: 1;
  font-size: 15px;
  font-family: 'OpenSans-Regular';
  margin-left: 10px;
  color: #00b0c2;
`;
