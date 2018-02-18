// basic import lines to setup the react frameworks.
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// the functional component change the name to the file name
const Button = (props) => {
// this line applies the styling to the component
    const { buttonStyle, textStyle } = styles;
// must return some form of JSX
  return (
    <TouchableOpacity onPress={props.onPress} style={buttonStyle}>
      <Text style={textStyle}>{props.children}</Text>
    </TouchableOpacity>
  );

};

// styling goes here
const styles = {
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 2,
    marginRight: 2
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

// remember to change this to title of the component This line makes it available to import in other parts
// of the app
export { Button };