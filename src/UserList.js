import React from 'react';
function User({user}){
    return(
        <div>
            <b>{user.username}</b> <span>{user.email}</span>
        </div>
    )
}
function UserList(){
    const users = [
        {
            id:1,
            username : 'rnthd1',
            email:'public1@gmail.com'
        },{
            id:2,
            username : 'rnthd2',
            email:'public2@gmail.com'
        },{
            id:3,
            username : 'rnthd3',
            email:'public3@gmail.com'
        }
    ];
    return (
        <div>
            {/* <div>
                <b>{users[0].username}</b> <span>{users[0].email}</span>
            </div>
            <div>
                <b>{users[1].username}</b> <span>{users[1].email}</span>
            </div>
            <div>
                <b>{users[2].username}</b> <span>{users[2].email}</span>
            </div> */}

            {/* <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} /> */}

            {/*배열 랜더링에서 key를 설정하여 최적화하자*/}
            {
                users.map(user => (
                    <User user={user} key={user.id}/>)
                )
            }
        </div>
    )
}
export default UserList;