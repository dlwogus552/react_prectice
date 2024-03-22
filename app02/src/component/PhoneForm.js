import {Component} from 'react';

class PhoneForm extends Component{
    state={
        name : '',
        phone : ''
    }
    //추가 submit
    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.onCreate(this.state)
        this.setState({
            name:'',
            phone:''
        })
    }
    //입력마다 호출되는 함수
    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder='이름' name='name' onChange={this.handleChange} value={this.name}/>
                    <input placeholder='전화번호' name='phone'onChange={this.handleChange} value={this.phone}/>
                    <button type='submit'>등록</button>
                </form>
            </div>
        )
    }
}
export default PhoneForm