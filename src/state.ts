export type StateProps = {
  shipmentId?: number;
  toAddress: string;
  fromAddress: string;
  toZipCode: string;
  fromZipCode: string;
  weight: number;
  marks: string[];
};

const generateShipmentId = () => Date.now();

export class State {
  private _shipmentId: number;
  private _toAddress: string;
  private _fromAddress: string;
  private _toZipCode: string;
  private _fromZipCode: string;
  private _weight: number;
  private _marks: string[] = [];

  constructor(options: StateProps) {
    const { shipmentId, toAddress, fromAddress, toZipCode, fromZipCode, weight, marks } = options;
    this._shipmentId = shipmentId || generateShipmentId();
    this._toAddress = toAddress;
    this._fromAddress = fromAddress;
    this._toZipCode = toZipCode;
    this._fromZipCode = fromZipCode;
    this._weight = weight;
    this._marks = marks;
  }

  get shipmentId() {
    return this._shipmentId;
  }

  get toAddress() {
    return this._toAddress;
  }

  get fromAddress() {
    return this._fromAddress;
  }

  get toZipCode() {
    return this._toZipCode;
  }

  get fromZipCode() {
    return this._fromZipCode;
  }

  get weight() {
    return this._weight;
  }

  get marks() {
    return this._marks;
  }
}
