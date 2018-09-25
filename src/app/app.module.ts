import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { routing } from './app.routes';
import { CVComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { BlogsComponent } from './blogs/blogs.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductComponent,
        NavComponent,
        FooterComponent,
        EducationComponent,
        SkillsComponent,
        WorkComponent,      
        ContactComponent,
        AboutComponent,
        CVComponent,
        HomeComponent,
        ExperienceComponent,
        BlogsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    exports: [RouterModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
