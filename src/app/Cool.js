import React, {useContext, useEffect, useState} from "react";
import {Redirect} from 'react-router';
import {AppContext} from "./index";
import Avatar from '@mui/material/Avatar';

const Cool = () => {
    const [data, setData] = useState([]);
    const [text, setText] = useState('REST API');
    //const URL = 'http://ui-base.herokuapp.com/api/users/get';
    //const URL = 'https://itunes.apple.com/search?media=&term=cool';
    const {item, setContextItem} = useContext(AppContext);

    useEffect(() => {
        //setContextItem({...item,...{name: 'Cool'}});
        setData([]);
        console.log('searchText - ', item.searchText)
        fetch('https://itunes.apple.com/search?media=&term=' + item.searchText, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then(response => {
                console.log(response.results);
                setData(response.results);
                setContextItem({...item,...{name: 'Cool',
                        itemsCount: response.results.length}});
            })
            .catch((error) => {
                console.log('error ' + error);
            })
    }, [item.searchText]);

    console.log('data - ', data)

    let loading = null;

    if (data.length < 1 || data === undefined) {
        loading = <h3>Loading...</h3>
    }

    return (
        <>
            <div style={{
                fontSize: 34,
                textAlign: "center",
                marginTop:'80px',
            }}>
{/*                {text}
                <br/>
                <input value={text} onChange={(e) => setText(e.target.value)}/>
                <hr/>*/}
                {loading}

                {
                    data.map(user => (
                            <User user={user} key={user.trackId}/>
                        )
                    )}
            </div>
        </>
    )
};

const User = ({user}) => {
    const [isClicked, setIsClicked] = useState(false);
    const {item, setContextItem} = useContext(AppContext);

    const clickHandler = (event) => {
        event.preventDefault();
        setContextItem({...item,...{name: 'Cool', item: user}});
        setIsClicked(true)
    };

    if (isClicked) {
        return <Redirect to="/cool_edit"/>
    }

    return (
        <div style={{padding: '20px', marginTop:'0px', border: '1px solid #cccc'}}
             onClick={(e) => clickHandler(e)}>
            <img
                src={user.artworkUrl100.replace('100x100bb.jpg', '500x500bb.jpg')}
                width="189" height="255"
            />
            <br/>
            {user.trackName} - {user.releaseDate.split('-')[0]} - {user.primaryGenreName}

        </div>
    )
};

export default Cool;
