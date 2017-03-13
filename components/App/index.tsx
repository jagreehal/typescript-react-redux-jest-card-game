import * as React from 'react'; 
import Main from '../../containers/Main';
import Buttons from '../../containers/Buttons';

const App = () => (
  <div className="h-100 w-100 pa2 absolute flex flex-column">
    <div className="mh-75">
    <Main />
    </div>
    <div className="mh-25 flex justify-center items-center">
    <Buttons />
    </div>
  </div>
);

export default App;
