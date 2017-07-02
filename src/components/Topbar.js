import React, {Component} from 'react';
import {Dropdown, Menu, Container} from 'semantic-ui-react';

class Topbar extends Component {
  render() {
    return (
      <Menu attached="top" inverted size="large" className="topbar">
        <Container>
          <Menu.Item header>
            Kenk&#333;
          </Menu.Item>
          <Menu.Menu position="right">
            <Dropdown item text="Go To">
              <Dropdown.Menu>
                <Dropdown.Item text="Journal" icon="list layout" />
                <Dropdown.Item text="Recipes" icon="book" />
                <Dropdown.Item text="Reports" icon="bar chart" />
                <Dropdown.Divider />

                <Dropdown.Item icon="user" text="Your Profile" />
                <Dropdown.Item icon="setting" text="Your Settings" />
                <Dropdown.Divider />
                <Dropdown.Item icon="sign out" text="Logout" />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

export default Topbar;
