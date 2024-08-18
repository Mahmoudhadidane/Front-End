import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeviceService } from 'app/device.service';

@Component({
  selector: 'app-create-device',
  templateUrl: './create-device.component.html',
  styleUrls: ['./create-device.component.scss']
})
export class CreateDeviceComponent  {
  device = {
    name: '',
    serialNumber: '',
    ipAddress: '',
    port: '', // port est une chaîne de caractères
    cardReader: 'MIFARE',
    communicationType: 'TCP',
    direction: 'NONE'
  };
  
  devices: any[] = [
    { id: 'device1', name: 'ZKTeco K14' },
    { id: 'device2', name: 'ZKTeco F21' },
    { id: 'device3', name: 'ZKTeco KJ33' },
  ];
  
  selectedDevice: any; // Déclaration de selectedDevice
  
  constructor(private deviceService: DeviceService, private snackBar: MatSnackBar) {}

 

  checkConfiguration() {
    
    const { ipAddress, port } = this.device;
    const portNumber = Number(port); // Convertir port en nombre
    console.log(port);
    if (!ipAddress || !port) {
      this.snackBar.open('L\'adresse IP et le port doivent être spécifiés.', 'Fermer', {
        duration: 3000,
        panelClass: ['snackbar-error']
      });
      return;
    }

    if (isNaN(portNumber) || portNumber <= 0) {
      this.snackBar.open('Le port spécifié n\'est pas valide.', 'Fermer', {
        duration: 3000,
        panelClass: ['snackbar-error']
      });
      return;
    }

    // Appeler le service pour vérifier l'appareil
    this.deviceService.verifyDevice(ipAddress, portNumber).subscribe(
      (response: any) => {
        // Supposons que la réponse est directement le numéro de série sous forme de chaîne
        console.log(response)
        if (response) {
          this.device.serialNumber = response.serialNumber; // Met à jour le numéro de série
          this.snackBar.open(`Numéro de série vérifié avec succès: ${response}`, 'Fermer', {
            duration: 3000,
            panelClass: ['snackbar-success']
          });
        } else {
          this.snackBar.open('L\'appareil n\'est pas connecté ou réponse invalide.', 'Fermer', {
            duration: 3000,
            panelClass: ['snackbar-error']
          });
        }
      },
      error => {
        this.snackBar.open('Erreur lors de la vérification de l\'appareil.', 'Fermer', {
          duration: 3000,
          panelClass: ['snackbar-error']
        });
      }
    );
  }

  deleteDevice() {
    if (this.selectedDevice) {
      console.log('Supprimer l\'appareil:', this.selectedDevice);
      // Ajoutez la logique pour supprimer l'appareil sélectionné
      this.selectedDevice = null; // Réinitialisez la sélection
    } else {
      console.log('Aucun appareil sélectionné.');
    }
  }
  
  refresh() {
    
  }

  onDeviceSelect(deviceId: string) {
    this.selectedDevice = this.devices.find(device => device.id === deviceId);
  }
}





