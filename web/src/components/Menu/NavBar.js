import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../Menu/style.css'
import logo from '../../assets/images/logo.png'

export default function Navbar() {

const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);
  
const Links =[
    {name:"Home", link:"/"},
    {name:"Sobre", link:"/About"},
    {name:"Projetos", link:"/Projects"},
    {name:"Contato", link:"/Contact"},
]

  return (
    <>
    <header>
        <nav>

        <div>
            <NavLink end to='/' className="nav-logo">
                <img src={logo}/>
            </NavLink>
        </div>
          
        <div className={click ? 'nav-menu active' : 'nav-menu'}>
            {Links.map((Link)=>(
                <NavLink className='link' onClick={()=>handleClick()} key={Link.link} end to={Link.link}>
                    {({ isActive }) => (
                    <span  className={isActive ? 'nav-links active' : 'nav-links'}>
                        {Link.name}
                    </span>
                )}
                </NavLink>     
            ))} 
        </div>

        <div className='content_toggle'>
            <button onClick={()=>handleClick()}
                className={(click) ? 'toggle active'  : 'toggle'} >
            </button>
        </div>

        </nav>
    </header>
    </>
  )
}


