import { State, StateProps } from '../state';
import { IShipper } from '../shipper/shipper';
import { ShipperFactory, LetterShipperFactory, PackageShipperFactory, OversizedPackageShipperFactory } from '../shipper/shipper-factory';

export type ShipmentCallback = (shipment: Shipment) => void;

export class Shipment {
  private _state: State;
  private _shipperFactory: ShipperFactory;
  private _shipper: IShipper;

  constructor(state: StateProps) {
    this._state = new State(state);
    this._shipperFactory = this.assignShipperFactory(state.weight);
    this._shipper = this.assignShipper(state.fromZipCode);
  }

  private assignShipperFactory(weight: number): ShipperFactory {
    if (weight <= 15) {
      return new LetterShipperFactory();
    }

    if (weight > 15 && weight <= 160) {
      return new PackageShipperFactory();
    }

    return new OversizedPackageShipperFactory();
  }

  private assignShipper(fromZipCode: string): IShipper {
    switch (fromZipCode[0]) {
      case '1':
      case '2':
      case '3':
        return this._shipperFactory.createAirEastShipper();
      case '4':
      case '5':
      case '6':
        return this._shipperFactory.createChicagoSprintShipper();
      case '7':
      case '8':
      case '9':
        return this._shipperFactory.createPacificParcelShipper();
      default:
        return this._shipperFactory.createAirEastShipper();
    }
  }

  get shipmentId() {
    return this.state.shipmentId;
  }

  get fromAddress() {
    return this.state.fromAddress;
  }

  get toAddress() {
    return this.state.toAddress;
  }

  get cost() {
    return this._shipper.getCost(this.state.weight);
  }

  get marks() {
    return this.state.marks;
  }

  get state() {
    return this._state;
  }

  ship(): string {
    const shipmentInfo = `Shipment with the ID ${this.shipmentId} will be picked up from ${this.fromAddress} an shipped to ${this.toAddress}\n`;
    const shipmentCost = `Cost = ${this.cost.toFixed(2)}`;
    const marks = this.generateMark();

    return `${shipmentInfo}${shipmentCost}\n${marks}`;
  }

  private generateMark(): string {
    return this.state.marks
      .reduce<string[]>((acc, curr) => {
        acc.push(`**MARK ${curr.toUpperCase()}**`);
        return acc;
      }, [])
      .join('\n');
  }
}
