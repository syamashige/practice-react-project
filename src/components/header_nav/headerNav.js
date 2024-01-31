import './headerNav.css'

function HeaderNav () {
    return (
        <nav>
            <ul>
                <li className='listItem'><a href='#test-section-1'>Test1</a></li>
                <li className='listItem'><a href='#test'>Hello World</a></li>
                <li className='listItem'><a href='#test-section-2'>Test2</a></li>
            </ul>
        </nav>
    )
}

export default HeaderNav;