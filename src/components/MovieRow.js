// Import - Hooks
import { useState } from 'react';

// Import - Styles
import styles from './MovieRow.module.css';

// Import - icons
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

// Import - Config
import { BASE_IMAGE_URL, IMAGE_SIZE } from '../Config'

function MovieRow ({title, items}) {

    // State que armazena as informações de Margin atual
    const [margin, setMargin] = useState(0)

    // Função que lida com o clique do botão esquerdo - Voltar/Anterior
    const handleLeftArrow = () => {    
        // Calculando a nova margin
        let newMargin = margin + (Math.round(window.innerWidth / 2));

        // Verificando se a margin é maior que 0, se já está na posição inical
        if(newMargin > 0)
           newMargin = 0
        
        setMargin(newMargin)
    }

    // Função que lida com o clique do botão direito - Avançar/Próximo
    const handleRightArrow = () => {
        // Calculando a nova margin
        let newMargin = margin - (Math.round(window.innerWidth / 2));

        // Largura da lista
        let widthList = items.results.length * 150;

        // Verificando se a largura que quero avançar é maior que a da lista
        if((window.innerWidth - widthList) > newMargin) {
            newMargin = (window.innerWidth - widthList) - 60 // -60 por conta do padding dos controles
        }

        setMargin(newMargin)
    }


    return (
        <div className={styles.row}>
            <h2>{title}</h2>

            {/* Controles */}
            <div 
                className={styles.left}
                onClick={handleLeftArrow}
                >
                <NavigateBeforeIcon />
            </div>

            <div
                className={styles.right}
                onClick={handleRightArrow}
                >
                <NavigateNextIcon />
            </div>

            <div className={styles.list_area}>
                <div 
                    className={styles.list}
                    style={{
                        width: items.results.length * 150,                        
                        marginLeft: margin
                    }}
                    >
                    { // Validação para verificar se há filmes 
                        items.results.length > 0 && items.results.map((movie) => (
                            <div key={movie.id} className={styles.item}>
                                <img src={`${BASE_IMAGE_URL}${IMAGE_SIZE}${movie.poster_path}`} alt={movie.orignal_title} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieRow
