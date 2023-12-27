import UserClass from "./About/UserClass";


// const About = () => {
//     return(
//         <div>
//             <UserFunction name = {'Harsh'} loaction = {'Bhojpur'} />
//             <UserClass name = {'Eyush'} location = {'ujjain'} />
//         </div>
//     );
// }
import React from "react";
class About extends React.Component{
    constructor(){
        super()
        console.log('Parent constructor')
    }
    componentDidMount(){
        console.log('Parent did mount call');
    }
    render(){
        console.log("Parent render");
        return(
            <div>
                <UserClass name = {'Eyush'} location = {'ujjain'} />
                <UserClass name = {'Anirudh'} location = {'ujjain'} />
            </div>
        );
    }
}

export default About;