import '../styles/contact.css';
import Socials from './Socials';

const Contact = () => {


  return (
    <section id='contact' className='container'>
      <h2 className='title center-text'>Contact Me</h2>

      <div className='content'>
        <p className='center-text mono'>Reach me at..</p>

        <Socials />
      </div>

      <form action="https://formsubmit.co/7503d3f238af50b32140ca84c1a71d4b" method='POST' className='container'>
        <p className='center-text mono'>Or leave a message and I will get back to you</p>
        <div className='container column'>
          <input required type="email" name="email" id="mail" placeholder='Please enter your email' className='input mono' />
          <textarea required name="message" id="message" cols="30" rows="10" placeholder='Type your message here' className='input mono'></textarea>
          <button type='submit' className='btn scale'>Send</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
