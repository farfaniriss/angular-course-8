import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  template: `
    <p>
      user-detail works!
    </p>
  `,
  styles: []
})
export class UserDetailComponent implements OnInit {

  constructor(private router: ActivatedRoute) { 
    this.router.parent.params.subscribe( params => {
      console.log(params);
    })
  }

  ngOnInit() {
  }

}
