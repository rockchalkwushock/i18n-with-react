import React, { Component, PropTypes } from 'react';
import { IntlActions } from 'react-redux-multilingual';
import { store } from '../redux/store';
import { withTranslate } from 'react-redux-multilingual';
import { Flag } from 'semantic-ui-react';
import NavBar from './NavBar';

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }
};

class App extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    const { children, location, translate } = this.props;
    return (
      <div className='application'>
        <NavBar
        path={location.pathname}
        translate={translate}
         />
        <div  className='content' style={styles.root}>
        <div>
           <Flag name='us' onClick={() => store.dispatch(IntlActions.setLocale('en'))} />
          <Flag name='ru' onClick={() => store.dispatch(IntlActions.setLocale('ru'))} />
        </div>

          <h1>{translate('header:main')}</h1>
          <h2>{translate('header:second')}</h2>
          <h2>{translate('header:third')}</h2>
          <section>
            {children}
          </section>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  childern: PropTypes.element,
  location: PropTypes.object,
  translate: PropTypes.func
};

export default withTranslate(App);