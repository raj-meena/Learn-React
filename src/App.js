import React from 'react';
import BasicComponent from './components/BasicComponent';
import StateExample from './components/StateExample';
import PropsExample from './components/PropsExample';
import EffectExample from './components/EffectExample';
import FormExample from './components/FormExample';
import ThemeExample from './components/ThemeExample';
import RouterExample from './components/RouterExample/RouterExample';
import ReduxExample from './components/ReduxExample/ReduxExample';
import QueryExample from './components/QueryExample/QueryExample';
import PerformanceExample from './components/PerformanceExample/PerformanceExample';
import AdvancedExample from './components/AdvancedExample/AdvancedExample';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>React Learning Examples</h1>
        <div className="component-container">
          <BasicComponent />
          <StateExample />
          <PropsExample />
          <EffectExample />
          <FormExample />
          <ThemeExample />
          <RouterExample />
          <ReduxExample />
          <QueryExample />
          <PerformanceExample />
          <AdvancedExample />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
