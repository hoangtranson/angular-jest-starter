import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { map } from 'rxjs/operators';
import { GET_USER } from './user.action';
import { Users, UserStateModel } from './user.interface';
import { UserService } from './user.service';

@State<UserStateModel>({
  name: 'UserState',
  defaults: {
      users: []
  },
})

@Injectable()
export class UserState {
  constructor(private _userService: UserService) {}

  @Selector()
  public static users(state: UserStateModel) {
    return state.users;
  }

  @Action(GET_USER)
  public getAgentLocation({ patchState }: StateContext<UserStateModel>) {
    return this._userService.getUsers().pipe(
      map((res: any) => {
          
        patchState({
            users: res
        })
        return res;
      }),
    );
  }
}
