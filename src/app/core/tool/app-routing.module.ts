import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ``,
    loadChildren: () => import('../tool/modules/main-page/main-page.module').then((m) => m.MainPageHomeModule),
  },
  {
    path: `about-me`,
    loadChildren: () => import('./modules/about-me-page/about-me-page.module').then((m) => m.AboutMePageModule),
  },
  {
    path: `education`,
    loadChildren: () => import('./modules/education-page/education-page.module').then((m) => m.EducationPagePageModule),
  },
  {
    path: `experience`,
    loadChildren: () => import('./modules/experience-page/experience-page.module').then((m) => m.ExperiencePageModule),
  },
  {
    path: `skills`,
    loadChildren: () => import('./modules/skills-page/skills-page.module').then((m) => m.SkillsPageModule),
  },
  {
    path: `portfolio`,
    loadChildren: () => import('./modules/portfolio-page/portfolio-page.module').then((m) => m.PortfolioPageModule),
  },
  {
    path: `contact`,
    loadChildren: () => import('./modules/contact-page/contact-page.module').then((m) => m.ContactPageModule),
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
