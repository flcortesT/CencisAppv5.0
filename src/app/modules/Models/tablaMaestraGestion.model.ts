import { ActividadComplementaria, Usuario } from "./actividad.model";
import { Medicamentos } from "./caracteristicas.model";
import { Estadio, EstadoActividad, Estados, Prioridad } from "./ejecuciones.model";

export class GestionACApoyo {
    id?: number;
    gestionActividadComplementaria: GestionActividadComplementaria;
    descripcionActividad?: string;
}

export class GestionACApoyoAd {
    id?: number;
    gestionActividadComplementaria: GestionActividadComplementaria;
    descripcionActividad?: string;
    cupatra?: number;
    descripcionActividadSolicitada?: string;
}

export class GestionACAsignados {
    id?: number;
    gestionActividadComplementaria: GestionActividadComplementaria;
    usuario: Usuario;
    estadoActividad: EstadoActividad;
}

export class GestionActividadComplementaria {
    id?: number;
    gestionActividadComplementaria: GestionActividadComplementaria;
    fechaSolicitud?: string;
    usuarioSolicitante?: Usuario;
    prioridad: Prioridad;
    fechaLimite?: string;
    observacion?: string;
    actividadComplementaria: ActividadComplementaria;
}

export class GestionACCapacitacion {
    id?: number;
    gestionActividadComplementaria: GestionActividadComplementaria;
    nombre?: string;
    fecha?: string;
    lugar?: string;
    caracter?: string;
    link?: string;
}

export class GestionACClinica{
    id?: number;
    gestionActividadComplementaria: GestionActividadComplementaria;
    gestionActividadCapacitacion: GestionACCapacitacion;
    cupatra?: number;
    primeraVez?: boolean;
    objetivo?: string;
}

export class GestionAcTaller {
    id?: number;
    gestionActividadComplementaria: GestionActividadComplementaria;
    tipoTaller?: string;
    nombre?: string;
    fecha?: string;
    lugar?: string;
}

export class GestionACTarea {
    id?: number;
    gestionActividadComplementaria: GestionActividadComplementaria;
    actividadSolicitada?: string;
}

export class GestionACVisita {
    id?: number;
    gestionActividadComplementaria: GestionActividadComplementaria;
    nombreMedico?: string;
    actividad?: string;
    horarioAtencion?: string;
    acompanamiento?: string;
    medicamentos: Medicamentos;
}

export class GestionReportes {
    id?: number;
    reporteInscripcion?: string;
    usuario: Usuario;
    fecha?: string;
    estado: Estados;
    estadio: Estadio;
    observacion?: string;
    fechaProgramacion?: string;
}

export class GestionSocial {
    id?: number;
    cupatra?: number;
    consentimientoAprobado?: boolean;
    fechaReporte?: string;
    fechaRegistro?: string;
}

export class MaestraGestion {
    id?: number;
    detalleGestion?: string;
    active?: boolean;
}


