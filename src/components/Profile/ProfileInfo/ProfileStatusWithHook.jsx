import React, { useState, useEffect } from "react";

const ProfileStatusWithHook = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
                <div>
                    Status: <span onDoubleClick={activateEditMode}>{props.status || '------'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true}
                        onBlur={deactivateEditMode}
                        onChange={onStatusChange}
                        value={status} />
                </div>
            }
        </div>)
}

export default ProfileStatusWithHook;

