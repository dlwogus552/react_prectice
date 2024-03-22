import {Component} from 'react';

class PhoneInfo extends Component{
    handelRemove=()=>{
        const {info,onRemove}=this.props
        //부모에 있는 remove 호출
        onRemove(info.id)
    }

    render(){        
        const {id, name, phone}=this.props.info
        return(
            <div>
                <div>id:{id}</div>
                <div>name:{name}</div>
                <div>Phone:{phone}</div>
                <button onClick={this.handelRemove}>삭제</button><br/>
            </div>
        )
    }
}

export default PhoneInfo