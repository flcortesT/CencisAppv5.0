import { CaracteristicasVivienda, Medicamentos } from './caracteristicas.model';
import { Usuario } from "./actividad.model";
import { Ciudad, Paises } from "./location.model";
import { Desenlace } from './tablaMaestra.model';

export class EjecucionGestionAC_GestionAdministrativa{
    id?: number;
    gestionACAsignados: GestionACAsignados;
    City: Ciudad;
    fecha?: string;
    visitado?: string;
    especialidad?: string;
    lugarVisita?: string;
    objetivo?: string;
    personalAsistencial?: string;
    comentarios?: string;
    enfermera: string;
    fechaRegistro?: string;
}

export class GestionACAsignados {
    id?: number;
    gestionActividadComplementria: GestionActividadComplementaria;
    usuarios: Usuario;
    estadoActividad: EstadoActividad;
}

export class GestionActividadComplementaria {
    FechaSolicitud?: string;
    UsuarioSolicita?: string;
    prioridad: Prioridad;
}

export class EstadoActividad {
    id?: number;
    nombreEstadoActividad?: string;
    active?: boolean;
}

export class Prioridad {
    id?: number;
    nombrePrioridad?: string;
    active?: boolean;
}

export class EjecucionGestionAC_GestionGenerica {
    id?: number;
    gestionACAsignadas: GestionACAsignados;
    tarea?: string;
    fecha?: string;
    fechaRegistro?: string;
}

export class EjecucionGestionACApoyo {
    id?: number;
    gestionAsignadosAC: GestionACAsignados;
    tareaRealizada?: string;
    fechaEjecucion?: string;
    fechaRegistro?: string;
}

export class EjecucionGestionACCapacitacion {
    id?: number;
    gestionACAsignados: GestionACAsignados;
    tareaRealizada?: string;
    fechaEjecucion?: string;
    fechaRegistro?: string;
}

export class EjecucionGestionACClinica {
    id?: number;
    gestionACGestion: GestionACGestion;
    fechaRegistro?: string;
    fechaVisita?: string;
    grupoSanguineo: GrupoSanguineo;
    nivelEscolaridad: NivelEscolaridad;
    ocupacion: Ocupacion;
    acompanante: Acompanante;
    ParentescoAcompanante: ParentescoAcompanante;
    tipoZonaVivienda: TipoZonaVivienda;
    tipoAccesoVivienda: TipoAccesoVivienda;
    alergias?: string;
    fechaInicioTratamiento?: string;
    tiempoTratamiento?: string;
    tensionAterialDiastolica?: string;
    tensionArterialSistolica?: string;
    frecuenciaCardiaca?: string;
    frecuenciaRespiratoria?: string;
    temperatura?: string;
    pesoKg?: string;
    tallam?: string;
    imc?: string;
    clasificacionIMC?: string;
    nota?: string;
    tabaquismo?: string;
    practicaActividadFisica?: string;
}

export class GrupoSanguineo {
    id?: number;
    NombreGrupoSanguineo?: string;
    active?: boolean;
}

export class GestionACGestion{
    id?: number;
    nombreGestionACGestion?: string;
    active?: boolean;
}

export class NivelEscolaridad {
    id?: number;
    nombreNivelEscolaridad?: string;
    active?: boolean;
}

export class Ocupacion {
    id?: number;
    nombreOcupaciones?: string;
    ciiu88?: string;
    active?: boolean;
}

export class Acompanante {
    id?: number;
    nombreAcompanante?: string;
    active?: boolean;
}

export class ParentescoAcompanante{
    id?: number;
    nombreParentescoAcompanante?: string;
    active?: boolean;
}

export class TipoZonaVivienda {
    id?: number;
    nombreTipoZonaVivienda?: string;
    active?: boolean;
}

export class TipoAccesoVivienda {
    id?: number;
    nombreTipoAccesoVivienda?: string;
    active?: boolean;
}

export class EjecucionGestionACClinicaCaracteristicasVivienda {
    id?: number;
    EjecucionGestionACClinica?: string;
    caracteristicasVivienda: CaracteristicasVivienda;
    posee?: boolean;
}

export class EjecucionGestionACClinicaEnfermedades {
    id?: number;
    ejecucionGestionACClinica: EjecucionGestionACClinica;
    enfermedades: Enfermedades;
    presente?: boolean;
}

export class Enfermedades {
    id?: number;
    nombresEnfermedades?: string;
    active?: boolean;
}
export class EjecucionGestionACClinicaEventosAdversos {
    id?: number;
    ejecucionGestionACClinica: EjecucionGestionACClinica;
    tipoEventoAdverso: TiposAdversos;
    presente?: boolean;
}

