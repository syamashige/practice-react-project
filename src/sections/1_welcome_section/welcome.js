import '../../global/global.css';
import './welcome.css';
import SplineMiniRoomExample from '../../components/spline_scenes/spline_mini_room_example.js';

// export default function Welcome () {
//     return (
//         <div id="welcome" className='SectionStyles'>
//             <span className='SectionTitle'>Welcome</span>
//             <div className='AltSectionGrid'>
//                 <div className='SectionColumnGridAlt'>
//                     <div className='NameTitle'>
//                         <h1 className='NameHeader'>Sarah Yamashige</h1>
//                     </div>
//                 </div>
//                 <div className='SectionColumnGridTwo'>
//                     <SplineMiniRoomExample/>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default function Welcome () {
    return (
        <div id="welcome" className='SectionStyles'>
            <span className='SectionTitle'>Welcome</span>
            <div className='WelcomeContainer'>
                <div className='NameHeaderContainer'>
                    <div className='NameTitle'>
                        <h1 className='NameHeader'>Sarah Yamashige</h1>
                    </div>
                </div>
                <div className='HeroImageContainer'>
                    <SplineMiniRoomExample/>
                </div>
            </div>
        </div>
    )
}