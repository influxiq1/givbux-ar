import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef, NgZone, SimpleChanges } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  latitude: number;
  longitude: number;
  zoom: number;
  public address: string = '';
  private geoCoder;

  // @ViewChild('search')
  public searchElementRef: ElementRef;
 public sound: any;
  public parameterid: any;
  constructor(route: ActivatedRoute,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    public apiService:ApiService) {
    console.log(route.snapshot.params.id);
    this.parameterid = route.snapshot.params.id;



  }

  ngOnInit(): void {

    setInterval(() => {

      var boxEl = document.querySelector('a-nft');
      this.sound = document.querySelector("#sound");
      boxEl.addEventListener('markerFound', function () {
        console.log('+++++++++');
        this.mapsAPILoader.load().then(() => {
          this.setCurrentLocation();
          this.geoCoder = new google.maps.Geocoder;
        });
        // boxEl.setAttribute('nft','');
        // this.sound.play();
      }.bind(this));

      boxEl.addEventListener('markerLost', function () {
        //   console.log('+++++++++',boxEl);
        console.log('++++------+++++');
        // boxEl.setAttribute('nft','');
        // this.sound.play();
      }.bind(this));
      // });  

      console.log(boxEl, '=====');
    }, 1000);






    //load Places Autocomplete
   
  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    };
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      this.address = results[0].formatted_address;
      if (status === 'OK') {
        if (results[0]) {
          this.address = results[0].formatted_address;
          this.zoom = 12;
          this.address = results[0].formatted_address;
          console.log(this.address);
          this.apiService.ResolveViaPost({latdata:latitude, londata:longitude, trackablename:this.parameterid, webaddress:this.address},'addtrackforweb').subscribe((res:any)=>{
            console.log(res,'+++++++')
          })
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }
  changed(event: any) {
    console.log('+++++++')
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
  }

}
