import Video from '../assets/video.webm'
function AboutPage(){
    return(<div className='apage'>
        {/* Пара предложений о себе */}
        <video id="bannerVideo" autoPlay muted loop>
          <source src={Video} type="video/mp4" />
        </video>
        
        </div>)
}
export default AboutPage