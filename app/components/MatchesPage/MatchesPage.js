import React from 'react';
import {
  View,
  TouchableHighlight,
  Image,
  Text
} from 'react-native';
import { createStackNavigator } from "react-navigation";
import { observer, inject } from 'mobx-react'
import { FlatList } from 'react-native';
import { MatchCard } from '../MatchCard/MatchCard';
import hamburgerButton from '../../../assets/images/hamburgerButton.png';
import { PRIMARY_GREEN } from '../../styles';
import styles from './styles';
import backArrow from '../../../assets/images/backArrow.png';

@inject('store')
@observer
class MatchesPage extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "City Pups",
    headerStyle: {
      backgroundColor: PRIMARY_GREEN
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
      fontFamily: 'DancingScript-Bold',
      fontSize: 25
    },
    headerRight: (
      <TouchableHighlight>
        <Image
          source={hamburgerButton}
          style={styles.hamburgerButton}
        />
      </TouchableHighlight>
    ),
    headerLeft: (
      <TouchableHighlight
        underlayColor={PRIMARY_GREEN}
        onPress={() => {
          navigation.navigate('RoommateQuestionPage');
        }}
      >
        <Image style={styles.backArrowButton} source={backArrow} />
      </TouchableHighlight>
    )
  });

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Best Matches</Text>
        </View>
        <View style={styles.listView}>
          <FlatList data={[{name: 'Jim', breed: 'Cat'}, {name: 'Sam', breed: 'golden'}]}
            renderItem={({item}) => <MatchCard data={item}/> }
            keyExtractor={(item, index) => index.toString()} 
            style={styles.listItem}/>
        </View>
      </View>
    )
  }
}

export default createStackNavigator({
  CityPups: {
    screen: MatchesPage
  },
}
);