import Layout from '../components/Layout'
import SignupComponent from '../components/auth/SignupComponent';
import Link from 'next/link'
const SignUp=()=>{
    return(
        <Layout>
            <h2>SignUp page</h2>
            <SignupComponent/> 
        </Layout>
        
    );
};

export default SignUp;