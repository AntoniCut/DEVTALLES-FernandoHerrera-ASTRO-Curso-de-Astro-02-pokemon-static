//  ----------------------------------------------------------------
//  ----------  /02/pokemon-static/  -------------------------------
//  ----------  /src/interfaces/pokemon-list.response.ts  ----------
//  ----------------------------------------------------------------


/*
    Para crear la interfaz de usuario ...
    Copiamos la Respuesta de la API => Paleta de Comandos => Paste JSON as Code
*/

export interface PokemonListResponse {
    count:    number;
    next:     string;
    previous: null;
    results:  Result[];
}

export interface Result {
    name: string;
    url:  string;
}
