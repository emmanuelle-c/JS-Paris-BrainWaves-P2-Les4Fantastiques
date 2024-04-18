import "./FirstPage.css";
import ban from "../assets/images/logos/banniere.svg"
import logo from "../assets/images/logos/logo-fond-0.png"



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
    <p className='text-entry'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, deserunt earum! Deleniti, nostrum. Quasi mollitia odio nobis blanditiis porro dolores, ducimus iusto? Quasi quod perspiciatis vero voluptate dicta? Placeat, nam?</p>    
    <button type="button" className='button-entry'>DISCOVER THE EXPERIENCE</button>
    </div>
    </section>
  )
}

export default FirstPage

