import React from "react"
import type { UserProfileCardProps } from "../../types"

/** A componenet that displays user profile details like name, email, role, and avatar. It also allows for editing.*/

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
    user,
    showEmail,
    showRole,
    onEdit,
    children,
}) => {

    return (
        <div className="card">
            <div className="body">
                <h5 className="card-title">{user.name}</h5>
                {showEmail && <p className="card-text">{user.email}</p>}
                {showRole && <p className="card-text">{user.role}</p>}
                {onEdit && (
                    <button
                        className="btn btn-primary"
                        onClick={() => onEdit(user.id)}>
                        Edit
                    </button>
                )}
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}
