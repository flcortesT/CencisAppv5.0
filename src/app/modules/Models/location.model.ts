export class Country{
    id?: number;
    nombrePais?: string;
    codigoISO?: string;
    codigoAlpha2?: string;
    codigoAlpha3?: string;
    inidicativo: number;
    active?: boolean;
}

export class State{
    id?: number;
    nombreDepartamento?: string;
    pais?: Country;
    codigo?: string;
    active?: boolean;
}

export class City {
    id?: number;
    nombreCiudad?: string;
    codigo?: string;
    departamentoId?: State;
    homologar?: string;
    active?: boolean;
}

export class Region {
    id?: number;
    nombreRegion?: string;
    states?: State;
    ciudad?: City;
    active?: boolean;
}
