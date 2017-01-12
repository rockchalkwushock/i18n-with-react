import React, { PropTypes } from 'react';
import { withTranslate } from 'react-redux-multilingual';

const styles = {
  root: {
    backgroundColor: '#6CAADE'
  }
};

const Page2 = ({ translate }) => (
  <div style={styles.root}>
    <h1>{translate('page2:header')}</h1>
    <p>{translate('page2:text1')}</p>
    <p>{translate('page2:text2')}</p>
  </div>
);

Page2.propTypes = {
  translate: PropTypes.func
};

export default withTranslate(Page2);
