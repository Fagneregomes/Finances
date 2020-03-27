import React, { useRef } from 'react';
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
  const passwordRef = useRef();

  function handleSubmit() {}

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
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
        />

        <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="Senha"
          ref={passwordRef}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
        />

        <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>
      </Form>

      <SignLink onPress={() => navigation.navigate('SignUp')}>
        <SignLinkText>Criar conta</SignLinkText>
      </SignLink>
    </Container>
  );
}
