import React from 'react';
import style from './App.module.scss';
import {Main} from "./components/Main";
import {Route, NavLink} from "react-router-dom";
import {Drink} from "./components/Drink";
import {Ingredient} from "./components/Ingredient";
import styles from './style/Container.module.scss'
import {SearchDrink} from "./components/SearchDrink";
import {SearchResults} from "./components/SearchResults";

function App() {
    return (
        <div>
            <header className={style.header}>
                <div className={styles.container}>
                    <NavLink to={'/'}><img src="https://www.thecocktaildb.com/images/logo.png" alt=""/></NavLink>
                    <SearchDrink />
                </div>
            </header>
            <div className={styles.container}>
                <Route exact path={'/'} render={() => <Main/>}/>
                <Route path={'/drink/:id'} render={() => <Drink/>}/>
                <Route path={'/ingredient/:name'} render={() => <Ingredient/>}/>
                <Route path={'/SearchResults'} render={() => <SearchResults/>}/>
            </div>
        </div>
    )
}

export default App;
