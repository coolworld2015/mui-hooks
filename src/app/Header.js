import React, {useContext, useState} from 'react';
import {Redirect} from 'react-router-dom';
import {AppContext} from "./index";

const Header = () => {
    const {item, setContextItem} = useContext(AppContext);
    const [isClicked, setIsClicked] = useState(false);
    console.log('item - ', item)

    const clickHandler = (event) => {
        event.preventDefault();
        setContextItem({...item,...{name: 'Test', itemsCount: 0}});
        setIsClicked(true)
    };

    if (isClicked) {
        return <Redirect to="/test"/>
    }

    if (item.name === 'Cool' && item.item !== undefined ) {
        return <div style={{padding: '20px', fontSize: '30px', textAlign: "center", position: 'fixed',
            width: '100%',
            background: 'white',
            marginTop:'-80px',
            border: '1px solid #cccc'}}>
            {item.name} ({item.itemsCount})

        </div>
    }

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
             onClick={(e) => clickHandler(e)}
        >
            {item.name} ({item.itemsCount})
        </div>
    )
};

export default Header;