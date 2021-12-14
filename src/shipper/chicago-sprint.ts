import { IShipper } from './shipper';

const STANDARD_CHARGE_FEE_PER_OUNCE = 0.42;
const PACKAGE_CHARGE_FEE_PER_OUNCE = 0.2;

export interface IChicagoSprint extends IShipper {}

export class ChicagoSprintLetterShipmentShipper implements IChicagoSprint {
  getCost(weight: number): number {
    return STANDARD_CHARGE_FEE_PER_OUNCE * weight;
  }
}

export class ChicagoSprintPackageShipmentShipper implements IChicagoSprint {
  getCost(weight: number): number {
    return PACKAGE_CHARGE_FEE_PER_OUNCE * weight;
  }
}

export class ChicagoSprintOversizedShipmentShipper implements IChicagoSprint {
  getCost(weight: number): number {
    return STANDARD_CHARGE_FEE_PER_OUNCE * weight;
  }
}
