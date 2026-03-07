import * as migration_20260306_232146_init_schema from './20260306_232146_init_schema';
import * as migration_20260307_020602 from './20260307_020602';

export const migrations = [
  {
    up: migration_20260306_232146_init_schema.up,
    down: migration_20260306_232146_init_schema.down,
    name: '20260306_232146_init_schema',
  },
  {
    up: migration_20260307_020602.up,
    down: migration_20260307_020602.down,
    name: '20260307_020602'
  },
];
