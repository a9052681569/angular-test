import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';


export interface ComponentCanDeactivate {
  canDeactivate: () => boolean | Observable<boolean>
}
export class UserPageGuard implements CanActivate, CanDeactivate<ComponentCanDeactivate>, CanLoad {
  private checkName: string;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.checkName = prompt("как зовут пользователя?")
      if(this.checkName?.toLowerCase() === next.queryParams.name?.toLowerCase()) {
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
    return component?.canDeactivate ? component.canDeactivate() : true
  }
  canLoad(route: Route): Observable<boolean> | boolean {
    
    return true
  }
}
