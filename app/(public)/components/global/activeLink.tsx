"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from '../global/css/active-css.module.css'
 type ActiveLinkProps = {
   href:string;
   children:React.ReactNode;
}


const ActiveLink = (data:ActiveLinkProps) =>{
  const currentPathname = usePathname();
  const { href , children} = data;
  // vê se o usuário está no com determinado link ativo
  const isCurrentPathActive = href === currentPathname;


    return(
        <>
        {/** aplica diferentes estilos relacionados a isCurrentPathname */}
        <Link 
        href={href}
        className={`${isCurrentPathActive ? styles.activeLinkColor : styles.defaultLinkColor}`}
        >{children}</Link>
        </>
    )
}

export default ActiveLink;