export class TiposAdversos {
    id?: number;
    nombreTiposAdversos?: string;
    active?: boolean;
}

export class EjecucionGestionACClinicaTemasEducacion {
    id?: number;
    ejecucionGestionACClinica: EjecucionGestionACClinica;
    temaEducacion: TemasEducacion;
    realizado?: boolean;
}

export class TemasEducacion {
    id?: number;
    NombreTemaEducacion?: string;
    active?: boolean;
}

export class EjecucionGestionACClinicaValidaciones {
    id?: number;
    ejecucionGestionACClinica: EjecucionGestionACClinica;
    validacion?: string;
    realizada?: boolean;
}

export class EntidadesMedicamento {
    id?: number;
    nombreEntidadesMedicamento?: string;
    active?: boolean;
}

export class EPS {
    nombreEps?: string;
    Country: Paises;
    active?: boolean; 
}

export class EscalaDolor{
    id?: number;
    nombreEscalaDolor?: string;
    active?: boolean;
}

export class Especialidades {
    id?: number;
    nombreEspecialidad?: string;
    medico?: string;
    active?: boolean;
}

export class EspecialidadesxMedicamento {
    id?: number;
    nombreEspecialidadesxMedicamento?: string;
    especialidad: Especialidades;
    active?: boolean;
}

export class EsquemasAplicacion {
    id?: number;
    NameEsquemasAplicacion?: string;
    active?: boolean;
}

export class Estadio {
    id?: number;
    nombreEstadio?: string;
    active?: boolean;
}

export class EstadoActual {
    id?: number;
    nombreEstadoActual?: string;
    active?: boolean;
}

export class Estados {
    id?: number;
    nombreEstados?: string;
    homologacion?: number;
    active?: boolean;
}

export class EstadoAutorizacion {
    id?: number;
    nombreEstadoAutorizacion?: string;
    active?: boolean;
}

export class EstadoFinal {
    id?: number;
    nombreEstadoFinal?: string;
    descripcion?: string;
    active?: boolean;
    homologacion?: boolean;
}

export class EstadoGestionSocial {
    id?: number;
    nombreEstadoGestionSocial?: string;
    active?: boolean;
}

export class EstadoInscripcion {
    nombreEstadoInscripcion?: string;
    active?: boolean;
}

export class EstadoReporte {
    id?: number;
    nombreReporte?: string;
    active?: boolean;
}

export class EstadoReportes {
    id?: number;
    nombreReportes?: string;
    active?: boolean;
}

export class EstadoReportesFV {
    id?: number;
    nombreReportesFV?: string;
    active?: boolean;
}

export class EstadoSeguimientoFV {
    id?: number;
    nombreEstadoSeguimientoFV?: string;
    active?: boolean;
}

export class EstadoxEstadio {
    id?: number;
    nombreEstadoxEstadio?: string;
    active?: boolean;
}

export class EstadoxMedicamento {
    id?: number;
    medicamentos: Medicamentos;
    estado: Estados;
}

export class Estatus {
    id?: number;
    nombreEstatus?: string;
    active?: boolean;
}

export class EventoAdversoSeguimiento
{
    id?: number;
    farmacoVigilancia?: number;
    nombreEventoAdverso?: string;
    fechaInicio?: string;
    fechaFin?: string;
    eventoRelacionado?: string;
    desenlace: Desenlace;
    produjoHospitalizacion?: boolean;
    amenazaVida?: boolean;
    anomaliaCongenita?: boolean;
    produjoDiscapacidad?: boolean;
    condicionMedicaImportante?: boolean;
    muerte?: boolean;
    fechaMuerte?: string;
    autopsia?: boolean;
    causaMuerte?: string;
    medicamentoConcomitante?: string;
    fechaExpiracion?: string;
    lote?: string;
    dosis?: string;
    unidadMedida?: string;
    viaAdministracion?: string;
    frecuenciaAdministracion?: string;
    indicacionesUso?: string;
    eventoDespuesAdministrar?: string;
    suspensionFarmaco?: string;
    desaparecioEvento?: string;
    otrosFactores?: string;
    reaparecioEvento?: string;
    mismaReaccion?: string;
    ampliarInformacion?: string;
    accionesTomadas?: string;
    fechaReinicio?: string;
}

export class EventoRelacionado {
    id?: number;
    nombreEventoRelacionado?: string;
    active?: boolean;
}

