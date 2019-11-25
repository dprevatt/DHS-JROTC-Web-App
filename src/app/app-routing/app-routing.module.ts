    import { RouterModule, Routes } from '@angular/router';
    import { NgModule } from '@angular/core';
    import { HomeComponent } from '../home/home.component';

    const routes: Routes = [
    // {
    //     path: '/my-new-route',
    //     component: MyNewRouteComponent,
    // },
    {
        path: '',
        component: HomeComponent,
    }
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }