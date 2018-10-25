import { Pipe, PipeTransform } from '@angular/core';
import { User } from  '../users/user.class';

@Pipe({
  name: 'searchUsers'
})
export class SearchUsersPipe implements PipeTransform {

  transform(users: User[], searchCriteria: string): User[] {
    if(searchCriteria === '') {
      return users;
    }
    let filteredUsers: User[] = [];
    for(let user of users) {
      if(user.UserName.includes(searchCriteria) || 
      user.FirstName.includes(searchCriteria) ||
      user.LastName.includes(searchCriteria) ||
      user.Phone.includes(searchCriteria) ||
      user.Email.includes(searchCriteria)) {
        filteredUsers.push(user);
      }
    }
    return filteredUsers;
  }
}
