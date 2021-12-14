import { IShipper } from './shipper';

const STANDARD_CHARGE_FEE_PER_OUNCE = 0.39;
const PACKAGE_CHARGE_FEE_PER_OUNCE = 0.25;
const OVERSIZED_CHARGE_FEE_PER_OUNCE = 0.39;
const ONE_DOLLAR_IN_CENT = 100;
const OVERSIZED_ADDITION_FEE = 10 * ONE_DOLLAR_IN_CENT;

export interface IAirEast extends IShipper {}

export class AirEastLetterShipper implements IAirEast {
  getCost(weight: number): number {
    return STANDARD_CHARGE_FEE_PER_OUNCE * weight;
  }
}

export class AirEastPackageShipper implements IAirEast {
  getCost(weight: number): number {
    return PACKAGE_CHARGE_FEE_PER_OUNCE * weight;
  }
}

export class AirEastOversizedShipper implements IAirEast {
  getCost(weight: number): number {
    return OVERSIZED_CHARGE_FEE_PER_OUNCE * weight + OVERSIZED_ADDITION_FEE;
  }
}
