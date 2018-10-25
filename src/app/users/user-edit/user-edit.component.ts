import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;

  save(): void {
    console.log(this.user.isAdmin)
    this.usersrv.change(this.user)
      .subscribe(jsonresp => {
        console.log(jsonresp);
        if(jsonresp.rc = 200) {
          this.router.navigateByUrl('/users/list');
        }
      })
  };

  constructor(
    private usersrv: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.usersrv.get(id)
      .subscribe(jsonresp => {
        console.log(jsonresp);
        this.user = jsonresp.data;
      })
  }

}
