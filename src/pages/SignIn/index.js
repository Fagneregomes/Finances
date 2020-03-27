import React from 'react';
import { Image } from 'react-native';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn({ navigation }) {
  return (
    <Container>
      <Image source={require('~/assets/img/Logo.png')} />

      <Form>
        <FormInput
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="E-mail"
        />

        <FormInput icon="lock-outline" secureTextEntry placeholder="Senha" />

        <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
      </Form>

      <SignLink onPress={() => navigation.navigate('SignUp')}>
        <SignLinkText>Criar conta</SignLinkText>
      </SignLink>
    </Container>
  );
}
