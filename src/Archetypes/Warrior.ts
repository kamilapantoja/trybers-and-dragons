import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static archetypeCount = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'stamina';
    Warrior.archetypeCount += 1;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return this.archetypeCount;
  }
}