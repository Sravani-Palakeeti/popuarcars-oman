import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showrooms',
  templateUrl: './showrooms.component.html',
  styleUrls: ['./showrooms.component.scss']
})
export class ShowroomsComponent implements OnInit {
  showroom = [
    { 
      image: "../../../../assets/images/about/MUSCAT.jpg",
      name: "muscat branch",
      address: "Post Box-156, Postal Code-112, Qurum, Wilayat, Muscat",
      phone: "96330422"
     },
    //  { 
    //   image: "../../../../assets/images/about/bidaya_270x220.jpg",
    //   name: "bidaya branch",
    //   address: "Post Box-470, Postal Code-321, Bidaya, Batinah.",
    //   phone: "96119121"
    //  },
     { 
      image: "../../../../assets/images/about/sohar_270x220.jpg",
      name: "sohar branch",
      address: "Post Box-470, Postal Code-321, Sohar, Batinah.",
      phone: "96119121"
     },
     { 
      image: "../../../../assets/images/about/Salalah_Showroom.jpg",
      name: "salalah branch",
      address: "Post Box-2594, Postal Code-211, Salalah, Dhofar",
      phone: "96309595"
     },
     { 
      image: "../../../../assets/images/about/nizwa_270x220.jpg",
      name: "nizwa branch",
      address: "Post Box-278,Postal Code-611, Nizwa, Dakhiliyah.",
      phone: "94290288"
     },
     { 
      image: "../../../../assets/images/about/Ibri-NISSAN-Showroom.jpg",
      name: "ibri branch",
      address: "Post Box-380, Postal Code-616, Ibri, Dakhiliyah",
      phone: "94290288"
     }
    ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
