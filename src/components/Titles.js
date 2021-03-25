import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Item } from './Item';
import { render } from '@testing-library/react';

function renderItem(data){
    return(
        <Item 
            value={data.title}
            id={data.id}
        />
    );
}

function Titles() {
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
                    'http://localhost:9999/titles'
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
                renderItem(page)
            ))}
        </ul>
    );
}

export default Titles;