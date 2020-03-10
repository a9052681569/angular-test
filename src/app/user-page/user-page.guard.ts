import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';


export interface ComponentCanDeactivate {
  canDeactivate: () => boolean | Observable<boolean>
}
export class UserPageGuard implements CanActivate, CanDeactivate<ComponentCanDeactivate> {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      const checkName = prompt("как зовут пользователя?")
      if(checkName === next.queryParams.name) {
        return true
      } else {
        alert('отказано в доступе')
        return false
      }
  }
  canDeactivate(
    component: ComponentCanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivate ? component.canDeactivate() : true
  }
}
