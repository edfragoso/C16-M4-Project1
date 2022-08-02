import { paletas } from "../../moks/paletas";
import "../PaletaLista/PaletasLista.css";
import { useState } from "react";
import PaletaListaItem from "../PaletaListaItem/PaletaListaItem";

function PaletaLista() {
  const [paletaSelecionada, setPaletaSelecionada] = useState({});

  const adicionarItem = (paletaIndex) => {
    const paletas = {[paletaIndex]: (paletaSelecionada[paletaIndex] || 0) + 1}
    setPaletaSelecionada({ ...paletaSelecionada, ...paletas });
  };


  const removerItem = (paletaIndex) => {
        const paleta = { [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) -1 }
        setPaletaSelecionada({...paletaSelecionada, ...paleta});
}

  return (
    <div className="PaletaLista">
	{paletas.map((paleta, index) =>
		<PaletaListaItem
			key={`PaletaListaItem-${index}`}
			paleta={paleta}
			quantidadeSelecionada={paletaSelecionada[index]}
			index={index}
			onAdd={index => adicionarItem(index)}
			onRemove={index => removerItem(index)} />
		)
	}
</div>
  );
}

export default PaletaLista;