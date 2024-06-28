"use client";
import styles from './styles.module.css'
import AvatarTemplate from '@/app/(public)/usuario/avatar'
type StudentsProps = {
	name: string,
	RA: number,
	url?: string
}

export default function StudentsItems({name, RA, url}:StudentsProps){
	return(
		<div className={styles.container}>
			<div className={styles.container_name_image}>
                    {
                        url &&
                        (
                     <div className={styles.container_image}>
                     <img className={styles.image} src={url} alt='profile'/>
				        </div>

                        )
                    }
                {
                        !url && (
                            <AvatarTemplate
                            username={name.slice(0).toUpperCase()}
                            widthImg={60}
                            heightImg={60}
                            fontSize='30'
                            />
                        )
                    }
				<p className={styles.name}>{name}</p>
			</div>
			
			<p className={styles.ra}>{RA}</p>
		</div>
	)
}