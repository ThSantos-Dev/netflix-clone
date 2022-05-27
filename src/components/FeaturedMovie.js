// Import - Styles
import styles from './FeaturedMovie.module.css'

// Import - Config 
import { BASE_IMAGE_URL } from './../Config';

function FeaturedMovie ({ item }) {
    // Tamanho padrão da imagem
    const IMAGE_SIZE = 'original'

    // Formatando a data
    const firstDate = new Date(item.first_air_date)

    // Resgantando o nome dos gêneros
    let genres = item.genres.map(genres => genres.name)

    let description = item.overview;

    if(description.length > 200)
        description = description.substring(0, 200) + '...'

    return (
        <section
             className={styles.featured}
             style={{backgroundImage: `url(${BASE_IMAGE_URL}${IMAGE_SIZE}${item.backdrop_path})`}}
             >

            <div className={styles.featured_vertical}>
                <div className={styles.featured_horizontal}>
                    {/* nome - titulo */}
                    <div className={styles.featured_name}>{item.original_name}</div>
                    {/* Informações */}
                    <div className={styles.featured_info}>
                        <div className={styles.featured_points}>{item.vote_average} pontos</div>
                        <div className={styles.featured_year}>{firstDate.getFullYear()}</div>
                        <div className={styles.featured_seasons}>{item.number_of_seasons} temporada{item.number_of_seasons !== 1 && 's'}</div>                        
                    </div>

                    {/* Descrição */}
                    <div className={styles.featured_description}>{description}</div>

                    {/* Botões */}
                    <div className={styles.featured_buttons}>
                        <a href={`/watch/${item.id}`} className={styles.featured_watch_button}>► Assistir</a>
                        <a href={`/list/add/${item.id}`} className={styles.featured_mylist_button}>+ Minha Lista</a>
                    </div>

                    {/* Gêneros */}
                    <div className={styles.featured_genres}>
                        <strong>Gêneros:</strong> {genres.join(', ')}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FeaturedMovie