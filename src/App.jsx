import React from 'react';
import Person from './Components/NestedComponent/Person';
import Message from './Components/NestedComponent/Message';
import Card from './Components/Card/Card';

const App = () => {
  return (
    <>
      <Person/>
      <Message/>
      <Card/>
    </>
  );
};

export default App;