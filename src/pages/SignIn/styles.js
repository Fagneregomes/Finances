import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled(LinearGradient).attrs({
  colors: ['#250048', '#583080'],
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
  font-size: 16px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-family: 'OpenSans-Regular';
  font-size: 16px;
`;
