import { useState,Component } from "react";


// const UserFunction = (props) => {
//     const {name,loaction} = props;
//     const [count,setCount] = useState(0);
//     const [count1 ,setCount1] = useState(1);
//     return(
//         <div>
//             <h2>Count : {count}</h2>
//             <h2>Count1 : {count1}</h2>
//             <h2>{name}</h2>
//             <h3>Location : {loaction}</h3>
//             <p>Email : Harhs@google.in</p>
//         </div>
//     );
// }

class UsersClass extends Component{
    constructor(){
        super()
        console.log('userfun constructor');
    }
    render(){
        console.log('userfun render');
        <div>
            <h1>Hello dear</h1>
        </div>
    }
    componentDidMount(){
        console.log('userfun did mount');
    }
} 

export default UsersClass;