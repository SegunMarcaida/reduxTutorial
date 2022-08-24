import React, { useEffect } from 'react'
// redux
import { fetchAllUsers } from '../store/slices/users';
import { useDispatch, useSelector } from 'react-redux';
import {Card, CardContent, Grid} from "@mui/material";

const UserList = () => {

    const { list: users } = useSelector(state => state.users);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [dispatch])

    return (
        <div >
            <br/>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    users.map((user, index) => (
                        <Grid item xs={3}>
                        <Card key={index}>
                            <CardContent >
                                <img src={user.avatar} alt="avatar" />
                                <div >
                                    <h5 >{`${user.first_name} ${user.last_name}`}</h5>
                                    <p>{user.email}</p>
                                </div>
                            </CardContent>
                        </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}
export default UserList