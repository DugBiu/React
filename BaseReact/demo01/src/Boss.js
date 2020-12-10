import React, { Component } from 'react';
import './boss.css'
import { CSSTransition} from 'react-transition-group'


class Boss extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isShow: false
    }
    this.toToggole = this.toToggole.bind(this)
  }
  render() { 
    return ( 
      <div>
        {/* <div className={ this.state.isShow ? 'show' : 'hidden'}>Boss级任务 - 孙悟空</div>
        <div >Boss级任务 - 孙悟空</div> */}
        <CSSTransition
          in={this.state.isShow}
          timeout={2000}
          classNames="boss-text"
          unmountOnExit
        >
          <div >Boss级任务 - 召唤猪八戒 </div>
        </CSSTransition>
        <div>
          <button onClick={this.toToggole}>召唤BOSS</button>
        </div>
      </div>
    );
  }
  toToggole() {
    this.setState({
      isShow: !this.state.isShow
    })
  }
}
 
export default Boss;