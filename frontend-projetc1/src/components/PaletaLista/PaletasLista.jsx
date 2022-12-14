/* import { paletas } from "../../moks/paletas"; */
import './PaletasLista.css';
import { useState, useEffect } from 'react';
import PaletaListaItem from '../PaletaListaItem/PaletaListaItem';
import { PaletaService } from 'services/PaletaService';
import PaletaDetalhesModal from 'components/PaletaDetalhesModal/PaletaDetalhesModal';

function PaletaLista({ paletaCriada }) {
  const [paletas, setPaletas] = useState([]);

  const [paletaSelecionada, setPaletaSelecionada] = useState({});

  const [paletaModal, setPaletaModal] = useState(false);

  const adicionarItem = (paletaIndex) => {
    const paletas = {
      [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) + 1,
    };
    setPaletaSelecionada({ ...paletaSelecionada, ...paletas });
  };

  const removerItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) - 1,
    };
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
  };

  const getLista = async () => {
    const response = await PaletaService.getLista();
    setPaletas(response);
  };

  const getPaletaById = async (paletaId) => {
    const response = await PaletaService.getById(paletaId);
    setPaletaModal(response);
  };

  const adicionaPaletaNaLista = (paleta) => {
    const lista = [...paletas, paleta];
    setPaletas(lista);
  };

  useEffect(() => {
    getLista();
  }, []);

  useEffect(() => {
    if (paletaCriada) adicionaPaletaNaLista(paletaCriada);
  }, [paletaCriada]);

  return (
    <div className="PaletaLista">
      {paletas.map((paleta, index) => (
        <PaletaListaItem
          key={`PaletaListaItem-${index}`}
          paleta={paleta}
          quantidadeSelecionada={paletaSelecionada[index]}
          index={index}
          onAdd={(index) => adicionarItem(index)}
          onRemove={(index) => removerItem(index)}
          clickItem={(paletaId) => getPaletaById(paletaId)}
        />
      ))}
      {paletaModal && (
        <PaletaDetalhesModal
          paleta={paletaModal}
          closeModal={() => setPaletaModal(false)}
        />
      )}
    </div>
  );
}

export default PaletaLista;
