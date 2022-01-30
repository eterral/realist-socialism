import '../DisplayPosters/DisplayPosters.css'
import Search from '../../components/Search/Search';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosters } from '../../services/posters';
import Layout from '../../components/Layout/Layout';

export default function DisplayPosters() {
    const [posters, setPosters] = useState([]);
    const [searchedPosters, setSearchedPosters] = useState([]);

    useEffect(() => {
        const grabPosters = async () => {
        const res = await getPosters();
        setPosters(res);
        setSearchedPosters(res);
    };
    grabPosters();
    }, []);

    const handleSearch = (e) => {
        const results = posters.filter((poster) =>
        poster.title.toLowerCase().includes(e.toLowerCase())
        );
        setSearchedPosters(results);
    };

    const handleSubmit = (e) => e.preventDefault();

    return (
        <Layout>
            <div>
                <div className='search-container'>
                    <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
                </div>
                <div className='search-results'>
                    {searchedPosters.map((poster) => {
                        return(
                            <div className='image-container'>
                                <Link to={`detail/${poster.id}`}><img src={poster.image_url} /></Link>
                            </div>
                        );
                    })}
                    {searchedPosters.length % 2 == 1 ? 
                    <div className='extra-div'></div> :
                    <div></div>}
                </div>
            </div>
        </Layout>
    )
}
