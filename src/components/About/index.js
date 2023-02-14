import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from "react";
import Loader from 'react-loaders'
import LogoS from '../../assets/images/my-project-2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';



const About = () =>{

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

    return (
        <>
        <div  className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                {/* <img src={LogoS} alt='myself' className='myself-logo'/> */}
                <p>
                    Prasad Joshi is an ambitious individual who is passionate about exploring new opportunities and pushing boundaries. 
                    
                </p>
                <p>
                    He is a creative thinker, problem solver, and an excellent communicator. He is quitely confident and naturally curious.
                </p>
                <p>
                    Prasad is a quick learner who is never afraid to take on new challenges and has a strong work ethic.
                </p>
                <p>
                    He is always looking for ways to be more efficient and productive. Prasad has a knack for seeing the big picture and a great eye for detail,
                </p>
                <p>
                    He is a great listener, always willing to lend an ear and provide constructive feedback when needed.
                </p>
                <img src={LogoS} alt="sticker" className='myself-logo'/>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5Ed4F4"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </> 
    )
}

export default About;