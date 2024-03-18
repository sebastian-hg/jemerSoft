export interface GenericInformationDTO {
    name: string;
    url: String;
}

export interface AbilityPokemonDTO {
    ability: GenericInformationDTO;
    isHidden: boolean;
    slot: number;
}

export interface PokemonTypeDTO {
    slot: number;
    type: GenericInformationDTO;
}

export interface VersionGroupDetailDTO {
    levelLearnedAt: number;
    moveLearnMethod: GenericInformationDTO;
    versionGroup: GenericInformationDTO;
}

export interface PokemonMoveDTO {
    move: GenericInformationDTO;
    versionGroupDetails: VersionGroupDetailDTO[];
}

export interface LanguageDTO {
    name: string;
    url: string;
}

export interface DescriptionDTO {
    description: string;
    language: LanguageDTO;
}

export interface InformationPokemonResponseDTO {
    id: number;
    results: GenericInformationDTO;
    weight: number;
    height:number ;
    abilities: AbilityPokemonDTO[];
    types: PokemonTypeDTO[];
    moves: PokemonMoveDTO[];
    descriptions: DescriptionDTO[];
}