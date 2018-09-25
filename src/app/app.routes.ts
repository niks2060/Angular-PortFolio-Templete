import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { CVComponent } from './cv/cv.component';
import { BlogsComponent } from './blogs/blogs.component';





// Route Configuration
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'education', component: EducationComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'skill', component: SkillsComponent },
    { path: 'work', component: WorkComponent },
    { path: 'cv', component: CVComponent },
    { path: 'blogs', component: BlogsComponent }
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);