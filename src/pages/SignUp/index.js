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

export default function SignUp({ navigation }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit() {}

  return (
    <Container>
      <Image source={require('~/assets/img/Logo.png')} />

      <Form>
        <FormInput
          icon="person-outline"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Nome Completo"
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current.focus()}
        />

        <FormInput
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="E-mail"
          ref={emailRef}
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

      <SignLink onPress={() => navigation.navigate('SignIn')}>
        <SignLinkText>Já tenho uma conta</SignLinkText>
      </SignLink>
    </Container>
  );
}
