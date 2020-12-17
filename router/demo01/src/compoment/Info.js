import React, { Component } from 'react';
class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>Info Page  === {this.state.id} </div>
     );
  }
  componentDidMount() {
    console.log(this.props.match)
    let tempId = this.props.match.params.id
    this.setState({id: tempId})

  }
}
 
export default Info;