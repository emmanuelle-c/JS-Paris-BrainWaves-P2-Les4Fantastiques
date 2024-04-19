import "./FirstPage.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import ban from "../../assets/images/logos/banniere.svg"
import logo from "../../assets/images/logos/logo-fond-0.png"


function FirstPage() {  
  const [showLog, setShowLog] = useState(false);

  const handleShowLog = () => {
    setShowLog(!showLog);
  };
  return (
    <section className='background'>
    <div className='content'> 
    <div className='header'>
        <img src={logo} className='logo-entry' alt="logo" />
        <button type='button' className='login'>LOGIN</button>
        <button type='button' className='sign'>SIGN IN</button>
    </div>
    <div className="user-responsive">
        <img src={logo} className='logo-responsive' alt="logo-responsive" />
    <div className="button-responsive">
        <button type="button" aria-label="button" className="button-user" onClick={handleShowLog} onKeyDown={handleShowLog} >
          <FaRegUser className="user" />
        </button>
        {showLog &&(
        <ul className="log-responsive">
        <button type='button' className='hide-login'>LOGIN</button>
        <button type='button' className='hide-sign'>SIGN IN</button>
        </ul>
        )}
    </div>
    </div>
        <img src={ban} className='banniere' alt="banniere"/>
        <p className='text-entry'><span>Rendez votre quotidien extraordinaire</span> <br/>déménagements sans stress, cours de sport dynamiques, animations d'anniversaires mémorables et bien plus encore...Louez dès aujourd'hui et vivez l'aventure avec nos héros à vos côtés!</p>    
        <Link to ="/accueil">
        <button type="button" className='button-entry'>DISCOVER THE EXPERIENCE</button>
        </Link>
    </div>
    </section>
  )
}

export default FirstPage

