import * as React from 'react';
import { Text, Image, View } from "react-native";
import { styles } from "../styles/Styles";
import { item } from '../model/item';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const ItemUnico = ( data: item ) => (
    <TouchableOpacity key={data.id} style={styles.row}>
        <View>
            <Text style={styles.textoItem}>{data.nome}</Text>
            <Text style={styles.textoItem}>{data.preco}</Text>
        </View>
        
        <Image style={styles.image} source={data.url} />
      </TouchableOpacity>
    );