
import './App.css';
import './Components/Tasks'
import Task from './Components/Tasks';

function App() {
  return (
    <div className="container">
     <h1>Tasky!</h1>
     <Task title = 'Dishes' deadline = 'today' description = 'Empty dishwasher'/>
     <Task title="Laundry" deadline="Tomorrow" description = 'Fold Laundry and put away' > 
     Fold and put laundry away.
     </Task>
     <Task title="Tidy" deadline="Today" description = 'Clean room' />
    </div>
  );
}

export default App;
