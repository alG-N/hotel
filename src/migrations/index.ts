import * as migration_20260202_075410 from './20260202_075410';
import * as migration_20260224_195212 from './20260224_195212';

export const migrations = [
  {
    up: migration_20260202_075410.up,
    down: migration_20260202_075410.down,
    name: '20260202_075410',
  },
  {
    up: migration_20260224_195212.up,
    down: migration_20260224_195212.down,
    name: '20260224_195212'
  },
];
