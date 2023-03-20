import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import Navigation from './components/Navigation.js'
import { useState } from 'react';

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1>Jake's Exercise Table</h1>
          <p>
            I don't actually exercise ON the table, it just keeps track...
          </p>
          <nav>
            <Navigation></Navigation>
          </nav>
        </header>
        <main>
          <Route path="/" exact>
            <HomePage setExerciseToEdit={setExerciseToEdit} />
          </Route>
          <Route path="/add-exercise">
            <AddExercisePage />
          </Route>
          <Route path="/edit-exercise">
            <EditExercisePage exerciseToEdit={exerciseToEdit} />
          </Route>
        </main>
        <footer>
          &copy; 2022 Jacob Moore
        </footer>

      </Router>
    </div>
  );
}

export default App;