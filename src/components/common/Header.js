// import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// make component
const Header = (props) => {
 const { textStyle, viewStyle } = styles;
 return (
    <View style={viewStyle}>
     <Text style={textStyle}>{props.headerText}</Text>
     </View>
  );
};

const styles = {
  viewStyle: {
  backgroundColor: '#F8F8F8',
  justifyContent: 'center',
  alignItems: 'center',
  height: 60,
  paddingTop: 5,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 3},
  shadowOpacity: 0.5,
  elevation: 2,
  position: 'relative'
  },
  textStyle: {
   fontSize: 20
  }
};

// make the component available to other files
export { Header} ;
