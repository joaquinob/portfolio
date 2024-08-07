import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { InfoCardComponent } from './components/pages/cards/info-card/info-card.component';
import { StackCardComponent } from './components/pages/cards/stack-card/stack-card.component';
import { SoftSkillCardComponent } from './components/pages/cards/soft-skill-card/soft-skill-card.component';
import { StudiesCardComponent } from './components/pages/cards/studies-card/studies-card.component';
import { ProyectsCardComponent } from './components/pages/cards/proyects-card/proyects-card.component';

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
        path: "softskills",
        component:SoftSkillCardComponent,
    },
    {
        path: "studies",
        component: StudiesCardComponent,
    },
    {
        path: "proyects",
        component: ProyectsCardComponent,
    }
];
