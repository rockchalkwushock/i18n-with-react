import React, { PropTypes } from 'react';
import { withTranslate } from 'react-redux-multilingual';

const styles = {
  root: {
    backgroundColor: '#DEC66C'
  }
};

const Page1 = ({ translate }) => (
  <div style={styles.root}>
    <h1>{translate('page1:header')}</h1>
    <p>{translate('page1:text')}</p>
  </div>
);

Page1.propTypes = {
  translate: PropTypes.func
};

export default withTranslate(Page1);
