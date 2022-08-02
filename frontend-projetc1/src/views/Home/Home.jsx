import "./Home.css";
import PaletaLista from "../../components/PaletaLista/PaletasLista";
import NavBar from 'components/NavBar/NavBar'

function Home() {
  return (
    <div className="Home">
      <NavBar />
      <div className="Home__container">
        <PaletaLista />
      </div>
    </div>
  );
}

export default Home;
