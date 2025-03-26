import style from './css/UserProfile.module.css'

function UserProifle() {
    return (
        <div>
            <h3 className={style.heading}>User profile</h3>
            <div className={style.card}>
                <img className={style.image} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />

                <div>
                    <h4>Azam</h4>
                    <p>Software Developer</p>
                </div>
            </div>
        </div>
    )
}
export default UserProifle