const PaletaContext = {
    paletaEndpoint: () => `${Api.baseUrl}/paletas`,
    paletaLista: () => `${PaletaContext.paletaEndpoint()}/all-paletas`,
    paletaById: () => `${PaletaContext.paletaEndpoint()}/one-paleta/${id}`,
    createPaleta: () => `${PaletaContext.paletaById()}/create-paleta`,
    updatePaletaById: () => `${PaletaContext.paletaEndpoint()}/update-paleta/${id}`,
    deletePaletaById: () => `${PaletaContext.paletaEndpoint()}/delete-paleta/${id}`,
};

export const Api = {
    baseUrl: "https://api-elgeladon.herokuapp.com",
    ...PaletaContext,
};