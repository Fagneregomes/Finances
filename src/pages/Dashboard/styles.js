import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin: 3px 10px 0 10px;
`;

export const AreaItem = styled.View`
  padding: 5px;

  flex-direction: row;
`;

export const BorderIcon = styled.View`
  border: 1px solid;
  border-radius: 25px;
  width: 45px;
  height: 45px;
  margin-right: 10px;
  border-color: ${({ color = 'green' }) => color};

  align-items: center;
  justify-content: center;
`;

export const AreaDetails = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
`;

export const AreaValues = styled.View`
  justify-content: center;
  align-items: flex-end;
`;

export const Category = styled.Text`
  color: rgba(0, 0, 0, 0.8);
  font-size: 12px;
  font-family: 'OpenSans-Light';
`;

export const Name = styled.Text`
  color: rgba(0, 0, 0, 0.8);
  font-family: 'OpenSans-Regular';
`;

export const Date = styled.Text`
  color: rgba(0, 0, 0, 0.8);
  font-size: 12px;
  font-family: 'OpenSans-Light';
`;

export const Value = styled.Text`
  color: rgba(0, 0, 0, 0.8);
  font-family: 'OpenSans-Bold';
`;
