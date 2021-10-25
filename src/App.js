
import './App.css';
import data from "./data.json"

import JobCard from './components/JobCard';


function App() {

  const jobData = data.jobs.slice(0,20)

  return (
    <div className="App">
      {
        jobData.map((el)=> <JobCard key={el.id}  data={el}/>)
      }
    </div>
  );
}

export default App;
