import { Estados, Usuario } from "./actividad.model";
import { Causalidad } from "./caracteristicas.model";
import { Estatus } from "./ejecuciones.model";


export class FarmacoVigilancia{
    id?: number;
    aplicacionSeguimiento?: string;
    cupatra?: number;
    fechaRegistro?: string;
    usuario: Usuario;
    causalidad: Causalidad;
    justificacion?: string;
    nombreNotificante?: string;
    profesionNotificante?: string;
    direccionNotificante?: string;
    telefonoNotificante?: string;
    correoNotificante?: string;
    estado: Estados;
    diagnosticoSecundario?: string;
    usoPrevioMedicamentos?: string;
    fechaInicioProceso?: string;
    fechaFinProceso?: string;
    otrosAntecedentes?: string;
    resultadosLaboratorios?: string;
    estatus: Estatus;
    fechaSeguimiento?: string;
    estaEmbaraza?: boolean;
    active?: boolean;
}

export class Frecuencia {
    id?: number;
    nombreFrecuencia?: string;
    active?: boolean;
}