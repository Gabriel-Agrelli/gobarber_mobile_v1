import React, { useState } from 'react';
import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import Button from '~/components/Button';
import { RectButton } from 'react-native-gesture-handler';

export default function TechList() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    console.log('clicou!!!!!!!!!!!!!!!!!');
    setTechs([...techs, newTech]);
    setNewTech('');
  }

  return (
    <View>
      <FlatList
        data={techs}
        keyExtractor={tech => tech}
        renderItem={({ item }) => <Text>{item}</Text>}
      />

      <TextInput
        testID="tech-input"
        value={newTech}
        onChangeText={setNewTech}
      />

      {/* <TouchableOpacity onPress={handleAdd}>
        <Text>Adicionar</Text>
      </TouchableOpacity> */}

      <RectButton testID="botao" onPress={handleAdd}>
        <Text>Adicionar</Text>
      </RectButton>
    </View>
  );
}
