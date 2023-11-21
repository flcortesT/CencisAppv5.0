
import { Distritos, Laboratorios, Medicamentos } from "./caracteristicas.model";
import { Estados } from "./ejecuciones.model";

export class Inscripcion {
    id?: number;
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
    puntoEntrada?: string;
}