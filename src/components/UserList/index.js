import { Link, useNavigate } from "react-router-dom";
import "./styles.css";

const UserList = ({ users, title, emptyMessage, onFollowAction }) =>
{
    const navigate = useNavigate();
    return (
        <div className="user-list">
            {
                title && <h3 className="user-list-title">{ title }</h3>
            }

            {
                users && users.length > 0 ?
                    (
                        <ul className="users">
                            {
                                users.map(user =>
                                (
                                    <li key={ user.id } className="user-item user-card">
                                        <Link to={ `/profile/${ user.id }` } className="user-link">
                                            <img
                                                src={ user.avatar || "/default_avatar.png" }
                                                alt={ user.username }
                                                className="user-avatar"
                                            />
                                            <span className="user-name">{ user.username }</span>
                                        </Link>
                                        {
                                            onFollowAction &&
                                            (
                                                <button
                                                    className="follow-button"
                                                    onClick={ () => onFollowAction(user.id) }
                                                >
                                                    Follow
                                                </button>
                                            )
                                        }
                                    </li>
                                )
                                )
                            }
                        </ul>
                    ) :
                    (
                        <p className="empty-users">{ emptyMessage || "No users found" }</p>
                    )
            }
        </div>
    );
}

export default UserList;
