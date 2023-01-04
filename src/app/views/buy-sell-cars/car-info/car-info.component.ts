import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { CarInfoService } from 'src/app/services/car-info/car-info.service';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.scss']
})
export class CarInfoComponent implements OnInit {

  products: any;
  url: any;
  item_data:any;

  shareData: {
    url: string;
    description?: string;
    tags?: string;
  } = {
    url: 'http://dev1.sbagh.com/',
    description: 'development state',
    tags: 'popular-cars oman',
  };
  // shareLinks: { title: string; link: string ; class:string }[] = [
  shareLinks = [
    {
      title: 'fb',
      image: '../../../../assets/images/icons/social_media_icons/facebook.png',
      class:'entypo-facebook',
      link: `https://www.facebook.com/sharer.php?u=${this.shareData?.url}`,
    },
    {
      title: 'twitter',
      image: '../../../../assets/images/icons/social_media_icons/twitter.png',
      class:'entypo-twitter',
      link: `https://twitter.com/intent/tweet?url=${this.shareData?.url}&text=${this.shareData?.description}&hashtags=${this.shareData?.tags}`,
    },
    {
      title: 'whatsapp',
      image: '../../../../assets/images/icons/social_media_icons/whatsapp.png',
      class:'entypo-whatsapp',
      link: `https://wa.me?text=${this.shareData?.url}`,
    },
    {
      title: 'instagram',
      image: '../../../../assets/images/icons/social_media_icons/instagram.png',
      class: 'entypo-instagram',
      link: 'https://www.instagram.com/sharer.php?u=${this.shareData?.url}',
    },
  ];
 

  constructor(private carService: CarInfoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchPosts();
  }
  
  fetchPosts(): void {
    this.url = window.location.href;
    var item_id = this.url.split('/')[4] ;
    this.carService.getAllPosts().subscribe(
      (response) => {
        this.products = response;
        for(var key in response){
          if(response[key]['id']==item_id){
           this.item_data=response[key]
          }
        }
      },
      (error) => {
        console.log(error);
      }
    );
  } 

  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required]);
  textarea = new FormControl('', [Validators.required],)

  getErrorMessagename(){
    if(this.name.hasError('required')){
      return 'please enter name';
    }
    return this.name.hasError('') ? 'enter name' : '';
  }

  getErrorMessageemail() {
    if (this.email.hasError('required')) {
      return 'please enter your email address';
    }
    return this.email.hasError('email') ? 'enter valid email address' : '';
  }

  getErrorMessagephone(){
    if(this.phone.hasError('required')){
      return 'please enter your mobile number';
    }
    return this.phone.hasError('phone') ? 'enter valid mobile number' : '';
  }

  getErrorMessageTextArea(){
    if(this.phone.hasError('required')){
      return 'please enter your query/feedback';
    }
    return this.phone.hasError('phone') ? 'enter query/feedback' : '';
  }

}
