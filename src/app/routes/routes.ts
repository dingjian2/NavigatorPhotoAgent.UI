import { LayoutComponent } from '../layout/layout.component';

import { HomeComponent } from './home/home.component';
import { DiagnosticsComponent } from './diagnostics/components/diagnostics';


const routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'diagnostics', component: DiagnosticsComponent },
      // { path: 'references', component: ReferencesComponent },
      // { path: 'details/:id', component: DetailsComponent },
      // { path: 'maps', component: MapsComponent },
      { path: '**', redirectTo: 'home' }
    ]

  },

  // Not found
  { path: '**', redirectTo: 'home' }

];

export default routes;
