import '../home/Home.css'
import Layout from '../../components/Layout/Layout';
import { useEffect, useState } from 'react';
import { getPosters } from '../../services/posters';
import { Link } from 'react-router-dom';

export default function Home({user, setUser}) {
    const [posters, setPosters] = useState([]);

    useEffect(() => {
        const grabPosters = async () => {
        const res = await getPosters();
        setPosters(res[Math.floor(Math.random() * (res.length - 1))])
    };
    grabPosters();
    }, []);

    return (
        <Layout user={user} setUser={setUser}>
            <div className='home'>
                <div className='home-info'>
                    <p className='home-info-text'>Film in Central Eastern Europe was one of the only areas where  writers, musicians, and artists could publically dissent. Realist Socialism is a database of films and their posters from that era.</p>
                    <br/>
                    <p className='home-info-text'> Learn more.</p>
                </div>
                <div className='random-poster'>
                    <img src={posters.image_url} />
                </div>
            </div><div className='create-home-container'>
                <div className='create-home-film'>
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/films/create/'><p>Add Film</p></Link>
                </div>
                <div className='create-home-poster'>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/poster/create"><p>Add Poster</p></Link>
                </div>
            </div>
        </Layout>
    )
}

