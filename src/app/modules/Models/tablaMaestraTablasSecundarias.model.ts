import { Zonas } from "./caracteristicas.model";
import { City } from "./location.model";

export class TipoActividad {
    id?: number;
    nombreTipoActividad?: string;
    active?: boolean;
}

export class TipoConducta {
    id?: number;
    nombreTipoCOnducta?: string;
    active?: boolean;
}

export class TipoConfiguracionUsuario {
    id?: number;
    tipoCOnfiguracion?: string;
    active?: boolean;
}

export class TipoCorreo {
    id?: number;
    nombreTipoCorreo?: string;
    active?: boolean;
}

export class TipoDas28 {
    id?: number;
    nombreTipoDas28?: string;
    active?: boolean;
}

export class TipoDireccion {
    id?: number;
    nombreTipoDireccion?: string;
    active?: boolean;
}

export class TipoDosis {
    id?: number;
    nombreTipoDosis?: string;
    active?: boolean;
}

export class TipoDosisxMedicamento {
    id?: number;
    nombreTipoDosisxMedicamento?: string;
    active?: boolean;
}

export class TipoHAQ {
    id?: number;
    nombreTipoHAQ?: string;
    active?: boolean;
}

export class TipoIdentificacionxPais {
    id?: number;
    nombreTipoIdentificacionxPais?: string;
    active?: boolean;
}

export class TipoRango {
    id?: number;
    nombreTipoRango?: string;
    active?: boolean;
}

export class TipoReporte {
    id?: number;
    nombreTipoReporte?: string;
    active?: boolean;
}

export class TipoAccesoVehicular {
    id?: number;
    nombreTipoVehicular?: string;
    active?: boolean;
}

export class TipoTaller {
    id?: number;
    nombreTipoTaller?: string;
    active?: boolean;
}

export class TipoVisualizacion {
    id?: number;
    nombreTipoVisualizacion?: string;
    active?: boolean;
}

export class TipoVivienda {
    id?: number;
    nombreTipoVivienda?: string;
    active?: boolean;
}

export class UsoPrevioxMedicamento {
    id?: number;
    nombreUsoPrevioMedicamento?: string;
    active?: boolean;
}

export class ViaAdministracion{
    id?: number;
    nombreViaAdministracion?: string;
    active?: boolean;
}

export class ViasReport{
    id?: number;
    nombreViaReporte?: string;
    active?: boolean;
}

export class ZonasCity{
    id?: number;
    zonas: Zonas;
    City: City;
    active?: boolean;
}

export class ZonasEnfermeras {
    id?: number;
    zonas: Zonas;
    enfermera?: string;
    active?: boolean;
}