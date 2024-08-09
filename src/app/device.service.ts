// device.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private baseUrl = 'http://localhost:8088/api/hardware'; 

  constructor(private http: HttpClient) {}

  // Méthode pour vérifier l'appareil en envoyant l'adresse IP et le port
  verifyDevice(ipAddress: string, portNumber: number): Observable<string> {
    const params = new HttpParams()
      .set('ipAddress', ipAddress)
      .set('portNumber', portNumber.toString()); // Convertir le port en chaîne de caractères

    return this.http.get<string>(`${this.baseUrl}/serial-number`, { params });
  }

  // Méthode pour obtenir tous les appareils
  getDevices(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}
