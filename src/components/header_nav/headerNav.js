import './headerNav.css'

function HeaderNav () {
    return (
        <nav className='NavStyle'>
            <ul className='ListStyle'>
                <li><a className='ListItemStyle' href='#welcome'>Welcome</a></li>
                <li><a className='ListItemStyle' href='#about-me'>About</a></li>
                <li><a className='ListItemStyle' href='#background'>Background</a></li>
                <li><a className='ListItemStyle' href='#projects'>Projects</a></li>
                <li><a className='ListItemStyle' href='#contact-me'>Contact</a></li>
            </ul>
        </nav>
    )
}

export default HeaderNav;