import '../../global/global.css';
import SplineMiniRoomExample from '../../components/spline_scenes/spline_mini_room_example.js';

export default function Welcome () {
    return (
        <div id="welcome" className='SectionStyles'>
            <span className='SectionTitle'>Welcome</span>
            <div className='AltSectionGrid'>
                <div className='SectionColumnGridAlt'>
                    {/* <h1>Welcome</h1> */}
                    {/* <span>Placeholder</span> */}
                </div>
                <div className='SectionColumnGridTwo'>
                    {/* <span>Placeholder</span> */}
                </div>
            </div>
        </div>
    )
}