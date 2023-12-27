import React from "react";
import UsersClass from './UserFunction';

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state ={
            count : 0,
            count1 : 1
        }
        console.log('Child constructor');
    }
    componentDidMount(){
        console.log('child Did mount call');
    }
    render(){
        console.log('child render');
        const {name,location} = this.props;
        const {count,count1} = this.state;
        return(
            <div>
                {/* <UsersClass /> */}
                <button onClick={() => {
                    this.setState({
                        count : this.state.count+1,
                        count1 : this.state.count1+1,
                    })
                }} >Increase count : {count}</button>
                <h1>Count1 : {count1}</h1>
                <h2>Name : {name}</h2>
                <h3>Loaction :{location}</h3>
                <p>Class@gmail.com</p>
                <div>
                </div>
            </div>
        );
    }
}

export default UserClass ;