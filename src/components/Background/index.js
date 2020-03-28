import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const BakcgroundSign = styled(LinearGradient).attrs({
  colors: ['#00b0c2', '#00e19c'],
})`
  flex: 1;
`;

export const BakcgroundApp = styled(LinearGradient).attrs({
  colors: ['#FFF', 'rgba(0, 225, 156, 0.2)'],
})`
  flex: 1;
`;
