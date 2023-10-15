import { Component } from '@angular/core';
import * as L from 'leaflet'; //perlu install types/leaflet, ctrl+.

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map!: L.Map;

  constructor() { }
  // ngOnInit() {
  //   this.map = L.map('mapId').setView([110.3416410826356, -7.6860182143175155])
  //   //container map id

  //   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //   }).addTo(this.map);
  // }

  ionViewDidEnter() {

    this.map = L.map('mapId').setView([-7.771355052551429, 110.37790142170645], 16)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      
    }).addTo(this.map);

    // BASE MAP
    
    var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });

    var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      maxZoom: 17,
      attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    });

    var baseMaps = {
      'OpenStreetMap': osmLayer,
      'Mapbox Streets': Esri_WorldImagery,
      'Open Topo Map': OpenTopoMap 
    };
    
    L.control.layers(baseMaps).addTo(this.map);

    // MARKER POP UP
    var marker = L.marker([-7.7714607840557335, 110.37768800097494]);

    var popup = L.popup()
    .setLatLng([-7.7714607840557335, 110.37768800097494])
    .setContent("UGM")
    .openOn(this.map);

    marker.addTo(this.map);

    // L.marker([-7.7714607840557335, 110.37768800097494]).addTo(this.map)
    // .bindPopup('UGM')
    // .openPopup();

    // const markerIcon = L.icon({
    //   iconUrl: 'https://unpkg.com/lefalet@1.7.1/dist/images/marker-icon.png',
    //   iconRetinaUrl: 'https://unpkg.com/lefalet@1.7.1/dist/images/marker-icon-2x.png',
    //   shadowUrl: 'https://unpkg.com/lefalet@1.7.1/dist/images/marker-shadow.png',
    //   iconSize: [25, 41],
    //   iconAnchor: [12, 41]
    // });

    // const marker = L.marker([-7.7714607840557335, 110.37768800097494], { icon: markerIcon }).addTo(this.map);
  }

}