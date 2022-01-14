import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tab : any ;
  profileData: any;

  constructor(
    private servicesService: ServicesService,
    private toastr : ToastrService
  ) {
    // this.toastr.toastrConfig.enableHtml = true;
   }

  ngOnInit(): void {
    this.getData();
  }

  clickMarked(check: any){
    this.tab = check;
    this.toastr.success("Interested");
    this.profileData = this.profileData.filter ((i:{id:any;})=>i.id!=check);
  }
  clickPresent(check: any){
    this.tab = check;
    this.toastr.error("Not Interested");
    this.profileData = this.profileData.filter ((i:{id1:any;})=>i.id1!=check);
  }

  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

getData(){
  this.servicesService.getJSON().subscribe(res => {
    this.profileData = res;
  })
}

}
