import Navbar from '@/components/UI/Navbar';
import React from 'react';

type pageProps = {
    
};

const page:React.FC<pageProps> = () => {
    
    return (<>
    <Navbar buttonText={"Weather"} buttonPath={"/weather"} />
    <div>Have a good coding</div>
    </>)
}
export default page;