import { Component } from '@angular/core';

@Component({
  selector: 'app-create-device',
  templateUrl: './create-device.component.html',
  styleUrls: ['./create-device.component.css']
})
export class CreateDeviceComponent {
  devices: Array<any> = [];
  selectedDevice = {
    name: '',
    serialNumber: '',
    ipAddress: '',
    port: '',
    cardReader: 'MIFARE',
    communicationType: 'TCP',
    date: '',
    time: '',
    status: 'Inactif',
    userCount: 0,
    fingerprintCount: 0,
    cardCount: 0,
    faceCount: 0
  };

  addDevice() {
    this.devices.push({ ...this.selectedDevice });
    this.clearForm();
  }

  deleteDevice(index: number) {
    this.devices.splice(index, 1);
  }

  checkConfiguration() {
    // Logique pour vérifier la configuration
    alert('Configuration vérifiée');
  }

  restartDevice() {
    // Logique pour redémarrer l'appareil
    alert('Appareil redémarré');
  }

  clearForm() {
    this.selectedDevice = {
      name: '',
      serialNumber: '',
      ipAddress: '',
      port: '',
      cardReader: 'MIFARE',
      communicationType: 'TCP',
      date: '',
      time: '',
      status: 'Inactif',
      userCount: 0,
      fingerprintCount: 0,
      cardCount: 0,
      faceCount: 0
    };
  }
}
