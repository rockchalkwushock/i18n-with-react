import React, { PropTypes } from 'react';
import { withTranslate } from 'react-redux-multilingual'
import { browserHistory } from 'react-router';
import { Menu } from 'semantic-ui-react';

const NavBar = ({ path, translate }) => (
    <Menu>
        <Menu.Menu>
          <Menu.Item
            onClick={() => browserHistory.push('/')}
          >
            {translate('navbar:header')}
          </Menu.Item>
        </Menu.Menu>
          <Menu.Menu position='right'>
            <Menu.Item
              active={path === '/page1'}
              onClick={() => browserHistory.push('/page1')}
            >
              {translate('navbar:page1')}
            </Menu.Item>
            <Menu.Item
              active={path === '/page2'}
              onClick={() => browserHistory.push('/page2')}
            >
              {translate('navbar:page2')}
            </Menu.Item>
          </Menu.Menu>
    </Menu>
  );

NavBar.propTypes = {
  path: PropTypes.string.isRequired,
  translate: PropTypes.func
};

export default withTranslate(NavBar);
