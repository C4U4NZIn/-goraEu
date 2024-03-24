import logoAgoraFmm from '../images/WhatsApp Image 2024-03-11 at 20.05 1LogoAgoraFMM.svg'
import Foguetao from '../images/WhatsApp Image 2024-03-11 at 20.18.13 (1).jpeg'
import Image from "next/image";
import styles from '../styled/image.module.css'
import Link from "next/link";
import 
{ 
  Button , 
  Section , 
  Text 
} from '../styled/styles';


export default function Header(){
    return(
        <Section $justify='between' $flexDirection='row' style={{ backgroundColor:'#fff' , display:'flex' }}>
         <Button style={{position:'absolute' , top:'5%' , right:'5%'}}><Text style={{marginLeft:'-1rem'}}><Link href='/SignUp' style={{textDecoration:'none',color:'#006792'}}>Login</Link></Text></Button>
          <Image
          alt=''
          src={Foguetao}
          priority
          style={{
            width:'60%',
            height:'100%',
            
          }}
          />
          <Image
          alt=''
          priority
          src={logoAgoraFmm}
          className={styles.stylesImage}
          />
        </Section>
    )
}