import React, { useEffect, useState } from 'react';
import { NavBar, CardComponent } from './Components/index';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const { handleInitialData, filterDate } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const [stateDate, setstate] = useState([]);
  const [filter, setFilter] = useState([]);
  const [state, setDate] = useState('/');

  useEffect(() => {
    handleInitialData(setstate);
    filterDate(setFilter, state);
  }, [dispatch, state]);

  return (
    <div
      className='App'
      style={{
        color: '#fff',
        display: 'flex',
      }}
    >
      <NavBar setDate={setDate} />
      <div className='card'>
        {typeof filter !== typeof 'awd' && filter.length !== 0
          ? filter?.map((item, idx) => <CardComponent key={idx} date={item} />)
          : stateDate.length !== 0 &&
            stateDate.map((item, idx) => (
              <CardComponent key={idx} date={item} />
            ))}
      </div>
    </div>
  );
};

export default App;
