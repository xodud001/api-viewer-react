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
    const [pages, setPages] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect( () => {
        const fetchPages = async () =>{
            try{
                setError(null);
                setPages(null);
    
                setLoading(true);
    
                const response = await axios.get(
                    createURL(`/titles`)
                );
                setPages(response.data);
            }catch(e){
                setError(e);
            }
            setLoading(false);
        }
        
        fetchPages();
    }, []);

    if(loading) return(
        <div>로딩중...</div>
    );
    if(error) return(
        <div>에러 발생</div>
    );
    if(!pages) return null;

    return(
        <ul>
            {pages.map( page => (
                renderItem(page, props.onClick)
            ))}
        </ul>
    );
}

export default Titles;