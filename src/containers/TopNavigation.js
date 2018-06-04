import React from 'react';
import TopMenu from '../components/top-menu';

class TopNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
      <div>
        <TopMenu onClick={ this.toggle } isOpen = { this.state.isOpen } />
      </div>
    );
  }
}

export default TopNavigation;