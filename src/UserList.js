import React from 'react';
function User({user, onRemove, onToggle}){
    const {username, email, id, active} = user;
    return(
        <div>
            <b          
                style={{
                    color: active ? 'green' : 'black',
                    cursor: 'pointer' //커서모양이 손가락 모양으로 바뀜
                }}
                onClick={() => onToggle(id)}
            >
                {username}
            </b> 
            &nbsp;
            <span>
                {email}
            </span>
            {/** () => 로 함수를 만들어주어야 삭제 버튼 클릭 시 작동한다
             *  함수로 만들지 않으면 랜더링 시 삭제 이벤트가 실행되어 아무것도 보이지 않는다 */}
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    );
}
function UserList({users, onRemove, onToggle}){
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

            {/** 배열 랜더링에서 key를 설정하여 최적화하자*/}
            {/** map함수는 특정 객체를 특정 컴포넌트의 형태로 변환한다 */}
            {
                users.map(user => (
                    <User 
                        user={user} 
                        key={user.id}
                        onRemove={onRemove}
                        onToggle={onToggle}
                    />
                ))
            }
        </div>
    )
}
export default UserList;