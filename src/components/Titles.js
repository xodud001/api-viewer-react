import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Item } from './Item';
import { createURL } from './Server'

function renderItem(data, onClick){
    return(
        <Item 
            key={data.pageId}
            value={data.title}
            onClick={ () => onClick(data.pageId)}
        />
    );
}

function Titles(props) {
    // const [pages, setPages] = useState(null);

    // useEffect( () => {
    //     const fetchPages = async () =>{
    //         try{
    //             setPages(null);
    
    //             const response = await axios.get(
    //                 createURL(`/titles`)
    //             );
    //             setPages(response.data);
    //         }catch(e){
    //             console.log(e)
    //         }
    //     }
        
    //     fetchPages();
    // }, []);

    // if(!pages) return null;
    
    if(!props.titles) return null;
    return(
        <ul>
            {props.titles.map( page => (
                renderItem(page, props.onClick)
            ))}
        </ul>
    );
}

export default Titles;