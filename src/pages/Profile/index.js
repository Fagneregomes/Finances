import React from 'react';
import { Text } from 'react-native';

import { BakcgroundApp } from '~/components/Background';

import { Container } from './styles';

export default function Profile() {
  return (
    <BakcgroundApp>
      <Container>
        <Text>Profile</Text>
      </Container>
    </BakcgroundApp>
  );
}
