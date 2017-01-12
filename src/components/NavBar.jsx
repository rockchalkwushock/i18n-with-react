import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Menu } from 'semantic-ui-react';

const NavBar = ({ path }) => (
    <Menu>
        <Menu.Menu>
          <Menu.Item
            onClick={() => browserHistory.push('/')}
          >
            Multilingual React + Redux
          </Menu.Item>
        </Menu.Menu>
          <Menu.Menu position='right'>
            <Menu.Item
              active={path === '/page1'}
              onClick={() => browserHistory.push('/page1')}
            >
              Page 1
            </Menu.Item>
            <Menu.Item
              active={path === '/page2'}
              onClick={() => browserHistory.push('/page2')}
            >
              Page 2
            </Menu.Item>
          </Menu.Menu>
    </Menu>
  );

NavBar.propTypes = {
  path: PropTypes.string.isRequired
};

export default NavBar;
