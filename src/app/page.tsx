import Bootstrap from './components/xBootstrap'
import Logout from './components/Logout'
import Login from './components/Login'
import Signup from './components/Signup'
import UserGuide from './components/UserGuide'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <main>

      <Bootstrap />
      <Navbar />

      <div className="home">

        <div className="left">
            <h1>DEWEY DECIMAL SYSTEM</h1>
            <h5>Begin your journey towards Mastery!</h5>  
            <div className="userButtons">
              <Logout/> <Login/> <UserGuide/> <Signup/>
            </div>
        </div>

        <div className="right">
            <div><Link href="/activity_a"><button className="btn btn-secondary">Replacing Books</button></Link></div>
            <div><Link href="/activity_b"><button className="btn btn-success">Identifying Areas</button></Link></div>
            <div><Link href="/activity_c"><button className="btn btn-dark">Finding Call Numbers</button></Link></div>
        </div>
      </div>

      <Footer />

    </main>
  )
}