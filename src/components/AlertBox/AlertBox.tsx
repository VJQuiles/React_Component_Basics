import React from "react"
import { AlertBoxProps } from "../../types"

export const AlertBox: React.FC<AlertBoxProps> = ({
    propTypes,
    message,
    onCLose,
    children
}) => {
    const alertStyles = {
        success: 'alert alert-success',
        error: 'alert alert-danger',
        warning: 'alert alert-warning',
        info: 'alert alert ',
    }

    return (
        <div>
            <div></>
        </div>
    )
}