import React from 'react';
import axios from "axios";

import './user.css';
class User extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Users:[]
        }
    }

    componentDidMount(){
        axios.get('https://grtvo.sse.codesandbox.io/users').then(res=>{
           this.setState({
               Users:res.data
           })
        })
    }

    render(){
        const {Users}=this.state;
        return (
            <div className="user">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                            <th scope="col">Email</th>
                            <th scope="col">nick name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Users.map((use)=>(
                            <tr >
                                <td> <img src={use.avata} className="imgAvata" />{use.email}</td>
                                <td>{use.nickname}</td>
                            </tr>
                            )
                            )
                        }
                        </tbody>
                    </table>
            </div>
        )
    }
}

export default User;