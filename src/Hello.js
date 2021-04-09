import React from 'react';

//Hello component
function Hello({color,name,isSpecial}){
    return (
        <div style={{color}}>
            {
                //{isSpecial ? <b>*</b> : null}
                //isSpecial && <b>*</b>
            }
            <b>{isSpecial ? '스페셜하다!' : '스페셜하지않다!'}</b>
            안녕하세요 {name}
        </div>
    );
}

Hello.defaultProps = {
    name:'이름없음'
}
//Hello component를 내보내겠다
export default Hello;