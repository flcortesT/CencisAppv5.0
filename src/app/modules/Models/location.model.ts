import { Farmacia } from "./actividad.model";
import { EPS } from "./ejecuciones.model";

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
    paisId?: number;
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

export class ApiResponseZona {
    isSuccess: boolean;
    message: Zonas[];
}

export class ApiResponseEPS {
    isSuccess: boolean;
    message: EPS[];
}

export class ApiResponseFarmacias {
    isSuccess: boolean;
    message: Farmacia[];
}
