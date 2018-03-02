
import React from 'react';
import { render } from 'react-dom';
import {Switch,Route} from 'react-router-dom';
import routes from '../shared/routes';

const  App = ()=>(
        <Switch>
            {routes.map((route,i) => {
              return  <Route key ={i} {...route}/>
            })}
        </Switch>
)

// const App = () => {
//     return (
//         <Switch>
//             {routes.map((route, i) => <Route key={i} {...route} />)}
//         </Switch>
//     );
// };


export default App;


