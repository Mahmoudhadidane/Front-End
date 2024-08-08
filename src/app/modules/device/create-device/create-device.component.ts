import { Component } from '@angular/core';

@Component({
  selector: 'app-create-device',
  templateUrl: './create-device.component.html',
  styleUrls: ['./create-device.component.scss']
})
export class CreateDeviceComponent {
  selectedDevice: any = null; // Appareil sélectionné pour la configuration

  device = {
    name: '',
    serialNumber: '',
    ipAddress: '',
    port: '',
    cardReader: 'MIFARE',
    communicationType: 'TCP',
    direction: 'NONE'
  };

  devices = [
    { id: 'device1', name: 'Device 1' },
    { id: 'device2', name: 'Device 2' },
    { id: 'device3', name: 'Device 3' },
    // Ajoutez plus d'appareils ici si nécessaire
  ];
  
   // Selected device
  showInfo = false; // Flag to show/hide general information

  // Toggle the visibility of the general information section
  toggleInfo() {
    this.showInfo = !this.showInfo;
  }

  onDeviceSelect(deviceId: string) {
    this.selectedDevice = this.devices.find(device => device.id === deviceId);
    if (this.selectedDevice) {
      this.device.name = this.selectedDevice.name; // Met à jour le nom du dispositif dans le formulaire
    }
  }

  addDevice() {
    if (this.device.name && this.device.serialNumber) {
      // Logic to add a new device
      console.log('Ajouter un appareil:', this.device);
      // Réinitialisez le formulaire si nécessaire
      this.device = {
        name: '',
        serialNumber: '',
        ipAddress: '',
        port: '',
        cardReader: 'MIFARE',
        communicationType: 'TCP',
        direction: 'NONE'
      };
      this.selectedDevice = null; // Réinitialisez la sélection
    } else {
      console.log('Veuillez remplir tous les champs obligatoires.');
    }
  }

  checkConfiguration() {
    console.log('Vérifier la configuration:', this.device);
    // Ajoutez la logique pour vérifier la configuration
  }

  restartDevice() {
    console.log('Redémarrer l\'appareil:', this.selectedDevice);
    // Ajoutez la logique pour redémarrer l'appareil sélectionné
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
    console.log('Rafraîchir la liste des appareils');
    // Ajoutez la logique pour rafraîchir la liste des appareils
  }
}
