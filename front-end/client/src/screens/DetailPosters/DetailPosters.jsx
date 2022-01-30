import '../DetailPosters/DetailPoster.css'
import Layout from "../../components/Layout/Layout";
import { useParams, Link} from "react-router-dom";
import { useState, useEffect } from "react";
import { getPoster } from "../../services/posters";
import { getFilm } from "../../services/films";

export default function DetailPosters({user, setUser}) {
    const [poster, setPoster] = useState([]);
    const [film, setFilm] = useState([]);

    const params = useParams();

    useEffect(() => {
        const grabPoster = async () => {
        const resposter = await getPoster(params.id);
        const resfilm = await getFilm(resposter.film)
        setPoster(resposter);
        setFilm(resfilm)
        };
        grabPoster();
    }, [params.id]);

    return (
        <Layout user={user} setUser={setUser}x>
            <div className="detail-container">
                <div className="detail-img">
                    <img src={poster.image_url} />
                </div>
                <div className="detail-box">
                    <div className="detail-title">
                        <Link style={{ textDecoration: 'none' }} to={`film/${film.id}`}><a className='detail-text-black'>{poster.title}</a></Link >
                        <Link style={{ textDecoration: 'none' }} to={`film/${film.id}`}><a className='detail-text-black'>{film.title_en}</a></Link>
                    </div>
                    <div className="detail-info">
                        <a className='detail-text'>Year: {poster.year}</a>
                        <a className='detail-text'>Artist: {poster.artist}</a>
                    </div>
                </div>
            </div>
            <div className="detail-edit">
                <Link style={{ textDecoration: 'none' }} to={`/poster/edit/${poster.id}`}><a className='detail-text-black'>Edit</a> </Link>
            </div>
        </Layout>
    )
}
