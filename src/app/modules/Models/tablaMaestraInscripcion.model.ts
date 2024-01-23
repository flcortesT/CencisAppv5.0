
import { TipoIdentificacion } from "./actividad.model";
import { CausalNoIngresos, Distritos, Laboratorios, Medicamentos } from "./caracteristicas.model";
import { Diagnosticos, Medico } from "./datosClinicos.model";
import { EPS, Estados } from "./ejecuciones.model";
import { Ciudad, Departamento, Paises, Zonas } from "./location.model";
import { ZonasEnfermeras } from "./tablaMaestraTablasSecundarias.model";

/// Tabla de inscripción inicial de pacientes el cual va cambiando al flujo de registro.
export class Inscripcion {
    cupatra?: number;
    medicamentos: Medicamentos;
    laboratorios: Laboratorios;
    consentimiento?: boolean;
    medicoFormulador?: string;
    medicoActual?: string;
    fechaFormula?: string;
    soporte?: string;
    valoracionIPS?: string;
    cuidador?: string;
    parentesco?: string;
    referencia?: string;
    fechaInscripcion?: string;
    zonasEnfermera?: string;
    distritos: Distritos;
    observaciones?: string;
    estados: Estados;
    promotor?: string;
    enfermera?: string;
    idcat?: string;
    ultimoSeguimiento?: string;
    proximoSeguimiento?: string;
    causaRetiro?: string;
    motivoNoAdherencia?: string;
    ultimaAplicacion?: string;
    periocidad?: string;
    puntoEntrega?: string;
}

export class ReporteInscripcion {
    medicamentos: Medicamentos;
    zonasEnfermeras: ZonasEnfermeras;
    tipoIdenticacion: TipoIdentificacion;
    nroIdentificacion: string;
    nombres: string;
    telefono1: string;
    telefono2: string;
    ciudad: Ciudad;
    medicoTratante: Medico;
    eps: EPS;
    fechaFormula: string;
    reportante: string;
    emailReportante: string;
    zona: Zonas;
    departamento: Departamento;
    pais: Paises;
    diagnostigo: Diagnosticos;
    causalNoIngresos: CausalNoIngresos;
    consentimientoIng: boolean;
    formuladiganostica: boolean;
    hcDiagnostico: boolean;
    ccadres: boolean;
    comentariosGrales: string;
    nroReporteWeb: string;
    ipsAtencion: string;
    pathArchivo: string;
    tamanoArchivo: string;
    fechaArchivoGrabado: string;
}