import '../styles/headline.css';
import wave from '../assets/wave.png';
import comp from '../assets/comp.svg';

const Headline = () => (
  <section className='container'>
    <div id='contain' className='flex column-row'>
      <div className='column flex about'>
        <div className='flex'>
          <div className='wave'>
            <img src={wave} />
          </div>
          <h4>Hello, I am</h4>
        </div>
        <h1 className='name'>Toma</h1>
        <p className='green-text'>&lt;&gt; A full stack developer &lt;/&gt;</p>
      </div>

      <div>
        <img src={comp} />
      </div>
    </div>
  </section>
);

export default Headline;