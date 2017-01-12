import React from 'react';
import NavBar from './NavBar';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '80vh',
    flexDirection: 'column'
  }
};

const App = ({ children, location }) => (
  <div className='application'>
  <NavBar path={location.pathname} />
  <div  style={styles.root}>
    <h1>Hello World!</h1>
    <h2>This is a React + Redux Application.</h2>
    <h2>It will have multilingual views built into it!</h2>
    <section>
      {children}
    </section>
  </div>
  </div>
);

export default App;
