import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Parts } from '../models/parts';
import { User } from '../models/user';
import { PartsService } from '../parts.service';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {

  constructor(private router: Router, private partsService: PartsService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('logInUser'));
    this.partsService.fetchAllPartsService().subscribe((parts: Parts[]) => {
      this.parts = parts;
    })

  }

  user: User
  parts: Parts[]

  signOut() {
    localStorage.clear();
    this.router.navigate(['']);
  }

  addParts(partName) {
    this.partsService.addPartAmount(partName).subscribe(res => console.log(res));
    this.partsService.fetchAllPartsService().subscribe((parts: Parts[]) => {
      this.parts = parts;
    })
  }
}
