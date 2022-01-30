import '../Users/Users.css'
import Signup from '../../components/Signup/Signup';
import SignIn from '../../components/Signin/Signin';
import Layout from '../../components/Layout/Layout';

export default function Users({setUser, user}) {
    return (
        <Layout user={user} setUser={setUser}>
        <div className='users'>
            <SignIn setUser={setUser}/>
            <Signup setUser={setUser}/>
        </div>
        </Layout>
    )
}
