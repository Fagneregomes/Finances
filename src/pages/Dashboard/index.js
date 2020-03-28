import React from 'react';
import { Card } from 'react-native-paper';
import { TouchableOpacity, Alert } from 'react-native';
import IconSimples from 'react-native-vector-icons/SimpleLineIcons';

import { BakcgroundApp } from '~/components/Background';

import {
  Container,
  BorderIcon,
  AreaItem,
  AreaDetails,
  AreaValues,
  Category,
  Name,
  Value,
  Date,
} from './styles';

export default function Dashboard() {
  return (
    <BakcgroundApp>
      <Container>
        <Card>
          <Card.Title
            title="Contas em atraso"
            titleStyle={{ fontFamily: 'Sen-Bold' }}
          />
          <Card.Content>
            {[1, 2, 3, 4].map((item) => {
              return (
                <TouchableOpacity
                  key={item}
                  onPress={() => Alert.alert('teste', String(item))}>
                  <AreaItem>
                    <BorderIcon color="red">
                      <IconSimples name="people" size={20} />
                    </BorderIcon>

                    <AreaDetails>
                      <Category>Moradia</Category>
                      <Name>Conta de água de dados dlaps asdfa</Name>
                    </AreaDetails>

                    <AreaValues>
                      <Date>25/03/2020</Date>
                      <Value>R$ 150,89</Value>
                    </AreaValues>
                  </AreaItem>
                </TouchableOpacity>
              );
            })}
          </Card.Content>
        </Card>
      </Container>
    </BakcgroundApp>
  );
}
