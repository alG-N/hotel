import * as migration_20260202_075410 from './20260202_075410';
import * as migration_20260224_195212 from './20260224_195212';
import * as migration_20260224_210332 from './20260224_210332';
import * as migration_20260224_211209 from './20260224_211209';

export const migrations = [
  {
    up: migration_20260202_075410.up,
    down: migration_20260202_075410.down,
    name: '20260202_075410',
  },
  {
    up: migration_20260224_195212.up,
    down: migration_20260224_195212.down,
    name: '20260224_195212',
  },
  {
    up: migration_20260224_210332.up,
    down: migration_20260224_210332.down,
    name: '20260224_210332',
  },
  {
    up: migration_20260224_211209.up,
    down: migration_20260224_211209.down,
    name: '20260224_211209'
  },
];
