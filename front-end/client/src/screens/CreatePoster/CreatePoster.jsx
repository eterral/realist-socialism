import '../CreatePoster/CreatePoster.css'
import Layout from '../../components/Layout/Layout';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createPoster } from '../../services/posters';
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
            const grabFilms = async () => {
            const resfilms = await getFilms()
            setFilms(resfilms)
        };
        grabFilms();
    }, [params.id]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        await createPoster(poster)
        navigate('/posters/')
    }
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setPoster({
            ...poster,
            [name]: value
        })
    }

    return (
        <Layout>
                <form>
                    <div className='create-container'>
                    <div className='create-image'>
                        <img src={poster.image_url} />
                        <input
                            className="create-input"
                            placeholder="Image URL"
                            value={poster.image_url}
                            name="image_url"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div>
                        <div className='create-title'>
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
                        <div className='create-info-box'>
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
                    <div className='create-bottom'>
                        <button className='edit-button' onClick={(e) => handleSubmit(e)}>Add Poster</button>
                    </div>
                </form>
        </Layout>
    )
}
