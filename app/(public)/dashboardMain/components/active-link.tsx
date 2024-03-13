'use client';
import Link from "next/link"
import { usePathname } from "next/navigation";
import styles from '../css/dashboard.module.css'
type ActiveLinkProps = {
    href:string;
    children: React.ReactNode;
}


export const ActiveLink = ({href , children}:ActiveLinkProps) =>{

   const pathname = usePathname();

   const isActive = href === pathname;

   console.log(isActive);

   return(
    <>
    <Link href={href} className={`${isActive ? styles.activeLinkColor : styles.offLinkColor}`}>{children}</Link>
    </>
   )

}