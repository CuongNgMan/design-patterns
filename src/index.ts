import MockData from '../mock-data.json';

import { State } from './state';
import { Shipment } from './shipment/shipment';

const s = new Shipment(new State(MockData[0]));
console.log(s.ship());
