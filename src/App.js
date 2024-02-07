import './App.css';
import Card from './card/card';
import SelectColor from './color selector/Select_color';
import Counter from './counter/counter';

function App() {

  return (
    <div className="App">
      
       
      <h1 className="bg-red-300 text-black p-4 m-20 rounded-md font-serif">HEllo World</h1>
      <Counter/>
      <Card/>
      <SelectColor/>
    </div>
  );
}

export default App;
