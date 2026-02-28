import * as migration_20260202_075410 from './20260202_075410';
import * as migration_20260224_195212 from './20260224_195212';
import * as migration_20260224_210332 from './20260224_210332';
import * as migration_20260224_211209 from './20260224_211209';
import * as migration_20260228_000001 from './20260228_000001';
import * as migration_20260228_065221_add_localization from './20260228_065221_add_localization';

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
    name: '20260224_211209',
  },
  {
    up: migration_20260228_000001.up,
    down: migration_20260228_000001.down,
    name: '20260228_000001',
  },
  {
    up: migration_20260228_065221_add_localization.up,
    down: migration_20260228_065221_add_localization.down,
    name: '20260228_065221_add_localization'
  },
];
