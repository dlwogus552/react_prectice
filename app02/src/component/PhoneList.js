import {Component} from 'react';
import PhoneInfo from './PhoneInfo'

class PhoneList extends Component{
    render(){
        const {data,onRemove} =this.props
        
        return(
            <div>
                <div>PhoneList</div>
                {
                    data.map((info)=>{
                        return(
                            <PhoneInfo info={info} key={info.id} 
                            onRemove={onRemove}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default PhoneList