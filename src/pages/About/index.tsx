import style from './About.module.scss';
import themeStyle from 'styles/theme.module.scss';
import casa from 'assets/About/casa.png';
import massa1 from 'assets/About/massa1.png';
import massa2 from 'assets/About/massa2.png';

const imagens = [massa1, massa2];

export default function About() {
  return (
    <section>
      <h3 className={themeStyle.titulo}>Sobre</h3>
      <div className={style.sobreNos}>
        <img src={casa} alt="Casa Aluroni" />
        <div className={style.sobreNos__texto}>
          <p>
            Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa
            Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos
            pelos ingredientes tradicionais da culinária Italiana, frescos e de
            excelente qualidade para que sua experiência seja ainda mais
            intensa!
          </p>
          <p>
            Também possuímos uma cardápio de carnes com muitas opções de acordo
            com o seu gosto!
          </p>
          <p>
            Para acompanhar as massas italianas, Aluroni possui uma reserva de
            vinhos especiais, que harmonizam perfeitamente com o seu parto, seja
            carne ou massa!
          </p>
        </div>
        <div className={style.imagens}>
          {imagens.map((imagem, index) => (
            <div key={index} className={style.imagens__imagem}>
              <img src={imagem} alt="Imagem de massa" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
