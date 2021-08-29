import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AlbumsComponent } from './albums/albums.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PhotosComponent } from './photos/photos.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
     path: '', component: MainComponent,
  },
     {path: 'reactiveform', component:ReactiveFormComponent,
     children: [
      {path: 'Aboutus', component:AboutUsComponent},
    ]},
     {path: 'templateform', component:TemplateFormComponent},
     {path: 'user', component:UserComponent},  
     {path: 'albums', component:AlbumsComponent},
     {path: 'photo/:albumId', component:PhotosComponent},
     {path: '**', component:PageNotFoundComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
