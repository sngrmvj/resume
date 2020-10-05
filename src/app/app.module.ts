import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';
import { WorkexperienceComponent } from './workexperience/workexperience.component';
import { HomeComponent } from './home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { ViewcardComponent } from './viewcard/viewcard.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkexperienceComponent,
    HomeComponent,
    ResumeComponent,
    ProjectsComponent,
    ViewcardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:
  [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
