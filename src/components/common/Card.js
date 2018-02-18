// basic import lines to setup the react frameworks.
import React from 'react';
import { View } from 'react-native';

// the functional component
const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
 containerStyle: {
   borderWidth: 1,
   borderRadius: 15,
   borderColor: '#ddd',
   borderBottomWidth: 0,
   shadowColor: '#000',
   shadowOffset: { width: 0, height:2 },
   shadowOpacity: 0.2,
   shadowRadius: 15,
   elevation: 1,
   marginLeft: 5,
   marginRight: 5,
   marginTop: 10
 }
};

// this is set to the title of the component.
export { Card };