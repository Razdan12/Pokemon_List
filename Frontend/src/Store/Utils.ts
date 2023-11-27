export interface Pokemon {
    idPokemon: string | null;
    setIdPokemon: (idPokemon: string | null) => void;
    removeIdPokemon: () => void;
}