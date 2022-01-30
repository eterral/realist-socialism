import '../DisplayFilms/DisplayFilms.css'
import Search from '../../components/Search/Search';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getFilms } from '../../services/films';
import Layout from '../../components/Layout/Layout';

export default function DisplayFilms({user, setUser}) {
    const [films, setFilms] = useState([]);
    const [searchedFilms, setSearchedFilms] = useState([]);

    useEffect(() => {
        const grabFilms = async () => {
        const res = await getFilms();
        setFilms(res);
        setSearchedFilms(res);
    };
    grabFilms();
    }, []);

    const handleSearch = (e) => {
        const results = films.filter((film) =>
        film.title_en.toLowerCase().includes(e.toLowerCase())
        );
        setSearchedFilms(results);
    };

    const handleSubmit = (e) => e.preventDefault();

    return (
        <Layout user={user} setUser={setUser}>
            <div>
                <div className='search-container'>
                    <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
                </div>
                <div className='search-films-results'>
                    {searchedFilms.map((film) => {
                        return(
                            <div className='search-films-container'>
                                <Link style={{ textDecoration: 'none', color: 'black' }} to={`detail/${film.id}`}>
                                    <p>{film.title}</p>
                                    <p>{film.title_en}</p>
                                </Link>
                            </div>
                        );
                    })}
                    {searchedFilms.length % 2 == 1 ? 
                    <div className='extra-films-div'></div> :
                    <div></div>}
                </div>
            </div>
        </Layout>
    )
}
