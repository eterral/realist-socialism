import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar({user, setUser}) {
    const logOut = () => {
        localStorage.clear()
        setUser(null)
    }
    return (
    <div className='navbar'>
        <div className='title'>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/"><h1 className='title-text'>Realist Socialism</h1></Link>
        </div>
        {user ?
            <div className='signin'>
                <Link onClick={logOut} style={{ textDecoration: 'none', color: 'white' }} to="/users"><h1 className='signin-text'>Log Out</h1></Link>
            </div>
            :
            <div className='signin'>
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/users"><h1 className='signin-text'>Sign In/Sign Up</h1></Link>
            </div>
        }
        <div className='films-nav'>
        <Link style={{ textDecoration: 'none', color: 'white' }} to='/films'><h1 className='films-nav-text'>Films</h1></Link>
        </div>
        <div className='posters-nav'>
            <Link style={{ textDecoration: 'none', color: 'black' }} to='/posters'><h1 className='posters-nav-text'>Posters</h1></Link>
        </div>
    </div>
    )
}
