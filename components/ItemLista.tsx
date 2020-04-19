import * as React from 'react';
import { item } from '../model/item';
import { FlatList } from 'react-native-gesture-handler';
import { ItemUnico } from '../components/ItemUnico';

export const ItemLista = ( itens: item[] ) => (
    <FlatList 
      data={itens} 
      renderItem={({ item }) => ItemUnico(item)}/>
  );