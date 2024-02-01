import '../../global/global.css';

export default function Contact () {
    return (
        <div id="contact-me" className='SectionStyles'>
            <span className='SectionTitle'>Contact</span>
            {/* <h1>Contact Me</h1> */}
            <div className='AltSectionGrid'>
                <div className='SectionColumnGridAlt'>
                    <h2 >Let's Chat!</h2>
                    <div className='GroupedInfo'>
                       <h3>Email Me</h3>
                       <a className="email" href="yamashige.sarah@gmail.com">yamashige.sarah@gmail.com</a>
                    </div>
                    <div className='GroupedInfo'>
                       <h3>Connect With Me</h3>
                       <a className="email" href="yamashige.sarah@gmail.com">yamashige.sarah@gmail.com</a>
                    </div>
                    <div className='GroupedInfo'>
                       <h3>Call Me</h3>
                       <a className="email" href="yamashige.sarah@gmail.com">yamashige.sarah@gmail.com</a>
                    </div>
                </div>
                <div className='SectionColumnGridTwo'>
                    
                </div>
            </div>
        </div>
    )
}