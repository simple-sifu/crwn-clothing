import React from 'react';
import { Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import './App.css';


const TopicsList = () => {
  return (
    <div>
      <h1>TOPIC LIST PAGE</h1>
    </div>
  )
};

const TopicsDetail = () => {
  return (
    <div>
      <h1>TOPIC DETAIL PAGE</h1>
    </div>
  )
};
const HatsPage = () => {
  return (
    <div>
      <h1>HATS Page</h1>
    </div>
  )
};


const App = () => {
  return (
    <div>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
        <Route exact path='/topics' component={TopicsList} />
        <Route path='/topics/:topicId' component={TopicsDetail} />

    </div>

  )

}


export default App;
