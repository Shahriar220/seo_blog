import Layout from '../components/Layout'
import Link from 'next/link';
const Index=()=>{
    return(
        <div>
            <Layout>
                <h2>Index Page</h2>
                <Link href="/signup">
                    <a >SignUp</a> 
                </Link> 
        </Layout>
        </div>
        
    );
};

export default Index;