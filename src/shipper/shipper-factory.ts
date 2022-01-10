import { AirEastLetterShipper, AirEastOversizedShipper, AirEastPackageShipper, IAirEast } from './air-east';
import { ChicagoSprintLetterShipmentShipper, ChicagoSprintOversizedShipmentShipper, ChicagoSprintPackageShipmentShipper, IChicagoSprint } from './chicago-sprint';
import { IPacificParcel, PacificParcelLetterShipmentShipper, PacificParcelOversizedShipmentShipper, PacificParcelPackageShipmentShipper } from './pacific-parcel';

export interface ShipperFactory {
  createAirEastShipper(): IAirEast;
  createChicagoSprintShipper(): IChicagoSprint;
  createPacificParcelShipper(): IPacificParcel;
}

export class LetterShipperFactory implements ShipperFactory {
  createAirEastShipper(): IAirEast {
    return new AirEastLetterShipper();
  }
  createChicagoSprintShipper(): IChicagoSprint {
    return new ChicagoSprintLetterShipmentShipper();
  }
  createPacificParcelShipper(): IPacificParcel {
    return new PacificParcelLetterShipmentShipper();
  }
}

export class PackageShipperFactory implements ShipperFactory {
  createAirEastShipper(): IAirEast {
    return new AirEastPackageShipper();
  }
  createChicagoSprintShipper(): IChicagoSprint {
    return new ChicagoSprintPackageShipmentShipper();
  }
  createPacificParcelShipper(): IPacificParcel {
    return new PacificParcelPackageShipmentShipper();
  }
}

export class OversizedPackageShipperFactory implements ShipperFactory {
  createAirEastShipper(): IAirEast {
    return new AirEastOversizedShipper();
  }
  createChicagoSprintShipper(): IChicagoSprint {
    return new ChicagoSprintOversizedShipmentShipper();
  }
  createPacificParcelShipper(): IPacificParcel {
    return new PacificParcelOversizedShipmentShipper();
  }
}
