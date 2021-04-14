import React, {useRef, useState, useMemo, useCallback} from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';
// import InputSample from './InputSample';
// import Hello from './Hello';
// import Counter from './Counter';
// import Wrapper from './Wrapper';
// import './App.css';
function countActiveUsers(users){
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length; 
}
function App() {
  const [inputs, setInputs] = useState({
    username:'',
    email:'',
  });
  const {username, email} = inputs;

  //useCallback 함수를 사용하기 위해 아래와 같이 이벤트를 감싼다
  //useCallback 함수는 depth에 들어가는 inputs가 바뀔 때 마다 실행된다
  //useCallback 함수없이는 컴포넌트가 매번 리랜더링 될때마다 새로운 함수를 만든다
  const onChange = useCallback(e =>{
    const{name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }, [inputs]);

  const [users,setUsers] = useState([
    {
        id:1,
        username : 'rnthd1',
        email:'public1@gmail.com',
        active: true,
    },{
        id:2,
        username : 'rnthd2',
        email:'public2@gmail.com',
        active: false,
    },{
        id:3,
        username : 'rnthd3',
        email:'public3@gmail.com',
        active: false,
    }
  ]);

  //useState로 사용하는 경우 해당 값이 리랜더링 되는데 
  //굳이 그럴 필요가 없을 때, useRef로 해도됨~
  const nextId = useRef(4);

  //useCallback에 depth 배열에 참조하고 있는 값을 넣지 않으면
  //컴포넌트가 만들어질때 상태를 참조하기 때문에 최신 상태를 참조할 수 없다
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      ...inputs
      //username, email
    };

    //배열에서 spread 연산자를 사용해보자
    // setUsers([
    //   ...users, 
    //   user
    // ]);
    setUsers(users.concat(user));
     
    setInputs({
      username: '',
      email:'',
    }); 
    // console.log(nextId.current);  //4
    nextId.current += 1;  //컴포넌트가 리랜더링 되지 않는다
  }, [inputs, users]);

  const onRemove = useCallback(id => {
    setUsers(users.filter(user => user.id !== id));
  }, [users]);

  //배열에 있는 특정 item만 업데이트 할 때에도 map을 사용한다
  //id값을 비교해 spread로 기존값을 복사하고 active값만 토글한다
  const onToggle = useCallback(id => {
    setUsers(users.map(
      user => user.id === id
       ? {...user, active: !user.active}
       : user
    ))
  }, [users]);
  
  //해당 함수의 기능을 할 때만 해당 함수를 사용하고 싶을 때, useMemo를 사용한다
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser 
        username={username} 
        email={email} 
        onChange={onChange} 
        onCreate={onCreate}
      />
      <UserList 
        users={users}
        onRemove={onRemove}
        onToggle={onToggle}/>
      <div>활성 사용자 수 : {count}</div>
    </>
  )

  // return (
  //   <InputSample />
  // )

  // return (
  //   <Counter />
  // )
  
  // return (
  //   <Wrapper>
  //     <Hello name="react" color="red" isSpecial/>
  //     <Hello color="pink"></Hello>
  //   </Wrapper>
  // )

  // const name = 'react';
  // const style = {
  //   backgroundColor:'black',
  //   color : 'aqua',
  //   fontSize: 24,
  //   padding: '1rem'
  // } ;
  // return (
  //   <>
  //     <Hello/>
  //     <Hello 
  //     //태그 안에는 이렇게 주석처리
  //     />
  //     <Hello/>
  //     <div>안녕히계세요.</div>
  //     <div>자바스크립트 값 보여줄땐 이렇게 : {name}</div>
  //     <div style={style}></div>
  //     <div className="gray-box"></div>
  //     {/** 주석은 이렇게*/}
  //   </>
  // );
}

export default App;
