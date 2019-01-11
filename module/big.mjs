import { Funny, Motivational } from '@idgen/famous-quotes';

export function big() {
  return Funny.churchill() + '\n' + Motivational.hawking();
}
