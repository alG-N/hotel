import * as migration_20260202_075410 from './20260202_075410';

export const migrations = [
  {
    up: migration_20260202_075410.up,
    down: migration_20260202_075410.down,
    name: '20260202_075410'
  },
];
