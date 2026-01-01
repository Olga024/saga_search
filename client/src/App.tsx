import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { searchSkills } from './actions';
import { ResultsList } from './ResultsList';
import type { TState } from './reducer';

function App() {
  const dispatch = useDispatch();

  const hasSearched = useSelector((state: TState) => state.hasSearched);
  const skills = useSelector((state: TState) => state.skills);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const value = event.target.elements.skill.value.trim();
    if (value.length > 0) {
      dispatch(searchSkills(value));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="skill">
          Search Skills:
          <input type="text" id="skill" placeholder="Type something to search..." />
        </label>
        <button type="submit">Search</button>
      </form>
      {!hasSearched && <p>Type something to search...</p>}
      {hasSearched && skills.length === 0 && <p>No matching skills found.</p>}
      {hasSearched && skills.length > 0 && <ResultsList />}
    </div>
  )
}

export default App
