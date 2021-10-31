import React, { useEffect } from 'react';
import { NavBar, CardComponent } from './Components/index';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';
import { RootState } from './state';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const { getDate } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    getDate();
  }, []);

  const state = useSelector((state: RootState) => state.date);
  console.log(state);

  return (
    <div
      className='App'
      style={{
        color: '#fff',
        display: 'flex',
      }}
    >
      <NavBar />
      <div>{/* <CardComponent /> */}</div>
    </div>
  );
};

export default App;
