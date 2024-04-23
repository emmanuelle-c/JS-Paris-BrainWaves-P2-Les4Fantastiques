import "./FirstPage.css"
import { Link } from "react-router-dom";
import ban from "../../assets/images/logos/banniere.svg"
import logo from "../../assets/images/logos/logo-fond-0.png"


function FirstPage() {
  return (
    <section className='background'>
    <div className='content'> 
    <div className='header'>
        <img src={logo} className='logo-entry' alt="logo" />
        <Link to="/userpage">
        <button type='button' className='login'>LOGIN</button>
        </Link>
        <button type='button' className='sign'>SIGN IN</button>
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

