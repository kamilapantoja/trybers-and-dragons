import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  private static raceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 74;

    Orc.raceCount += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;    
  }

  public static createdRacesInstances(): number {
    return this.raceCount;
  }
}