import '../EditPoster/EditPoster.css'
import Layout from '../../components/Layout/Layout';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPoster, updatePoster, deletePoster } from '../../services/posters';
import { getFilms } from '../../services/films';

export default function EditPoster() {
    const [films, setFilms] = useState([])
    const [poster, setPoster] = useState({
        image_url: '',
        title: '',
        year: '',
        artist: '',
        film: '',
    });

    const params = useParams();

    const navigate = useNavigate();

    useEffect(() => {
            const grabPoster = async () => {
            const resposter = await getPoster(params.id);
            const resfilms = await getFilms()
            setPoster(resposter);
            setFilms(resfilms)
        };
        grabPoster();
        console.log(films);
    }, [params.id]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        await updatePoster(params.id, poster)
        navigate(`/posters/detail/${params.id}`)
    }
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setPoster({
            ...poster,
            [name]: value
        })
    }

    const handleDelete = async (e) => {
        e.preventDefault()
        await deletePoster(params.id)
        navigate(`/posters/`)
    }

    return (
        <Layout>
                <form>
                    <div className='edit-container'>
                    <div className='edit-image'>
                        <img src={poster.image_url} />
                        <input
                            className="edit-input"
                            placeholder="Image URL"
                            value={poster.image_url}
                            name="image_url"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div>
                        <div className='edit-title'>
                            <input
                                    className="edit-input-black"
                                    placeholder="Poster Title"
                                    value={poster.title}
                                    name="title"
                                    onChange={(e) => handleChange(e)}
                                />
                            <select name='film' className='edit-selector' onChange={(e) => handleChange(e)}>
                                <option className='edit-option' >Film Title</option>
                                {films &&
                                films.map((film) => {
                                    return <option className='edit-option' value={film.id}>{film.title_en}</option>
                                })}
                            </select>
                        </div>
                        <div className='edit-info-box'>
                            <input
                                className="edit-input"
                                placeholder="Poster Year"
                                value={poster.year}
                                name="year"
                                onChange={(e) => handleChange(e)}
                            />
                            <input
                                className="edit-input"
                                placeholder="Poster Artist"
                                value={poster.artist}
                                name="artist"
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                    </div>
                    </div>
                    <div className='edit-bottom'>
                        <button className='edit-button' onClick={(e) => handleSubmit(e)}>Edit</button>
                        <button className='edit-button' onClick={(e) => handleDelete(e)}>Delete</button>
                    </div>
                </form>
        </Layout>
    )
}
