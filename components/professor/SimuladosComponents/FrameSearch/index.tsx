import styles from './styles.module.css'
import Image from 'next/image'
import { useState } from 'react'

import Icon_Search from './icon_search.png'
import ImageTop from './image_tabBar.png'

type prop = {
	onSearch: any
}

export default function FrameSearch({ onSearch } : prop){
	const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e : any) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

	return(
		<div className={styles.container_body}>
			<Image className={styles.image} src={ImageTop} alt='image'/>
			<div className={styles.container}>
			
				<div className={styles.container_input}>
					<Image className={styles.lupa} src={Icon_Search} alt='search'/>
					<input  value={searchTerm} onChange={handleSearch} placeholder='Pesquise por assunto, número de cadastro ou enunciado' className={styles.input}/>
				</div>
			</div>
		</div>
	)
}