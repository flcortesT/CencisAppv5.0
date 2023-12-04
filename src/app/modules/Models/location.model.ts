export class Paises{
    nombrePais?: string;
    codigoISO?: string;
    codigoAlpha2?: string;
    codigoAlpha3?: string;
    inidicativo: number;
    active?: boolean;
}

export class Departamento{
    nombreDepartamento?: string;
    pais?: Paises;
    codigo?: string;
    active?: boolean;
}

export class Ciudad {
    nombreCiudad?: string;
    codigo?: string;
    departamentoId?: Departamento;
    homologar?: string;
    active?: boolean;
}

export class Zonas {
    nombreRegion?: string;
    Departamentos?: Departamento;
    ciudad?: Ciudad;
    active?: boolean;
}
