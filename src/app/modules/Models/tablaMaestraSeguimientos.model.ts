import { Usuario } from "./actividad.model";
import { Estados } from "./ejecuciones.model";
import { GestionSocial } from "./tablaMaestraGestion.model";

export class SeguimientoGestionSocial {
    id?: number;
    gestionSocial: GestionSocial;
    fechaRegistro?: string;
    queja?: string;
    derechoPeticion?: boolean;
    tutela?: boolean;
    desacato?: boolean;
    apelacion?: boolean;
    tutelaSuperior?: boolean;
    accionActual: string;
    estados: Estados;
    nota?: string;
    proximoSeguimiento?: string;
}

export class SiNo {
    id?: number;
    nombreSexo?: string;
    active?: boolean;
}

export class SoporteInscripcion {
    id?: number;
    reporteInscripcion?: string;
    soporte?: string;
    fechaCargue?: string;
    usuario: Usuario;
    active?: boolean;
}

export class SoporteTratamiento {
    id?: number;
    cupatra?: number;
    soporte?: string;
    fechaCargue?: string;
    usuario: Usuario;
    active?: boolean;
}