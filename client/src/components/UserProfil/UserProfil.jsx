function UserProfil ({ user }) {
    return (
        <>
        <section id="user-list">
            <ul>
                <li>mes informations</li>
                <li>mon historique de commandes</li>
            </ul>
        </section>
        <section className="information-container">
            <p>{user.firstname}</p>
            <p>{user.lastname}</p>
            <p>{user.email}</p>
            
        </section>
        </>
    )
}

export default UserProfil;