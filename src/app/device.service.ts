// device.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private baseUrl = 'http://localhost:8088/api/hardware'; 

  constructor(private http: HttpClient) {}
   // Méthode pour obtenir le temps du dispositif
   getDeviceTime(ipAddress: string, portNumber: number): Observable<any> {
    const params = new HttpParams()
      .set('ipAddress', ipAddress)
      .set('portNumber', portNumber.toString());
    
    // Retrieve token from local storage
    const token = localStorage.getItem('accessToken');
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    return this.http.get<any>(`${this.baseUrl}/time`, { params, headers });
  }
  getDeviceInformation(ipAddress: string, portNumber: number): Observable<any> {
    const params = new HttpParams()
      .set('ipAddress', ipAddress)
      .set('portNumber', portNumber.toString());
    
    // Retrieve token from local storage
    const token = localStorage.getItem('accessToken');
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    return this.http.get<any>(`${this.baseUrl}/information`, { params, headers });
  }


  saveDevice(device: any): Observable<any> {
    const token = localStorage.getItem('accessToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(`${this.baseUrl}`, device, { headers });
  }

  // Méthode pour vérifier l'appareil en envoyant l'adresse IP et le port
  verifyDevice(ipAddress: string, portNumber: number): Observable<string> {
    const params = new HttpParams()
      .set('ipAddress', ipAddress)
      .set('portNumber', portNumber.toString()); // Convertir le port en chaîne de caractères
    
    // Retrieve token from local storage
    const token = localStorage.getItem('accessToken');
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    return this.http.get<string>(`${this.baseUrl}/serial-number`, { params, headers });
  }

  // Méthode pour obtenir tous les appareils
  getDevices(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}

