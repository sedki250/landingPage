import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Navbar } from "../../shared/navbar/navbar";
import { isPlatformBrowser, NgForOf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgForOf, NgStyle],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
selectImage:string='abdelrahman gamal/0.png'
bgColor:string='#000000'
text:string='#fff'
phoneList=[
  {img:'abdelrahman gamal/0.png',color: '#B8860B',textColor:'#fff'},
  {img:'abdelrahman gamal/1.png',color: '#93c5fd',textColor:'#000'},
  {img:'abdelrahman gamal/2.png',color: '#505050',textColor:'#fff'},
  {img:'abdelrahman gamal/3.png',color: '#EED9C4',textColor:'#000'},
  {img:'abdelrahman gamal/4.png',color: '#DC143C',textColor:'#fff'}
]
changeImage(p:any){
this.selectImage=p.img
this.bgColor=p.color
this.text=p.textColor
}


}
