import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar history={this.props.history} />
        {this.props.children}
        <Footer />
      </div>
      //It will render one of the following components depending on the URL path: Home, Top 100, Profile or Add Character.
    );
  }
}

export default App;