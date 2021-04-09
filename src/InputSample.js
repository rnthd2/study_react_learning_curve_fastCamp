import React, {useState, useRef} from 'react';
function InputSample(){
    //객체로 
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });
    //비구조 할당으로
    const nameInput = useRef();
    const { name, nickname } = inputs;
    const onChange = (e) => {
        //e.target.name
        //e.target.value
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출

        //불변성을 지키자!!
        //리액트에서 객체를 업데이트 할때는 기존의 객체 복사가 필요하다
        // const nextInputs = {
        //     ...inputs
        // }
        //대괄호의 [name]에 들어가는 name이 inputs의 name 이면 name이 변경되고
        //대괄호의 [name]에 들어가는 name이 inputs의 nickname이면 nickname이 변경된다
        // nextInputs[name]=value;

        //줄인다...
        // const nextInputs = {
        //     ...inputs,
        //     [name]: value,
        // };
        // setInputs(nextInputs);
        
        //줄인다...
        // setInputs({
        //     ...inputs, // 기존의 input 객체를 복사한 뒤
        //     [name]: value // name 키를 가진 값을 value 로 설정
        // });
 
        setInputs({
            ...inputs,
            [name]:value
        })
    };
    const onReset = () => {
        setInputs({
            name:'',
            nickname:'',
        });
        nameInput.current.focus();
    };
    return(
        <div>
            <input 
                name="name" 
                placeholder="이름" 
                onChange={onChange} 
                value={name}
                ref={nameInput}
                />
            <input 
                name="nickname" 
                placeholder="닉네임" 
                onChange={onChange} 
                value={nickname}
                />
            <button onClick={onReset}>초기화</button> 
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}
export default InputSample;