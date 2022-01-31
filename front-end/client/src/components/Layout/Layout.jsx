import '../Layout/Layout.css'
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"


export default function Layout (props) {
    return (
        <div className = "layout"> 
            <Navbar className='nav' user={props.user} setUser={props.setUser}/>
            <div className = "layout-children">
                {props.children}
            </div>
            <Footer className='foot'/>
        </div>
    )
}