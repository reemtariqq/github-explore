import React, { FC, useEffect, useState } from 'react'
import { getUsersByName } from '../actions/userApi'
const UsersList: FC = () => {

    const [query, setQuery] = useState('');
    const [users, setUsers] = useState<any>([]);
    const searchByUser = () => {
        if (query) {
            getUsersByName(query)
                .then(({ data }) => {
                    setUsers([...users, data])
                })
                .catch(err => console.log(err))
        }

    }

    return (
        <div>
            <div>
                <input onChange={(event) => { setQuery(event.target.value) }} />
                <button onClick={() => searchByUser()}>Search</button>
            </div>

            <div>

            </div>

        </div >
    )
}

export { UsersList }