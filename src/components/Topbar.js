import React, {Component} from 'react';
import {Dropdown, Menu} from 'semantic-ui-react';

class Topbar extends Component {
  render() {
    return (
      <Menu attached="top" className="topbar">
        <Menu.Item header>Kenk&#333;</Menu.Item>
        <Menu.Item name="Journal" link />
        <Menu.Item name="Recipes" link />
        <Menu.Item name="Reports" link />
        <Menu.Menu position="right">
          <Dropdown item text="Profile">
            <Dropdown.Menu>
              <Dropdown.Item icon="user" text="Profile" />
              <Dropdown.Item icon="setting" text="Settings" />
              <Dropdown.Divider />
              <Dropdown.Item icon="sign out" text="Logout" />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Topbar;
