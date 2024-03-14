export class Paises{
    nombrePais?: string;
    codigoISO?: string;
    codigoAlpha2?: string;
    codigoAlpha3?: string;
    inidicativo: number;
    active?: boolean;
}

export class Departamento{
    departamentoId: number;
    nombreDepartamento?: string;
    paisId?: number;
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

export class ApiResponse {
    isSuccess: boolean;
    message: Departamento[];
}

export class ApiReponseCity {
    isSuccess: boolean;
    message: Ciudad[];
}
