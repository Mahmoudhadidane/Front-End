import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, ReplaySubject, switchMap, tap } from 'rxjs';
import { Navigation } from 'app/core/navigation/navigation.types';
import { AuthService } from '../auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class NavigationService
{
    private _navigation: ReplaySubject<Navigation> = new ReplaySubject<Navigation>(1);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient,private authService:AuthService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for navigation
     */
    get navigation$(): Observable<Navigation>
    {
        return this._navigation.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get all navigation data
     */
    get(): Observable<Navigation> {
        return this.authService.getRoleFromToken(localStorage.getItem('accessToken')).pipe(
            switchMap((res) => {
                console.log("role from nav ", res.role);
                return this._httpClient.post<Navigation>(`api/common/navigation`, {role: res.role}).pipe(
                    tap((navigation) => {
                        this._navigation.next(navigation);
                    })
                );
            }),
            catchError(error => {
                // Handle error
                console.error('Error fetching navigation data', error);
                return of(null); // Return an Observable that emits null or an appropriate error value
            })
        );
    }
}
