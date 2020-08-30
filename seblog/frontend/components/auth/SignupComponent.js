import {useState} from 'react';
import Form from "reactstrap/lib/Form";
import react from "react";
import Button from "reactstrap/lib/Button";
import {signup} from '../../actions/auth'

const SignupComponent = () => {
    const [values,SetValues]=useState({
        name:"shahriar",
        email:"shahriar@gmail.com",
        password:"5664321",
        error:"",
        loading:false,
        message:"",
        showForm:true
    });
    const {name,email,password,error,loading,message,showForm}=values;

    const handleSubmit=e=>{
        e.preventDefault();
        SetValues({...values,loading:true,error:false});
        const user= {name,email,password}

        signup(user).then(data=>{
            if(data.error){
                SetValues({...values,
                error:data.error,
                loading:false});
            }else{
                SetValues({...values,
                name:'',
                email:'',
                password:'',
                error:'',
                loading:false,
                message:data.message,
                showForm:false});
            }
        });
        //console.table({name,email,password,error,loading,message,showForm});
    };

    const handleChange=name=>e=>{
        SetValues({...values,error:false,[name]:event.target.value})
    }
    const signupForm=()=>{
        return(
            <Form onSubmit={handleSubmit}>
                <div className="form-group" >
                    <input value= {name}
                    onChange={handleChange('name')}
                     type="text" 
                     className="form-control"
                     placeholder="type your name">
                     </input>
                </div>
                <div className="form-group" >
                    <input value={email} 
                    onChange={handleChange('email')}
                     type="email" 
                     className="form-control"
                     placeholder="type your email here">
                     </input>
                </div>
                <div className="form-group" >
                    <input value={password} 
                    onChange={handleChange('password')}
                     type="password" 
                     className="form-control"
                     placeholder="type your password here">
                     </input>
                </div>
                <div>
                    <button className="btn btn-primary">Signup</button>
                </div>
            </Form>
        );
    }
    return ( 
        <React.Fragment>
            {signupForm()}
        </React.Fragment>
    );
};
export default SignupComponent;