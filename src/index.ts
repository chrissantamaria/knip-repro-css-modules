import { foo } from './module-with-unused-exports';
import { baz } from './module-with-used-export';
import * as styles from './styles.module.scss';

console.log({ foo, baz });
console.log('styles.usedStyle:', styles.usedStyle);
