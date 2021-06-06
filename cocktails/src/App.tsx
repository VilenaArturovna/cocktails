import React from 'react';
import style from './App.module.scss';
import {Main} from "./components/Main/Main";
import {Route, NavLink} from "react-router-dom";
import {Drink} from "./components/Drink/Drink";
import {Ingredient} from "./components/Ingredient/Ingredient";
import styles from './style/Container.module.scss'
import {SearchDrink} from "./components/Search/SearchDrink";
import {SearchResults} from "./components/Search/SearchResults";
import {List} from "./components/List/List";

function App() {
    return (
        <div className={style.app}>
            <header className={style.header}>
                <div className={styles.container}>
                    <NavLink to={'/'}><img src="https://www.thecocktaildb.com/images/logo.png" alt=""/></NavLink>
                    <SearchDrink />
                </div>
            </header>
            <div className={styles.container}>
                <Route exact path={'/'} render={() => <Main/>}/>
                <Route path={'/cocktails/drink/:id'} render={() => <Drink/>}/>
                <Route path={'/cocktails/ingredient/:name'} render={() => <Ingredient/>}/>
                <Route path={'/cocktails/SearchResults'} render={() => <SearchResults/>}/>
                <Route path={'/cocktails/lists/:list'} render={() => <List/>}/>
            </div>
        </div>
    )
}

export default App;
