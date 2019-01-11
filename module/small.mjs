import { Success, Universe } from '@idgen/famous-quotes';

export function small() {
  return Success.edison() + '\n' + Universe.hawking();
}
