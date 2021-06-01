import React from 'react';
import './App.css';
import {Main} from "./components/Main";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {BrowserRouter, Route} from "react-router-dom";
import {Drink} from "./components/Drink";
import {Ingredient} from "./components/Ingredient";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Provider store={store}>
                    <Route exact path={'/'} render={() => <Main/>}/>
                    <Route path={'/drink/:id'} render={() => <Drink/>}/>
                    <Route path={'/ingredient/:name'} render={() => <Ingredient/>}/>
                </Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
