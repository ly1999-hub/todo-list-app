import React from 'react';
import axios from "axios";
class formInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            client:[
                {email:'',password:{}}
            ],
            server:[]
        }
    }

    // xây dựng hàm lấy giá trị nhập từ form;
    changInputValue(Event){
        this.setState({
                [Event.target.name]:Event.target.value
        });
    }

    // xây dựng hàm kiểm tra 

    validationForm=()=>{
        // khởi tạo biến mang lỗi
        let returnDate={
            error:false,
            msg:'',
        }
        // khởi tạo biến chứ giá trị từ state

        const {email,password}=this.state;
        //kiểm tra Email;
        const re=/\S+@gmail.com/;//định dạng cho email có dạng :string+@gmail.com
        if(!email){
            returnDate={
                error:true,
                msg:"chưa nhập Email",
            }
        }else{
            if(!re.test(email)){
                returnDate={
                    error:true,
                    msg:"không phải định dạng Email",
                }
            }
        }
        // kiểm tra password
        if(!password){
            returnDate={
                error:true,
                msg:"chưa nhập mật khẩu",
            }
        }else{
            if(password.length<5){
                returnDate={
                    error:true,
                    msg:"mật khẩu nhiều hơn 5 ký tự",
                }
            }
        }
        return returnDate;
    }
    
    //xây dựng hàm lấy thông tin và hiển lên alert
    submitForm=(Event)=>{
        //chặn các Event mặc định của form
        Event.preventDefault();
        //gọi hàm kiểm tra 
        let validation=this.validationForm();
        if(validation.error){
            alert(validation.msg);
        }
        else{
            axios.get('https://grtvo.sse.codesandbox.io/users').then(res=>{
               this.setState({
                   server:res.data
               })
            })
            
            const {server}=this.state;
            for(var i of server){
                if(i.email===this.state.email&&i.password===this.state.password){
                    alert("ok"); 
                    break;
                }
            }
        }
    }
    
    render=()=>{
        return(
            <div className="container-fluid" style={{ paddingTop: "5%" ,paddingBottom:"50px",borderBottom: "6px solid #999990"}}>
                <form name="input1"
                    onSubmit={this.submitForm.bind(this)}
                    style={{paddingLeft:"100px"}}
                >
                    <label htmlFor="text">Email</label>
                    <input type="text"
                        className="form-control"
                        name="email"
                        placeholder="Enter email"
                        onChange={this.changInputValue.bind(this)}
                    />
                    <label htmlFor="text"> password</label>
                    <input type="password"
                        className="form-control"
                        name="password"
                        placeholder="enter password"
                        onChange={this.changInputValue.bind(this)}
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    };
}

export default formInput;