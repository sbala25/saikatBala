import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ContactComponent } from './components/contact/contact.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ExperienceComponent } from './components/experience/experience.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'blogs', component: BlogsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'experience', component: ExperienceComponent },
];
