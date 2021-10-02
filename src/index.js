import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import {DataLayer} from './DataLayer';
import reducer, {initialState} from './reducer'



ReactDOM.render(
    <DataLayer initialState={initialState}  reducer={reducer}>           {/* DataLayer is also called StateProvider and it has 3parts: initialState and a Reducer*/}
        <App />
    </DataLayer>, 
    document.getElementById('root')
);


