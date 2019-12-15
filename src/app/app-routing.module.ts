import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../src/app/pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TestComponent } from './pages/test/test.component';
import { RegisterComponent } from './pages/register/register.component';
import { NoticeboardComponent } from './pages/noticeboard/noticeboard.component';
import { CreateNoticeComponent } from './pages/create-notice/create-notice.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'test', component: TestComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'noticeboard', component: NoticeboardComponent },
  { path: 'new', component: CreateNoticeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
