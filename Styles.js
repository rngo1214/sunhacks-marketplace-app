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
    loginPage: {
      paddingTop: Expo.Constants.statusBarHeight,
      flex: 1,
      backgroundColor: 'grey',
      alignItems: 'center'
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
      backgroundColor: '#fff',
      marginTop: 30,
      alignItems: 'center',
      alignContent: 'center',
      padding: 10,
    },
    //Card styles
    //I think the default font size is 14 but I'm not 100% sure
    card: {
        flex: 1,
        width: width - (width /20),
        padding: 10,
        backgroundColor: 'grey',
        alignContent: 'center',
        justifyContent: 'center',
    },
    cardRow: {
      color: '#fff',
    },
    cardColumn: {
      color: '#fff',
    },
    cardAuthor: {
      color: '#fff',
      fontStyle: 'italic',
      fontSize: 14,
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
    cardBudget: {
      color: '#fff',
      fontStyle: 'italic',
      fontSize: 14,
    },
    cardDuration: {
      color: '#fff',
      fontStyle: 'italic',
      fontSize: 14,
    },
    cardText: {
      color: '#fff',
    }
  });