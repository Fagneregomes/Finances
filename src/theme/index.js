import { DefaultTheme, configureFonts } from 'react-native-paper';

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'open-sans-regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'open-sans-regular',
    },
    light: {
      fontFamily: 'open-sans-light',
    },
    thin: {
      fontFamily: 'open-sans-regular',
      fontWeight: 'normal',
    },
  },
};

export default {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  colors: {
    ...DefaultTheme.colors,
    primary: '#250048',
    accent: '#f9386a',
    text: '#222',
  },
};
