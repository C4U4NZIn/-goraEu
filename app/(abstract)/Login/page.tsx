import styles from '../Login/login.module.css'
import Link from 'next/link'
import Image from 'next/image'
 const LoginPage = ()=>{
 
    return (
      <>
       
       
       <div className={styles.leftContainerElementAgora}>
      
       </div>
       
       
       <div>
       <h1>Hello,World!</h1>
        <Link href="/SignUp">Sign Up</Link>
       </div>





      </>
    )

}
export default LoginPage;