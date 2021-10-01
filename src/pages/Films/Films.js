import React from 'react'

export default function Films(props) {
    return (
        <div>
            <button onClick={() => {
                props.history.push('/admin/addfilms');
            }}>Thêm phim</button>
        </div>
    )
}
