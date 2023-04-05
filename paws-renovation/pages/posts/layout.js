import NavMenu from './NavMenu'
import '../styles/Profile.css'

export default function Layout({ children }) {
  return (
    <>
    <div>
    
    <NavMenu />
        <div className='back_drop'>
            <main>{children}</main>
        </div>
    </div>
    </>
  )
}