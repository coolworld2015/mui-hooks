import React, {useContext, useReducer, useState} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import Routes from './routes';

export const AppConfig = React.createContext();
export const AppContext = React.createContext();

const App = () => {
    const [item, setItem] = useState({name:'root', itemsCount:0, size:0});
    const setContextItem = ((item) => {
        return setItem(item);
    });

    return (
            <AppContext.Provider value={{item, setContextItem}}>
                <div>
                    <div>
                        <Header/>
                    </div>
                    <Router>
                        <Routes/>
                    </Router>
                </div>
            </AppContext.Provider>
    )
};

export default App;

const Header = () => {
    const {item, setContextItem} = useContext(AppContext);

    if (item.name === 'CoolEdit' && item.item !== undefined ) {
        return <div style={{padding: '20px', fontSize: '30px', textAlign: "center", position: 'fixed',
            width: '100%',
            background: 'white',
            marginTop:'-80px',
            border: '1px solid #cccc'}}>
            {item.item.trackName}

        </div>
    }

    return (
        <div style={{padding: '20px', fontSize: '30px', textAlign: "center", position: 'fixed',
            width: '100%',
            background: 'white',
            marginTop:'-80px',
            border: '1px solid #cccc'}}
            onClick={() => setContextItem({...item,...{name: 'Header', itemsCount: 0}})}
        >
            {item.name} ({item.itemsCount})
        </div>
    )
};
