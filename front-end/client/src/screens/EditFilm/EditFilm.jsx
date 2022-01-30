import '../EditFilm/EditFilm.css'
import Layout from '../../components/Layout/Layout';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFilm, updateFilm, deleteFilm } from '../../services/films';

export default function EditPoster({user, setUser}) {
    const [film, setFilm] = useState({
        title: '',
        title_en: '',
        nationality: '',
        description: '',
    });

    const params = useParams();

    const navigate = useNavigate();

    useEffect(() => {
            const grabFilm = async () => {
            const res = await getFilm(params.id)
            setFilm(res)
        };
        grabFilm();
    }, [params.id]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        await updateFilm(params.id, film)
        navigate(`/films/detail/${params.id}`)
    }
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setFilm({
            ...film,
            [name]: value
        })
    }

    const handleDelete = async (e) => {
        e.preventDefault()
        await deleteFilm(params.id)
        navigate(`/films/`)
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
                                    name="title"
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
                        <button className='edit-button' onClick={(e) => handleSubmit(e)}>Edit</button>
                        <button className='edit-button' onClick={(e) => handleDelete(e)}>Delete</button>
                    </div>
                </form>
        </Layout>
    )
}