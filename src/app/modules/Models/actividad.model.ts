import { Perfiles } from "./caracteristicas.model";
import { Estados } from "./ejecuciones.model";
import { City, State, Country } from "./location.model";

export class AccionActual {
    id?: number;
    nombreAccionActual?: string;
    estado?: string;
    active?: boolean;
}

export class Acciones {
    nombreAccion?: string;
    active?: boolean;
}

export class AccionesxMedicamento {
    nombreAccionMedicamento?: string;
    active?: boolean;
}

export class AccionTomada {
    id?: number;
    nombreAccionTomada?: string;
    active?: boolean;
}

export class ActividadComplementaria {
    nombreActividadComplementaria?: string;
    active?: boolean;
}


export class PeriodoConvulsiones {
    nombrePeriodoConvulsiones?: string;
    active?: boolean;
}

export class Afiliacion {
    id?: number;
    paciente?: Paciente;
    regimen?: Regimen;
    fechaRegistro?: string;
    active?: boolean;
}

export class Regimen {
    id?: number;
    nombreRegimen?: string;
    active?: boolean;
}

export class Paciente {
    id?: number;
    tipoIdentificacion?: TipoIdentificacion;
    nroIdentificacion?: string;
    nombres?: string;
    apellidos?: string;
    sexo: Sexo;
    fechaNacimiento: string;
    edad?: number;
    telefono1?: string;
    telefono2?: string;
    telefono3?: string;
    direccion1?: string;
    direccion2?: string;
    email?: string;
    regimen: Regimen;
    City: City;
    Country: Country;
    usuario: Usuario;
}

export class TipoIdentificacion {
    id?: number;
    nombreTiposIdentificacion?: string;
    abreviatura?: string;
    homologacion?: string;
    active?: boolean;
}

export class Sexo {
    id?: number;
    nombreSexo?: string;
    active?: boolean;
}

export class Usuario {
    id?: number;
    userName?: string;
    session?: string;
    email?: string;
    phone?: string;
    enfermera?: boolean;
    active?: boolean;
}

export class AplicacionAgrupada {
    id?: number;
    cupatra?: number;
    maximaAplicacion?: number;
}

export class AplicacionSeguimiento {
    id?: number;
    cupatra?: number;
    fechaRegistro?: string;
    usuario: Usuario;
    Country: Country;
    State: State;
    City: City;
    ips: IPS;
    fechaAplicacion?: string;
    escalaDolor: EscalaDolor;
    esquemaAplicacion: EsquemaAplicacion;
    fechaProximaAplicacion?: string;
    reporteSituacionesEspeciales?: string;
    notaEnfermeria?: string;
    motivoadherencia: string;
    fechaRetiro?: string;
    fechaSuspensionMedicamento?: string;
    fechaReactivacion?: string;
    fechaProximosSeguimientos?: string;
    notaSeguimiento?: string;
    condicionSalud?: string;
    fechaFormula?: string;
    estados: Estados;
    farmacia: Farmacia;
    puntoEntrada?: string;
    active?: boolean;
}


export class AplicacionSeguimientoVitales{
    id?: number;
    aplicacionSeguimiento: AplicacionSeguimiento;
    fechaCitaMedica?: string;
    proximaEntrega?: string;
    proximaRadicacionInvima?: string;
    finalMedicamentoentregado?: string;
    finalAutorizado?: string;
}

export class Farmacia {
    nombreFarmacia?: string;
    Country: Country;
    active?: boolean;
}

export class IPS {
    nombreIps?: string;
    active?: boolean;
}

export class EscalaDolor {
    id?: number;
    nombreEscalaDolor?: string;
    active?: boolean;
}

export class EsquemaAplicacion {
    nameEsquemaAplicacion?: string;
    active?: boolean;
}

export class AsignacionPerfil{
    asignacionPerfil?: number;
    perfiles?: Perfiles;
    ciudad?: City;
    Enfermera?: boolean;
}

export class MaestraActividad {
    detalleActividad?: string;
    active?: boolean;
}

export class MaestraDatosClinicos {
    detalleActividad?: string;
    active?: boolean;
}

export class MaestraCaracteristicas {
    DetalleCaracteristicas?: string;
    active?: boolean;
}


