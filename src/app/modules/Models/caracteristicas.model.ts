import { Sexo, Usuario } from "./actividad.model";
import { Paises, Zonas } from "./location.model";

export class CaracteristicasVivienda {
    id?: number;
    nombreCaracteristicas?: string;
    active?: boolean;
}

export class Causalidad {
    id?: number;
    nombreCausalidad?: string;
    active?: boolean;
}

export class CausalInterrupcionSueno{
    id?: number;
    causalInterrupcion?: string;
    active?: boolean;
}

export class CausalNoIngresos {
    id?: number;
    nombreCausalNoIngresos?: string;
    active?: boolean;
}

export class CIE {
    id?: number;
    diagnostico?: string;
    codigo?: string;
    sexo: Sexo;
    rangoTiempoInferior: string;
    rangoTiempoSuperior: string;
    rangoSuperior?: number;
    rangoInferior?: number;
    active?: boolean;
}

export class CieMedicamento { 
    id?: number;
    cie: CIE;
    medicamentos: Medicamentos;
    active?: boolean;
}

export class Comorbilidad {
    id?: number;
    nombreComorbilidad?: string;
    active?: boolean;
}

export class ConfiguracionUsuarioGeneral {
    id?: number;
    usuarios: Usuario;
    medicamentos: Medicamentos;
}

export class ConfiguracionUsuarioDistrito{
    id?: number;
    usuarios: Usuario;
    medicamentos: Medicamentos;
    distrito: Distritos;
    perfiles: Perfiles;
}

export class ConfiguracionUsuarioZonas {
    id?: number;
    usuarios: Usuario;
    perfiles: Perfiles;
    medicamentos: Medicamentos;
    zonas: Zonas;
}

export class ConsentimientoGS{
    id?: number;
    nombreConsentimiento?: string;
    active?: boolean;
}

export class Perfiles {
    id?: number;
    nombrePerfiles?: string;
    myTipoConfiguracion: TipoConfiguracion;
    active?: boolean;
}

export class TipoConfiguracion {
    id?: number;
    tipoConfiguracion?: string;
    active?: boolean;
}
export class Distritos{
    id?: number;
    nombreDistrito?: string;
    active?: boolean;
}
export class Medicamentos{
    nombreMedicamento?: string;
    laboratorios: Laboratorios;
    diasReinicio?: string;
    esVitalnoDisponible?: boolean;
    active?: boolean;
}

export class MedicosActivos{
    medicoId: number;
    nombreMedico?: string;
    medicamentosId: number;
    nombreMedicamento?: string;
    active?: boolean;
}

export class ApiReponseMedicos {
    isSuccess: boolean;
    message: MedicosActivos[];
}


export class Laboratorios {
    nombreLaboratorio?: string;
    active?: boolean;
}