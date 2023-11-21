import { AccionActual, AplicacionSeguimiento, Farmacia, Regimen, Usuario } from "./actividad.model";
import { Distritos, Laboratorios, Medicamentos, Perfiles, Zonas } from "./caracteristicas.model";
import { PresentacionMedicamento } from "./datosClinicos.model";
import { EstadoAutorizacion, Estados } from "./ejecuciones.model";
import { Country } from "./location.model";
import { TipoDimension } from "./tablaMaestra.model";

export class Ocupaciones {
    id?: number;
    nombreOcupaciones?: string;
    ciiu88?: string;
    active?: boolean;
}

export class OpcionesGenericas {
    id?: number;
    nombreOpcionesGenericas?: string;
    active?: boolean;
}

export class OpcionesMenuUsuario {
    id?: number;
    opcionMenu: string;
    perfiles: Perfiles;
    laboratorios: Laboratorios;
}

export class OpcionMenu {
    id?: number;
    opcionMenuName?: string;
    opcionPadre?: string;
    link?: string;
    vistaParcial?: string;
    active?: boolean;
}

export class CountryesxUsuario {
    id?: string;
    usuario: Usuario;
    Country: Country;
    active?: boolean;
}

export class Parentesco {
    id?: number;
    nombreParentesco?: string;
    active?: boolean;
}

export class PerfilUsuario {
    id?: number;
    perfiles: Perfiles;
    usuario: Usuario;
    fechaActivacion?: string;
    fechaInactivacion?: string;
    active?: boolean;
}

export class PresentacionMedicamentoxMedicamento {
    id?: number;
    presentacionMedicamento: PresentacionMedicamento;
    medicamentos: Medicamentos;
    active?: boolean;
}

export class ProcesoInstaurado {
    id?: number;
    nombreProcesoInstaurado?: string;
    active?: boolean;
}

export class PeriocidadEntrega {
    id?: number;
    nombrePeriocidadEntrega?: string;
    active?: boolean;
}

export class ProcesosAdministrativos {
    id?: number;
    aplicacionSeguimiento: AplicacionSeguimiento;
    usuario: Usuario;
    cupatra?: number;
    fechaRegistro?: string;
    fechaRadicacion?: string;
    estadoAutorizacion: EstadoAutorizacion;
    fechaRespuestaAut?: string;
    fechaEntregaMedicamento?: string;
    fechaUltimaFormula?: string;
    periocidadEntrega: PeriocidadEntrega;
    farmaciaEntrega?: string;
    acompanamientoPermanente?: boolean;
    procesoInstaurado?: boolean;
    reporteAGS?: boolean;
    consentimientoInformado?: boolean;
    motivoEnvioGS?: string;
    fechaReporteEnfermeraGS?: string;
    observacion?: string;
    tipoActividad?: string;
    fechaActividad?: string;
    estados: Estados;
    accionActual: AccionActual;
    fechaSeguimiento: string;
    notaSeguimiento: string;
    fechaRadicacionPI?: string;
    active?: boolean;
}

export class ProcesosInstaurados {
    id?: number;
    procesosAdministrativos: ProcesosAdministrativos;
    procesoInstaurado?: string;
    procesoAdministrativo?: string;
    numero?: string;
    fechaRadicacion?: string;
    respuestaProcesoInstaurado?: string;
}

export class RangosTiempo {
    id?: number;
    nombreRangoTiempo?: string;
    active?: boolean;
}

export class Reemplazos {
    id?: number;
    usuarioAReemplazar?: string;
    usuarioReemplazante?: string;
    fechaInicio?: string;
    fechaFin?: string;
    active?: boolean;
}

export class Referente {
    id?: number;
    nombreReferente?: string;
    Country: Country;
    active?: boolean;
}

export class RegimenxCountry {
    id?: number;
    regimen: Regimen;
    Country: Country;
    active?: boolean;
}

export class Reinicios {
    id?: number;
    cupatra?: number;
    laboratorios: Laboratorios;
    medicamentos: Medicamentos;
    cup?: string;
    consentimientoInformado?: boolean;
    medicoFormulador?: string;
    medicoActual?: string;
    farmacia: Farmacia;
    fechaFormula?: string;
    ips?: string;
    cuidador?: string;
    parentesco: Parentesco;
    fechaInscripcion?: string;
    zonas: Zonas;
    distrito?: Distritos;
    observaciones?: string;
    estados: Estados;
    promotor?: string;
    enfermera?: string;
    idcat?: string;
    ultimoSeguimiento?: string;
    proximoSeguimiento?: string;
    causaRetiro?: string;
    motivoNoAhderencia?: string;
    ultimaAplicacion?: string;
    periocidad?: string;
}

export class Reportes {
    id?: number;
    nombreReporte?: string;
    tipoReporte?: string;
    descripcion?: string;
    tipoDimension: TipoDimension;
    tipoRango?: string;
    tipoVisualizacion?: string;
    active?: boolean;
}

export class ReporteUsuario {
    id?: number;
    reporte: Reportes;
    usuario: Usuario;
}



 