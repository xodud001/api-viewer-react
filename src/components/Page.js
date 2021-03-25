import React, {useState, useEffect} from 'react';
import axios from 'axios';


function Page() {
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
                    'http://localhost:9999/pages'
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
                <li key={page.id}>
                    {page.title} ({page.description})
                </li>
            ))}
        </ul>
    );
}

export default Page;