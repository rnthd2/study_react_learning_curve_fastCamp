import React, {useRef, useState} from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';
// import InputSample from './InputSample';
// import Hello from './Hello';
// import Counter from './Counter';
// import Wrapper from './Wrapper';
// import './App.css';

function App() {
  const [inputs, setInputs] = useState({
    username:'',
    email:'',
  });
  const {username, email} = inputs;
  const onChange = e =>{
    const{name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  const [users,setUsers] = useState([
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
  ]);

  //useState로 사용하는 경우 해당 값이 리랜더링 되는데 
  //굳이 그럴 필요가 없을 때, useRef로 해도됨~
  const nextId = useRef(4);

  const onCreate = () => {

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
    console.log(nextId.current);  //4
    nextId.current += 1;  //컴포넌트가 리랜더링 되지 않는다
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  }

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
      onRemove={onRemove}/>
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
