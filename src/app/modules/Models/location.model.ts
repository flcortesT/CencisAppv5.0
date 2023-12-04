export class Country{
    nombrePais?: string;
    codigoISO?: string;
    codigoAlpha2?: string;
    codigoAlpha3?: string;
    inidicativo: number;
    active?: boolean;
}

export class State{
    nombreDepartamento?: string;
    pais?: Country;
    codigo?: string;
    active?: boolean;
}

export class Ciudad {
    nombreCiudad?: string;
    codigo?: string;
    departamentoId?: State;
    homologar?: string;
    active?: boolean;
}

export class Zonas {
    nombreRegion?: string;
    states?: State;
    ciudad?: Ciudad;
    active?: boolean;
}
