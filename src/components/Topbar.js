import React, {Component} from 'react';
import TopbarLogo from './TopbarLogo';
import TopbarNav from './TopbarNav';

class Topbar extends Component {
  render() {
    return (
      <header className="page-topbar">
        <div className="navbar-fixed topnav">
          <nav className="white">
            <div className="nav-wrapper">
              <TopbarLogo />
              <TopbarNav />
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Topbar;
