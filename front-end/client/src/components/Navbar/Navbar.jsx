import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar({user}) {
    return (
    <div className='navbar'>
        <div className='title'>
            <h1 className='title-text'>Realist Socialism</h1>
        </div>
        {user ?
            <div className='signin'>
                <h1 className='signin-text'>Log Out</h1>
            </div>
            :
            <div className='signin'>
                <h1 className='signin-text'>Sign In/Sign Up</h1>
            </div>
        }
        <div className='films-nav'>
            <h1 className='films-nav-text'>Films</h1>
        </div>
        <div className='posters-nav'>
            <Link to ='/posters'><h1 className='posters-nav-text'>Posters</h1></Link>
        </div>
    </div>
    )
}
