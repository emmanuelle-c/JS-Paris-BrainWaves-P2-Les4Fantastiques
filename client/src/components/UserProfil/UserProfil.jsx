import { useStatus } from "../../contexts/auth";

function UserProfil () {
    const { currentUser } = useStatus()
    return (
        <>
        <section id="user-list">
            <ul>
                <li>mes informations</li>
                <li>mon historique de commandes</li>
            </ul>
        </section>
        <section className="information-container">
            <p>{currentUser.firstName}</p>
            <p>{currentUser.lastName}</p>
            <p>{currentUser.DDN}</p>
            <p>{currentUser.email}</p>
            <p>{currentUser.tel}</p>
            <p>{currentUser.address}</p>
        </section>
        <section className="information-container">
            {currentUser.orders.map((order) => <p key={order.index}>{order}</p>)}
        </section>
        </>
    )
}

export default UserProfil;