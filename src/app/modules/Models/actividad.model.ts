import { Medicamentos, Perfiles } from './caracteristicas.model';
import { Estados } from './ejecuciones.model';
import { Ciudad, Departamento, Paises, Zonas } from './location.model';

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
    country: Paises;
    state?: Departamento;
    Ciudad?: Ciudad;
    zona?: Zonas;
    tipoIdentificacion?: TipoIdentificacion;
    nroIdentificacion?: string;
    nombres?: string;
    sexo: Sexo;
    fechaNacimiento: string;
    edad?: number;
    telefono1?: string;
    telefono2?: string;
    telefono3?: string;
    direccion1?: string;
    direccion2?: string;
    email?: string;
    regimen?: Regimen;
    medicamentos?: Medicamentos;
    aseguradora?: string;
    fechaformula: string;
    medicotratante?: string;
    zonaenfermera?: string; 
    diagnosticopaciente?: string;
    fechaprogramacion: string;
    causalnoingreso?: string;
    puntoentrega?: string;
    nombrereportante?: string;
    emailreportante?: string;
    observaciones?: string;
    usuario: Usuario;
}

export class TipoIdentificacion {
    nombreTiposIdentificacion?: string;
    abreviatura?: string;
    homologacion?: string;
    active?: boolean;
}

export class Sexo {
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
    Country: Paises;
    State: Departamento;
    Ciudad: Ciudad;
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

export class AplicacionSeguimientoVitales {
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
    Country: Paises;
    active?: boolean;
}

export class IPS {
    nombreIps?: string;
    active?: boolean;
}


export class ApiReponseIPS {
    isSuccess: boolean;
    message: IPS[];
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

export class AsignacionPerfil {
    asignacionPerfil?: number;
    perfiles?: Perfiles;
    ciudad?: Ciudad;
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

export class ComentariosManager {
    id: string;
    icon?: string;
    image?: string;
    description?: string;
    date: string;
    extraContent?: string;
    linkedContent?: string;
    link?: string;
    useRouter?: boolean;
}
