import './App.css';
import { createContext, useState } from 'react';
import FileForm from './common/FileForm';
import LatestImage from './common/LatestImage';
import PropertyImage from './common/PropertyImage';


export const AppContext = createContext(null)

function App() {
  const [latestImage, setLatestImage] = useState(AppContext)

  return (
    <AppContext.Provider value={{latestImage, setLatestImage}} >
      <div className="App">
        <FileForm/>
        <LatestImage/>

      <PropertyImage/>
      </div>
    </AppContext.Provider>
   
  );
}

export default App;
