/**
 *  Objetivo: Arquivo de funções para requisições para a API: 
 *               - Originais da Netflix
 *               - Recomendados (trending)
 *               - Em alta (top rated)
 *               - ação
 *               - coméida
 *               - terror
 *               - romance
 *               - documentários
 */

// Import do arquivo de configurações
import { API_BASE, API_KEY, LANGUAGE_CODE, CATEGORY_URL } from '../Config'

/**
 * Função que realiza requisições a API de maneira genérica, basta passar o ENDPOINT desejado
 * @param {String} endpoint EndPoint da API que deseja acessar
 * @return {JSON} JSON os dados encontrados
 */
const basicFetch =  async (endpoint) => {
    const reponse = await fetch(`${API_BASE}${endpoint}&api_key=${API_KEY}`)
    const data = await reponse.json()


    return data
}




export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                items: await basicFetch(`${CATEGORY_URL.netflix}?language=${LANGUAGE_CODE}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`${CATEGORY_URL.trending}?language=${LANGUAGE_CODE}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`${CATEGORY_URL.toprated}?language=${LANGUAGE_CODE}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`${CATEGORY_URL.genres.action}?language=${LANGUAGE_CODE}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`${CATEGORY_URL.genres.horror}?language=${LANGUAGE_CODE}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`${CATEGORY_URL.genres.romance}?language=${LANGUAGE_CODE}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`${CATEGORY_URL.genres.documentary}?language=${LANGUAGE_CODE}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`${CATEGORY_URL.genres.comedy}?language=${LANGUAGE_CODE}`)
            }
        ]
    },

    /**
     * Função que realiza a requisão a API para pegar mais informações sobre determinado FILME/ SÉRIE
     * @param {String} movieId ID do filme/série a ser buscado
     * @param {String} type  Tipo (série ou filme) tv/movie
     * @returns {JSON} Informações da busca
     */
    getMovieInfo: async (movieId, type) => {
        // Iniciando um objeto para receber o retorno dos dados
        let info = {}

        // Validação para verificar se o id existe
        if(movieId) {
            // Validação para verificar qual o tipo da midia (série ou filme)
            switch(type) {
                case 'movie': 
                    info = await basicFetch(`/movie/${movieId}?language=${LANGUAGE_CODE}`)
                    break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=${LANGUAGE_CODE}`)
                    break;
                default:
                    info = 'Dados não encontrados.'
                    break;
            }
        }

        return info
    }
}