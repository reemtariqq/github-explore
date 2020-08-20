import React, { FC, useState } from 'react'
import styled from '@emotion/styled'
import { Link } from "react-router-dom";
import { getUsersByName } from '../actions/userApi'

const UsersList: FC = () => {
    const [query, setQuery] = useState('');
    const [users, setUsers] = useState<any>([]);

    const StyledList = styled.div`
        display:flex;
        justify-content: space-between;
        `
    const StyledUser = styled.div`
    width: 200px;
    height: 100px;
    border: 1px solid #000;
        `

    const searchByUser = () => {
        if (query) {
            getUsersByName(query)
                .then(({ data }) => {
                    console.log(data)
                    setUsers([data, ...users])
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div style={{ padding: 10 }}>
            <div>
                <input onChange={(event) => { setQuery(event.target.value) }} style={{ marginRight: 20 }} />
                <button onClick={() => searchByUser()}>Search</button>
            </div>

            <StyledList>
                {users.map((user: any, index: string) => (
                    <StyledUser key={index}>
                        <span> {user.name}</span>
                        <Link to={`/users/${user.id}`} >
                            See details
                        </Link>
                    </StyledUser>

                ))}
            </StyledList>

        </div >
    )
}

export { UsersList }