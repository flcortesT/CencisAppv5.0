import { Medicamentos } from "./caracteristicas.model";
import { Diagnosticos } from "./datosClinicos.model";

export class Desenlace {
    id?: number;
    nombreDesenlace?: string;
    active?: boolean;
}

export class detalleProducto {
    id?: number;
    producto: Producto;
    detalle?: string;
    active?: boolean;
}

export class Producto {
    id?: number;
    nombreProducto?: string;
    descripcion?: string;
    active?: boolean;
}

export class DiagnosticoxMedicamento{
    id?: number;
    diagnosticos: Diagnosticos;
    medicamento: Medicamentos;
    active?: boolean;
}

export class Dimension {
    id?: number;
    nombreDimension?: string;
    active?: boolean;
}

export class Dimensiones {
    id?: number;
    nombreDimensiones?: string;
    active?: boolean;
}

export class DimensionesReportes {
    id?: number;
    nombreDimensionesReporte?: string;
    active?: boolean;
}

export class DimensionxTipoDimension {
    id?: number;
    dimension: Dimension;
    tipoDimension: TipoDimension;
}

export class TipoDimension {
    id?: number;
    NombreTipoDimension?: string;
    active?: boolean;
}
