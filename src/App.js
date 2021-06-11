import React,{ useState } from 'react'
import { data } from './Data'

const App = () => {

  const [movies, setMovies] = useState(data)
  
  return (
    <div>
      <data/>
    </div>
  );
}

export default App;
