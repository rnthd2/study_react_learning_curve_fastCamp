import React, { useState } from 'react';

function Counter(){
    //useState는 변수를 관리할 수 있는 함수, 반환값은 배열
    //배열 비구조 형식으로 
    //첫 번째 원소를 number 로 
    //두 번째 원소를 setNumber 로 추출하겠다.
    //setNumber는 현재상태를 업데이트 하는 값
    const [number, setNumber] = useState(0);

    const onIncrese = () => {
        //함수형 업데이트
        setNumber(preNumber => preNumber + 1);
    }
    const onDecrese = () => {
        setNumber(preNumber => preNumber - 1);
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrese}>+1</button>
            <button onClick={onDecrese}>-1</button>
        </div>
    )
};

export default Counter;