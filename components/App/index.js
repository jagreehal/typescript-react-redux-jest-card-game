import * as React from 'react';
import Main from '../../containers/Main';
import Buttons from '../../containers/Buttons';
const App = () => (React.createElement("div", { className: "h-100 w-100 pa2 absolute flex flex-column" },
    React.createElement("div", { className: "mh-75" },
        React.createElement(Main, null)),
    React.createElement("div", { className: "mh-25 flex justify-center items-center" },
        React.createElement(Buttons, null))));
export default App;
//# sourceMappingURL=index.js.map