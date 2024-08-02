import '../../global/global.css';
import './contact.css';
import SplineMiniRoomExample from '../../components/spline_scenes/spline_mini_room_example';

export default function Contact () {
    return (
        <div id="contact-me" className='SectionStyles'>
            <span className='SectionTitle'>Contact</span>
            <div className='ContactContainer'>
                <div className='ContactInfo'>
                    <h2>Let's Chat!</h2>  
                    <div className='GroupedInfo'>
                       <h3>Email Me</h3>
                       <a className="email" href="yamashige.sarah@gmail.com">yamashige.sarah@gmail.com</a>
                    </div>
                    <div className='GroupedInfo'>
                       <h3>Connect With Me</h3>
                       <a className="linkedin" href="www.linkedin.com/in/sarah-yamashige">linkedin.com/in/sarah-yamashige</a>
                    </div>
                    <div className='GroupedInfo'>
                       <h3>Call Me</h3>
                       <span className='phone'>(808) 214-0731</span>
                    </div>
                </div>
                <div className='ContactImageContainer'>
                    {/* <SplineMiniRoomExample/> */}
                </div>
            </div>
        </div>
    )
}