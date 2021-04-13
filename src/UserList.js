import React from 'react';
function User({user, onRemove}){
    const {username, email, id} = user;
    return(
        <div>
            <b>{username}</b> <span>{email}</span>
            {/** () => 로 함수를 만들어주어야 삭제 버튼 클릭 시 작동한다
             *  함수로 만들지 않으면 랜더링 시 삭제 이벤트가 실행되어 아무것도 보이지 않는다 */}
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    );
}
function UserList({users, onRemove}){
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
                    <User 
                        user={user} 
                        key={user.id}
                        onRemove={onRemove}/>
                ))
            }
        </div>
    )
}
export default UserList;