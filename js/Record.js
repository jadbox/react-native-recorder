import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';
//import Icon2 from 'react-native-vector-icons/FontAwesome';
import { Container, Content, Card, CardItem, Text, Icon } from 'native-base';
import {AudioRecorder, AudioUtils} from 'react-native-audio';

export default class Record extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};

    let audioPath = '/sdcard/test.aac';
    AudioRecorder.prepareRecordingAtPath(audioPath, {
      SampleRate: 22050,
      Channels: 1,
      AudioQuality: "Low",
      AudioEncoding: "aac"
    });
  }
  record() {
    console.log('recording');

    AudioRecorder.startRecording();
  }
  recordStop() {
    console.log('recordStop');
    AudioRecorder.stopRecording();
  }
  render() {
    const nav = this.props.navigator;

    return (
      <Container>
                <Content>
                    <Card>
                        <CardItem onPress={()=>this.record()}>
                            <Icon name='ios-mic' style={{fontSize: 64, color: 'red'}}/>
                            <Text style={{fontSize: 42, color: 'black'}}>Record</Text>
                        </CardItem>

                        <CardItem onPress={()=>this.recordStop()}>
                            <Icon name='ios-pause' style={{fontSize: 64, color: 'red'}}/>
                            <Text style={{fontSize: 42, color: 'black'}}>Stop</Text>
                        </CardItem>

                        <CardItem onPress={()=>nav.pop()}>
                            <Icon name='ios-home' style={{fontSize: 64}}/>
                            <Text style={{fontSize: 24, color: 'black'}}>Back to Main</Text>
                        </CardItem>
                   </Card>
                </Content>
      </Container>
   );
  }
}
