import '../home/Home.css'
import Layout from '../../components/Layout/Layout';
import { useEffect, useState } from 'react';
import { getPosters } from '../../services/posters';

export default function Home({user}) {
    const [posters, setPosters] = useState([]);

    useEffect(() => {
        const grabPosters = async () => {
        const res = await getPosters();
        setPosters(res[Math.floor(Math.random() * (res.length - 1))])
    };
    grabPosters();
    }, []);

    return (
        <Layout user={user}>
            <div className='home'>
                <div className='home-info'>
                    <p className='home-info-text'>Film in Central Eastern Europe was one of the only areas where  writers, musicians, and artists could publically dissent. Realist Socialism is a database of films and their posters from that era.</p>
                    <br/>
                    <p className='home-info-text'> Learn more.</p>
                </div>
                <div className='random-poster'>
                    <img src={posters.image_url} />
                </div>
            </div>
        </Layout>
    )
}

