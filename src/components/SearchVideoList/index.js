import { useEffect, useState } from 'react';
import VideoList from '../VideoList';
import styles from './SearchVideoList.module.css';
import Loader from '../Loader';

function SearchVideoList({ videos }){
    const [searchText, setSearchText] = useState("");
    const foundVideos = filterVideos(videos, setSearchText);

    const [ loading, setLoading ] = useState(true);
    useEffect(()=>{
        setTimeout(()=> setLoading(false), 500)
    }, [])

    function filterVideos(videos, setSearchText){
        return videos.filter((video)=>video.category.includes(searchText) || video.title.includes(searchText))
    }

    return (
        <section className={ styles.container }>
            <input 
            type='search' 
            placeholder='Pesquisar...'
            value={ searchText }
            onChange={ event => setSearchText(event.target.value) } />
            {   
                loading ? <Loader /> :
                <VideoList 
                    videos={ foundVideos } 
                    emptyHeading={`Sem vídeos sobre "${ searchText }"`}
                />
            }
        </section>
    );
}
export default SearchVideoList;