import * as React from 'react';
import { View, Image } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { styles } from './styles/Styles';

import { Bebidas } from './routes/bebidas/Index';
import { Doces } from './routes/doces/Index';

export default function EmporioAzuki() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'bebidas', title: 'Bebidas' },
    { key: 'doces', title: 'Doces' },
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={styles.tab}
    />
  );

  const renderScene = SceneMap({
    bebidas: Bebidas,
    doces: Doces,
  });


  return (
    <View style={styles.body}>
      <Header
        // placement="left"
        containerStyle={styles.header}
        centerComponent={
          // { text: 'Empório Azuki', style: { color: '#fff'} }
          <Image style={styles.logo} source={require('./assets/emporio.png')} /> //}
        }
      />
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        tabBarPosition='bottom'
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={styles.tabInitial}
      />
    </View>
  );
}

