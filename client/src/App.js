import './App.css';
import { createContext, useState } from 'react';
import FileForm from './common/FileForm';
import LatestImage from './common/LatestImage';


export const AppContext = createContext(null)

function App() {
  const [latestImage, setLatestImage] = useState(AppContext)

  return (
    <AppContext.Provider value={{latestImage, setLatestImage}} >
      <div className="App">
        <FileForm/>
        <LatestImage/>
      </div>
    </AppContext.Provider>
   
  );
}

export default App;
