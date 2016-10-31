import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';
//import Icon2 from 'react-native-vector-icons/FontAwesome';
import { Container, Content, Card, CardItem, Text, Icon } from 'native-base';

export default class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  render() {
    const nav = this.props.navigator;

    return (
      <Container style={{padding: 100}}>
                <Content>
                    <Card>
                        <CardItem onPress={ () => nav.push({id:'EULA'}) }>
                            <Icon name='ios-info' />
                            <Text>EULA</Text>
                        </CardItem>
                        <CardItem onPress={ () => nav.push({id:'record'}) }>
                            <Icon name='ios-mic' />
                            <Text>Why Cry?</Text>
                        </CardItem>
                        <CardItem>
                            <Icon name='logo-google' />
                            <Text>Google</Text>
                        </CardItem>
                   </Card>
                </Content>
      </Container>
   );
  }
}
/*
export default MainMenu = (props) => {
    const navigator = props.navigator;

    return (
      <View>
        <TouchableHighlight onPress={() => {
          if (route.index === 0) {
            navigator.push(routes[1]);
          } else {
            navigator.pop();
          }
        }}>
        <Text>Hello!</Text>
      </TouchableHighlight>
    </View>
  );
}
*/
