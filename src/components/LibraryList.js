import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  componentWillMount(){
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

     this.dataSource = ds.cloneWithRows(this.props.libraries);

  }

  renderRow(library) {
     return <ListItem library={library} />;
  }

  render() {
     return(
        <ListView
          dataSource={this.dataSource}
          renderRow={this.renderRow}
          />
     );
  }
}

// go get me the state so I can have it as props for the component
const mapStateToProps = state => {
  return { libraries: state.libraries };
};
// connect is fired here just as the component is about to render to find the state
// passes the requested state to the component as a property. this is how data gets from
// the provider(store) to the individual components when we have many different states.
export default connect(mapStateToProps)(LibraryList);
