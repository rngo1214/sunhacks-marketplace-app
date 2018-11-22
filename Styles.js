//StyleSheet component allows for creation of css-like stylesheets
//Dimensions component gets the screen dimensions of the current device
import { StyleSheet, Dimensions } from 'react-native';

//Declared width and height variables to work with
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
//To be implemented later for easy app-wide consistent color scheme
var primaryColor;
var secondaryColor;

export default StyleSheet.create({
    //Page styles
    screen:{
      paddingTop: Expo.Constants.statusBarHeight + 44,
      paddingBottom: 48,
      backgroundColor: '#fff',
      height: height
    },
    header:{
      width: width,
      height: Expo.Constants.statusBarHeight + 44,
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderBottomColor: '#eee',
      borderBottomWidth: 1,
      justifyContent: 'space-around',
      padding: 7,
      paddingTop: Expo.Constants.statusBarHeight + 7,
      position: 'absolute',
      zIndex: 1
    },
    headerText:{
      fontSize: 30,
    },
    loginPage: {
      flex: 1,
      paddingTop: Expo.Constants.statusBarHeight,
      backgroundColor: 'teal',
      alignItems: 'center'
    },
    createPage: {
      flex: 1,
      paddingTop: Expo.Constants.statusBarHeight,
      backgroundColor: 'teal',
      alignItems: 'center'
    },
    searchBar:{
      backgroundColor: '#ddd',
      width: width * 4 / 5 + 10,
      height: 30,
      borderRadius: 15,
      paddingLeft: 15,
      paddingRight: 5
    },

    //Component styles
    title: {
      flex: 1,
      color: '#fff',
      marginTop: 20,
      marginBottom: 0,
      fontSize: 24,
      fontWeight: 'bold',
    },
    //Terrible name, to change later
    whiteText: {
      flex: 1,
      color: '#fff',
      marginTop: 20,
      marginBottom: 0,
      fontSize: 20,
      fontWeight: 'bold',
    },
    redText: {
      flex: 1,
      color: '#f99',
      marginTop: 20,
      marginBottom: 0,
      fontSize: 25,
      fontWeight: 'bold',
    },
    linkText: {
      fontWeight: 'bold',
      color: '#fff'
    },
    textField: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'space-evenly',
      textAlign: 'center',
      width: width - (width / 10),
      borderWidth: 1,
      borderColor: 'grey'
    },
    loginButton: {
      backgroundColor: 'teal',
      borderColor: '#fff',
      borderWidth: 1,
      marginTop: 30,
      alignItems: 'center',
      alignContent: 'center',
      padding: 10,
      width: width /2,
    },
    loginText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    //Card styles
    //I think the default font size is 14 but I'm not 100% sure
    cardContainer: {
      marginTop: 5,
      marginBottom: 5,
      alignItems: 'center',
    },
    card: {
        flex: 1,
        width: width - (width /20),
        padding: 10,
        backgroundColor: 'teal',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    cardTitle: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 18,
    },
    cardDescription: {
      color: '#fff',
      fontSize: 16,
      marginTop: 3,
      marginBottom: 3,
    },
    cardSubtext: {
      color: '#fff',
      fontStyle: 'italic',
      fontSize: 14,
    },
    cardText: {
      color: '#fff',
    },
    //Chat
    chatContainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    flexChat: {
      flex: 3,
      backgroundColor: '#fff',
      width: width,
    },
    chatBox: {
      flex: 1,
      backgroundColor: 'maroon',
      alignContent: 'center',
      padding: 10,
      borderRadius: 10,
      margin: 5,
    },
    messageInputField: {
      backgroundColor: '#ddd',
      width: width * 4 / 5 + 5,
      borderRadius: 15,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 5,
      paddingBottom: 5,
      fontSize: 16
    },
    sendMessageButton: {
      width: width / 5 - 25,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    sendMessageText: {
      color: 'maroon',
      fontSize: 16,
      fontWeight: 'bold'
    }
  });
