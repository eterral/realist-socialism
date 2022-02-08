import '../DetailFilm/DetailFilm.css'
import Layout from "../../components/Layout/Layout";
import { useParams, Link} from "react-router-dom";
import { useState, useEffect } from "react";
import { getPosters } from "../../services/posters";
import { getFilm } from "../../services/films";

export default function DetailPosters({user, setUser}) {
    const [poster, setPoster] = useState([]);
    const [film, setFilm] = useState([]);

    const params = useParams();

    useEffect(() => {
        const grabFilm = async () => {
        const resposter = await getPosters();
        const resfilm = await getFilm(params.id)
        const postersort = resposter.filter(poster => {return poster.title === resfilm.title})
        setPoster(postersort);
        setFilm(resfilm)
        };
        grabFilm();
    }, [params.id]);

    return (
        <Layout user={user} setUser={setUser}>
            <div className="detail-film-container">
                <div className="detail-film-title">
                    <div className='film-title'>
                        <p>{film.title}</p>
                    </div>
                    <div className='film-title-black'>
                        <p>{film.title_en}</p>
                    </div>
                </div>
                <div className="film-detail-box">
                    <div className="film-title">
                        <p>Country: {film.nationality}</p>
                    </div>
                    <div className="film-detail">
                        <p>{film.description}</p>
                    </div>
                </div>
                <div className='film-posters'>
                {poster.map((poster) => {
                        return(
                            <div className='image-container'>
                                <Link to={`detail/${poster.id}`}><img src={poster.image_url} /></Link>
                            </div>
                        );
                    })}
                    {poster.length % 2 == 1 ? 
                    <div className='extra-div'>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to='/films/create/'><p className='film-title'>Add a Poster</p></Link>
                    </div> :
                    <div>

                        </div>}
                </div>
            </div>
            <div className="detail-edit">
                {user ?
                <Link style={{ textDecoration: 'none' }} to={`/film/edit/${film.id}`}><p className='detail-text-black'>Edit</p> </Link> :
                <Link style={{ textDecoration: 'none' }} to={`/users/`}><p className='detail-text-black'>Login to Edit</p></Link>}
            </div>
        </Layout>
    )
}