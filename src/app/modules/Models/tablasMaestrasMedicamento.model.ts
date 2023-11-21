import { Usuario } from "./actividad.model";
import { Medicamentos } from "./caracteristicas.model";
import { Country } from "./location.model";

export class MedicamentosConcomitantes {
    id?: number;
    nombreMedicamentosConcomitantes?: string;
    active?: boolean;
}

export class MedicamentosConcomitantesxMedicamento {
    id?: number;
    medicamentosConcomitantes: MedicamentosConcomitantes;
    medicamento: Medicamentos;
    active?: boolean;
}

export class MedicamentosPrevios {
    id?: number;
    nombreMedicamentosPrevios?: string;
    active?: boolean;
}

export class MedicamentosPreviosxMedicamentos {
    id?: number;
    medicamentosPrevios: MedicamentosPrevios;
    medicamentos: Medicamentos;
    active?: boolean;
}

export class MedicamentosUsuario {
    id?: number;
    medicamentos: Medicamentos;
    usuario: Usuario;
    active?: boolean;
}

export class MedicamentosxMedico{
    id?: number;
    medicamentos: Medicamentos;
    medico: Medico;
    active?: boolean;
}

export class Medico {
    id?: number;
    nombreMedico?: string;
    Country: Country;
    active?: boolean;
}

export class MotivoEnvio{
    id?: number;
    nombreMotivoEnvio?: string;
    active?: boolean;
}

export class MotivoEnvioGs {
    id?: number;
    nombreMotivoEnvioGs?: string;
    active?: boolean;
}

export class MotivoRetiro {
    id?: number;
    nombreMotivoRetiro?: string;
    descripcion?: string;
    sexo?: string;
    active?: boolean;
}

export class MotivoSuspendido {
    id?: number;
    nombreMotivoSuspendido?: string;
    definicion?: string;
    conducta?: string;
    tipoConducta?: string;
    generaReporteGS?: string;
    diasSeguiminto?: string;
    sexo?: string;
    active?: boolean;
}

export class MovimientoEnvio{
    id?: number;
    nombreMovimientoEnvio?: string;
    active?: boolean;
}