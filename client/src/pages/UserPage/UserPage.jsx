import "./UserPage.css"
import "../FirstPage/FirstPage.css"

function UserPage (){
    return (
        <div className="card-user-container">
            <hr />
            <form>
                <section id="email-container">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="spiderman@gmail.com" />
                </section>
                <section id="password-container">
                <label htmlFor="password">Password</label>
                <input type="text" id="password" placeholder="*******"/>
                </section>
                <button type="submit">LOG IN</button>
            </form>
            <hr />
        </div>
    )
}

export default UserPage;