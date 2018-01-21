import { Routes } from '@angular/router'

import { UsersComponent } from './components/users/users.component';
import { CartComponent } from './components/cart/cart.component';
import { I1Component } from './components/i1/i1.component';
import { I2Component } from './components/i2/i2.component';
import { I3Component } from './components/i3/i3.component';

import { AccessCartGuard } from './guards/access-cart.guard'

export const appRoute: Routes = [
    {
        path: "", component: UsersComponent
    },{
        path: "cart", canActivate: [
            AccessCartGuard
        ], children: [
            { path: "", component: CartComponent },
            { path: "i1", component: I1Component },
            { path: "i2/:id", component: I2Component },
            { path: "i3", component: I3Component }
        ]
    }
]