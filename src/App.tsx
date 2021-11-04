import React from 'react';
import './App.css';
import Board from './Board';
import BoardList from './BoardList';

const App: React.FC = () => {
  return (
    <div className="App">
      <BoardList />
      <Board />
    </div>
  );
};

export default App;
