import { AplicacionSeguimiento, Usuario } from "./actividad.model";

export class DatosClinicos {
    id?: number;
    aplicacionSeguimiento: AplicacionSeguimiento;
    cupatra?: number;
    fechaRegistro?: number;
    medicoTratante?: string;
    usuarios: Usuario;
    diagnostico: Diagnosticos;
    usoPrevio: UsoPrevio;
    tecnologiaPrevia1: string;
    tecnologiaPrevia2: string;
    tecnologiaPrevia3: string;
    concomitante1: string;
    concomitante2: string;
    concomitante3: string;
    concomitante4: string;
    presentacionMedicamento: PresentacionMedicamento;
    dosis: Dosis;
    peso: number;
    talla: string;
    imc: string;
    especialidades: Especialidades;
    usosPrevios: UsoPrevio;
    frecuencia: Frecuencia;
    active?: boolean;
}

export class PresentacionMedicamento {
    id?: number;
    nombrePresentacionMedicamento?: string;
    active?: boolean;
}

export class Dosis {
    nombreDosis?: string;
    active?: boolean;
}

export class Especialidades {
    id?: number;
    nombreEspecialidades?: string;
    medica?: number;
    active?: boolean;
}

export class Frecuencia {
    nombreFrecuencia?: string;
    active?: boolean;
}

export class Diagnosticos{
    nombreDiagnostico?: string;
    active?: boolean;
}

export class UsoPrevio{
    nombreUsoPrevio?: string;
    active?: boolean;
}

export class DatosClinicosCimzia { 
    id?: number;
    datosClinicos: DatosClinicos;
    ppdq?: string;
    resultadoppdq?: string;
    tipoDas28?: string;
    resultadoDas28?: string;
    hlab?: string;
    resultadosHlab?: string;
    rayosx?: string;
    hlab27?: string;
    active?: boolean;
}

export class DatosClinicosFirmagon{
    id?: number;
    datosClinicos: DatosClinicos;
    psa?: string;
    comorbilidad1?: string;
    comorbilidad2?: string;
    comorbilidad3?: string;
    comorbilidad4?: string;
    comorbilidad5?: string;
    tabaquismo?: string;
    nroMesesAnosHabito?: string;
    nroCigarrillosAlDia?: string;
    periodiocidadSemanal?: string;
    DuraConMinutos?: string;

}

export class DatosClinicosMyalept{
    id?: number;
    datosClinicos: DatosClinicos;
    circunferenciaAbdominal?: string;
    glucometria?: string;
    glisemiaBasal?: string;
    hemoglobinaGlicosada?: string;
    hemoglobina?: string;
    plaquetas?: string;
    creatina?: string;
    potasio?: string;
    sodio?: string;
    leptina?: string;
    insulina?: string;
    trigliceridos?: string;
    colesterolTotal?: string;
    ldl?: string;
    hdl?: string;
    tsh?: string;
    lh?: string;
    fsh?: string;
    tgo?: string;
    tgp?: string;
    ecografiaAbdominal?: string;
    valoracionFisiatra?: string;
    valoracionNutricion?: string;
}

export class DatosClinicosSativex{
    id?: number;
    datosClinicos: DatosClinicos;
    diasTitulacion?: string;
    dosisEfectiva?: string;
    escalaEspaticidad?: string;
    presenciaDolor?: boolean;
    escalaAnalogaDolor?: string;
    nroEspamosDia?: string;
    nroDespertaresNocturnos?: string;
    causalInterrupcion?: string;
    frecuenciaUrinaria24Horas?: string;
    nroEpisodiosIncontenencia?: string;
    nroEpisodioUrgenciaUrinaria?: string;
    puntajeEncuestaCalidadVida?: string;
    tratamientoAntiespastico: TratamientoAntiespastico;
    escalaNRSSeveridad?: string;
    documentacionTitulacion?: string;
    dosisManana?: string;
    dosisTarde?: string;
    totalDosis?: string;
    beneficios?: string;
    sintomasNegativos?: string;
}

export class DatosClinicosTestMG{
    id?: number;
    datosClinicos: DatosClinicos;
    olvidaUsarMedicamentos?: boolean;
    usaMedicamentosHorasIndicadas?: boolean;
    bienDejaDeUsarlos?: boolean;
    malDejaDeUsarlos?: boolean;
    dificultades?: boolean;
    tomasOlvidadas?: boolean;
}

export class DatosClinicosVimpat {
    id?: number;
    datosClinicos: DatosClinicos;
    promedioConvulsionesDia?: string;
    periodoConvulsionesDia?: PeriodoConvulsionesDia;
    promedioConvulsionesSemana?: string;
    convulsionesDia?: string;
    convulsionesSemana?: string;
    convulsionesMes?: string;
    pregunta1?: string;
    pregunta2?: string;
    pregunta3?: string;
    pregunta4?: string;
    pregunta5?: string;
    active?: boolean;
}

export class PeriodoConvulsionesDia {
    id?: number;
    nombrePeriodoConvulsiones?: string;
    active?: boolean;
}

export class TratamientoAntiespastico {
    nombreTratamientoAntipastico?: string;
    active?: boolean;
}