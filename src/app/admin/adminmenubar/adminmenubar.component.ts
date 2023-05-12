import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-adminmenubar',
  templateUrl: './adminmenubar.component.html',
  styleUrls: ['./adminmenubar.component.css']
})
export class AdminmenubarComponent implements OnInit{


  constructor(private router:Router,private ar:ActivatedRoute) { }
  ngOnInit(): void {
  }
  adminhome(){
    this.router.navigate(['adminhome'],{relativeTo:this.ar})
  }
  addproduct(){
    this.router.navigate(['admindietplan'],{relativeTo:this.ar})
  }
  removeproduct(){
    this.router.navigate(['admincreate'],{relativeTo:this.ar})

  }
  exit(){
    this.router.navigate(['/login'],{relativeTo:this.ar})

  }

    



    
  }




