import React from 'react';

import './App.css';
// import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Pofile';
import Dialogs from './Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <div className='app-wrapper'>
                <Route path='/dialogs' component={Dialogs}></Route>
                <Route path='/profile' component={Profile}></Route>
            </div>
        </BrowserRouter>

    );
};

export default App;
