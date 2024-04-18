import "./FirstPage.css"
import ban from "../../assets/images/logos/banniere.svg"
import logo from "../../assets/images/logos/logo-fond-0.png"

function FirstPage() {
  return (
    <section className='background'>
    <div className='content'> 
    <div className='header'>
        <img src={logo} className='logo-entry' alt="logo" />
        <button type='button' className='login'>LOGIN</button>
        <button type='button' className='sign'>SIGN IN</button>
    </div>
    <img src={ban} className='banniere' alt="banniere"/>
    <p className='text-entry'>Rendez votre quotidien: déménagements sans stress, cours de sport dynamiques, animations d'anniversaires mémorables et bien plus encore...Louez dès aujourd'hui et vivez l'aventure avec nos héros à vos côtés!</p>    
    <button type="button" className='button-entry'>DISCOVER THE EXPERIENCE</button>
    </div>
    </section>
  )
}

export default FirstPage

