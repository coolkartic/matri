import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {

  profileDetail: any;
  profileData: any;
  id: any;
  profileDatas: any;
  profileimg: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private servicesService: ServicesService
  ) { }

  ngOnInit(): void {
    this.getData();
    this.getDatas();
    // let id = this.activeRoute.snapshot.paramMap.get('id');
    // this.profileData = this.profileDetail.filter((x: { id: string | null; })=>x.id==id);
    // console.log(this.profileData, "pppp");
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 500,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

 
  getData(){
    this.servicesService.getJSON().subscribe(res => {
      this.profileDetail = res;
      let id = this.activeRoute.snapshot.paramMap.get('id');
      this.profileData = this.profileDetail.filter((x: { id: string | null; })=>x.id==id);
      this.profileimg = this.profileData[0].image;
    })
  }
    
  getDatas(){
    this.servicesService.getImgJSON().subscribe(res => {
      this.profileDatas = res;
    })
  }

}
