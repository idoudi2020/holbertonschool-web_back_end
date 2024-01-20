import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof sqft !== 'number') throw TypeError('Sqft must be a number');
    if (typeof floors !== 'number') throw TypeError('Floors must be a number');
    super(sqft);
    this._floors = floors;
  }

  // Getters

  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }

  // Setters

  set sqft(newSqft) {
    if (typeof newSqft !== 'number') throw TypeError('Sqft must be a number');
    this._sqft = newSqft;
  }

  setFloors(newfloor) {
    if (typeof newfloor !== 'number') throw TypeError('Floors must be a number');
    this._floors = newfloor;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
