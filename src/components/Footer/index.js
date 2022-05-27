// Import - Styles
import styles from "./index.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Projeto com finalidade estritamente didática, sendo proibida qualquer
        forma de manipulação de imagens e valores
      </p>
      <p>Direitos de imagem para Netflix</p>
      <p>
        Dados pegos do site{" "}
        <a href="https://www.themoviedb.org/">The Movie Database</a>
      </p>
    </footer>
  );
}

export default Footer