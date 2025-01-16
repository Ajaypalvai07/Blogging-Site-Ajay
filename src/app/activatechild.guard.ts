import { CanActivateChildFn } from '@angular/router';

export const activatechildGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
