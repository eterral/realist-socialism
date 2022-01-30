import '../CreateFilm/CreateFilm.css'
import Layout from '../../components/Layout/Layout';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createFilm } from '../../services/films';

export default function CreatFilm({user, setUser}) {
    const [film, setFilm] = useState({
        title: '',
        title_en: '',
        nationality: '',
        description: '',
        posters: [],
    });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        await createFilm(film)
        navigate(`/films/`)
    }
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setFilm({
            ...film,
            [name]: value
        })
    }

    return (
        <Layout user={user} setUser={setUser}>
                <form>
                    <div className='edit-film-container'>
                        <div className='edit-film-title'>
                            <input
                                className="edit-input"
                                placeholder="Film Title"
                                value={film.title}
                                name="title"
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className='edit-film-title-black'>
                            <input
                                    className="edit-input-black"
                                    placeholder="English Film Title"
                                    value={film.title_en}
                                    name="title_en"
                                    onChange={(e) => handleChange(e)}
                                />
                        </div>
                        <div className='edit-country-box'>
                            <input
                                className="edit-input"
                                placeholder="Country"
                                value={film.nationality}
                                name="nationality"
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className='edit-film-description'>
                            <textarea
                                className="edit-input-description"
                                placeholder="Description"
                                value={film.description}
                                name="description"
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                    </div>
                    <div className='edit-bottom'>
                        <button className='edit-button' onClick={(e) => handleSubmit(e)}>Add Film</button>
                    </div>
                </form>
        </Layout>
    )
}