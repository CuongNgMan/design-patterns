import { IShipper } from './shipper';

const STANDARD_CHARGE_FEE_PER_OUNCE = 0.51;
const PACKAGE_CHARGE_FEE_PER_OUNCE = 0.19;
const OVERSIZED_ADDITION_FEE = 0.02;

export interface IPacificParcel extends IShipper {}

export class PacificParcelLetterShipmentShipper implements IPacificParcel {
  getCost(weight: number): number {
    return STANDARD_CHARGE_FEE_PER_OUNCE * weight;
  }
}

export class PacificParcelPackageShipmentShipper implements IPacificParcel {
  getCost(weight: number): number {
    return PACKAGE_CHARGE_FEE_PER_OUNCE * weight;
  }
}

export class PacificParcelOversizedShipmentShipper implements IPacificParcel {
  getCost(weight: number): number {
    return (STANDARD_CHARGE_FEE_PER_OUNCE + OVERSIZED_ADDITION_FEE) * weight;
  }
}
