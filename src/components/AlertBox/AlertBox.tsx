import React from "react"
import type { AlertBoxProps } from "../../types"

/** An alert component that helps to identify the status of an application  via color and message. It Generates a message and a button that allows you to 'close' the card.*/

export const AlertBox: React.FC<AlertBoxProps> = ({
    type,
    message,
    onClose,
    children
}) => {
    const alertStyles = {
        success: 'alert alert-success',
        error: 'alert alert-danger',
        warning: 'alert alert-warning',
        info: 'alert alert ',
    }

    return (
        <div className={`alert ${alertStyles[type]}`}>
            <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0">{message}</p>
                {onClose && (
                    <button
                        onClick={onClose}
                        className="btn-close ms-2"
                        aria-label="close"
                    >
                    </button>
                )}
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}