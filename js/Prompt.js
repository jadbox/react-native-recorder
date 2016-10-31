import React, { Component, Dimensions } from 'react';
import {
  StyleSheet,
      View,
      Text
} from 'react-native';
import PDFView from 'react-native-pdf-view';
import RNFS from 'react-native-fs';
//import Icon2 from 'react-native-vector-icons/FontAwesome';
// import { Container, Content, Card, CardItem, Text, Icon } from 'native-base';

const pdfDownloadURL = 'http://image.tianjimedia.com/imagelist/2009/190/caq4z56jadof.pdf';
//var width = Dimensions.get('window').width;

export default class Prompt extends Component {
    constructor(props) {
        super(props);
        this.state={
            isPdfDownload: false
        };
        this.pdfView = null;
        this.pdfPath = RNFS.DocumentDirectoryPath + '/test.pdf'
    }

    componentDidMount() {
        RNFS.downloadFile({ fromUrl:pdfDownloadURL, toFile:this.pdfPath }).promise.then(res => {
            this.setState({isPdfDownload: true});
        }).catch(err => {
            console.log(err);
        });
    }

    zoom(val = 2.1){
        this.pdfView && setTimeout(()=>{
            this.pdfView.setNativeProps({zoom: val});
        }, 3000);
    }

    render(){
        const nav = this.props.navigator;

        if (!this.state.isPdfDownload){
            return (
                <View style={styles.container}>
                    <Text>Downloading</Text>
                </View>
            );
        }
        return (
            <PDFView ref={(pdf)=>{this.pdfView = pdf;}}
                     key="sop"
                     path={this.pdfPath}
                     onLoadComplete = {(pageCount)=>{
                        console.log(`total page count: ${pageCount}`);
                        //this.zoom();
                     }}
                     style={styles.pdf}/>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pdf: {
        flex:1
    }
});
