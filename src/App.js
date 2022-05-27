// Import - Pacotes
import { useEffect, useState } from 'react';

// Import - Styles
import styles from './App.module.css';

// Import - Images
import loading from './img/loading.gif'

// Import - Services
import Tmdb from './services/Tmdb';

// Import - Components
import FeaturedMovie from './components/FeaturedMovie';
import Footer from './components/Footer';
import MovieRow from './components/MovieRow';
import Header from './components/Header';


function App() {

  // States da Aplicação
  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)

  
  // Função que faz a inserção dos dados (filmes) no State
  const loadAllMovies = async () => {
    let list = await Tmdb.getHomeList()
    setMovieList(list)

    // filtro para pegar o DESTAQUE - Featured
    let originals = list.filter(item => item.slug === 'originals')

    // Gerando um número aleatório para pegar um registro aleatório como capa
    let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
    let chosen = originals[0].items.results[randomChosen]
    let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')

    // Alimentando o State
    setFeaturedData(chosenInfo)
  }

  // Monitoramento do scroll
  const scrollListener = () => {
    // Verificando se o Scroll ultrapassou os 10 pontos de scroll
    window.scrollY > 10 ? setBlackHeader(true) : setBlackHeader(false)
  }

  // REQUISIÇÃO
  useEffect(()=> {
    // Chamando a função que faz a requisão a API
    loadAllMovies()

    // Adicionando o monitoramento do scroll
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }

  }, [])

  return (
    <div className={styles.page}>

      <Header black={blackHeader}/>

      {featuredData && 
        <FeaturedMovie item={featuredData} />
      }

      <section className={styles.lists}>
        {/* Percorrendo os dados vindos da API e gerando as listas */}
        {movieList.map((item, key) => (
              <MovieRow 
              title={item.title}
              items={item.items}
              key={key}/> 
    
          ))
        }
      </section>

      <Footer />

      {/* Lógica de exibição do loading */}
      {movieList <= 0 && 
        <div className={styles.loading}>
          <img src={loading} alt="Carregando..." />
        </div>
      }
    </div>
  );
}

export default App;
