import { Api } from 'helpers/Api';
const parseResponse = (Response) => Response.json();

const transformPaleta = (paleta) => {
  const [sabor, recheio] = paleta.sabor.split(" com ");

  return {
    ...paleta,
    id: paleta._id,
    titulo: paleta.sabor,
    sabor,
    ...(recheio && { recheio }),
  };
};

const parseTransformLista = (response) =>
  parseResponse(response).then((paletas) => paletas.map(transformPaleta));


export const PaletaService = {
  getLista: () =>
    fetch(Api.paletaLista(), { method: 'GET' }).then(parseTransformLista),
  getById: (id) =>
    fetch(Api.paletaById(id), { method: 'GET' }).then(parseTransformLista),
  create: () =>
    fetch(Api.createPaleta(), { method: 'POST' }).then(parseTransformLista),
  updateById: (id) =>
    fetch(Api.updatePaletaById(id), { method: 'PUT' }).then(parseTransformLista),
  deleteById: (id) =>
    fetch(Api.deletePaletaById(id), { method: 'DELETE' }).then(parseTransformLista),
};
