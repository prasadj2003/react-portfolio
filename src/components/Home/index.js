import LogoTitle from '../../assets/images/logo-s-2.png';
import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from "react";
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';



const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    // const nameArray = ['p', 'r', 'a', 'a', 'd']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'] 

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m&nbsp;</span>
                Pra<img src={LogoTitle} alt="developer" />ad
                <br />
                <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={22}
                />
                {/* web developer */}
                </h1>
                <h2>FrontEnd developer / Truthseeker / algorithms fanatic</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type='pacman'/>
        </>
    );
}

export default Home;


// const Home = () => {
//     const [letterClass, setLetterClass] = useState('text-animate')
//     const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

//     useEffect(() => {
//         return setTimeout(() => {
//             setLetterClass('text-animate-hover')
//         }, 4000)
//     }, [])


//     return(
//         <div className="container home-page">
//             <div className="text-zone">
//                 <h1>
//                 <span className={letterClass}>H</span> 
//                 <span className={`${letterClass} _12`} >i,</span>
//                 <br />
//                 <span className={`${letterClass} _13`} >I</span>
//                 <span className={`${letterClass} _14`} >'m&nbsp;</span>
                
//                 Pra<img src={LogoTitle} alt="developer"/>ad
//                 <br />
//                 <AnimatedLetters 
//                     letterClass={letterClass}
//                     strArray={jobArray}
//                     idx={15}
//                 />
//                 web developer
//                 </h1>
//                 <h2>FrontEnd developer and algorithms fanatic</h2>
//                 <Link to="/contact" className="flat-button">CONTACT ME</Link>
//             </div>
//         </div>
//     );
// }

// export default Home;