import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { InfoCardComponent } from './components/pages/cards/info-card/info-card.component';
import { StackCardComponent } from './components/pages/cards/stack-card/stack-card.component';
import { StudiesCardComponent } from './components/pages/cards/studies-card/studies-card.component';
import { ProyectsCardComponent } from './components/pages/cards/proyects-card/proyects-card.component';
import { HobbiesCardComponent } from './components/pages/cards/hobbies-card/hobbies-card.component';
import { CvComponent } from './components/pages/cv/cv.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
    },
    {
        path: "me",
        component: InfoCardComponent,
    },
    {
        path: "stack",
        component: StackCardComponent,
    },
    {
        path: "studies",
        component: StudiesCardComponent,
    },
    {
        path: "proyects",
        component: ProyectsCardComponent,
    },
    {
        path: "cv",
        component: CvComponent,
    },
    {
        path: "hobbies",
        component: HobbiesCardComponent,
    }
];
