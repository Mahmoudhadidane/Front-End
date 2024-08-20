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
  //device info 
  showInfo = false;
  deviceInfo: any = {}; // Object to store device information
constructor(private deviceService: DeviceService, private snackBar: MatSnackBar) {}
  
toggleInfo() {
  this.showInfo = !this.showInfo;
  if (this.showInfo) {
    this.fetchDeviceInfo();
  }
}

fetchDeviceInfo() {
  const { ipAddress, port } = this.device;
  const portNumber = Number(port);

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

  this.deviceService.getDeviceInformation(ipAddress, portNumber).subscribe(
    (response: any) => {
      this.deviceInfo = response.info; // Assuming response contains an `info` object with the device info
      this.snackBar.open('Informations générales récupérées avec succès.', 'Fermer', {
        duration: 3000,
        panelClass: ['snackbar-success']
      });
    },
    error => {
      this.snackBar.open('Erreur lors de la récupération des informations générales.', 'Fermer', {
        duration: 3000,
        panelClass: ['snackbar-error']
      });
    }
  );
}



loadDeviceTime() {
    const { ipAddress, port } = this.device;
    const portNumber = Number(port); // Convertir port en nombre

    if (!ipAddress || !port) {
      this.snackBar.open('L\'adresse IP et le port doivent être spécifiés.', 'Fermer', {
        duration: 3000,
        panelClass: ['snackbar-error']
      });
      return;
    }

    this.deviceService.getDeviceTime(ipAddress, portNumber).subscribe(
      (response: any) => {
        console.log(response);
        if (response && response.time) {
          // Handle the device time (response.time) here
          this.snackBar.open(`Temps de l'appareil: ${response.time}`, 'Fermer', {
            duration: 3000,
            panelClass: ['snackbar-success']
          });
        } else {
          this.snackBar.open('Erreur lors de la récupération du temps de l\'appareil.', 'Fermer', {
            duration: 3000,
            panelClass: ['snackbar-error']
          });
        }
      },
      error => {
        this.snackBar.open('Erreur lors de la récupération du temps de l\'appareil.', 'Fermer', {
          duration: 3000,
          panelClass: ['snackbar-error']
        });
      }
    );
  }

  saveDevice() {
    // Validation de l'adresse IP et du port
    const { ipAddress, port } = this.device;
    const portNumber = Number(port); // Convertir port en nombre

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

    // Sauvegarder le périphérique en appelant le service
    this.deviceService.saveDevice(this.device).subscribe(
      (response: any) => {
        this.snackBar.open('Périphérique enregistré avec succès.', 'Fermer', {
          duration: 3000,
          panelClass: ['snackbar-success']
        });
      },
      (error) => {
        this.snackBar.open('Erreur lors de l\'enregistrement du périphérique.', 'Fermer', {
          duration: 3000,
          panelClass: ['snackbar-error']
        });
      }
    );
  }

 

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





