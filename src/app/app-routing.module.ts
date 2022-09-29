import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GivtComponent} from './projects/givt/givt.component';
import {AppComponent} from './app.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {OmnistratComponent} from './components/omnistrat/omnistrat.component';
import {AxaComponent} from './components/axa/axa.component';
import {ImareadComponent} from './components/imaread/imaread.component';
import {EthicComponent} from './components/ethic/ethic.component';
import {DaisyComponent} from './components/daisy/daisy.component';
import {Givt2Component} from './components/givt2/givt2.component';
import {AndeaComponent} from './components/andea/andea.component';


const routes: Routes = [
  { path: 'project/givt', component: GivtComponent },
  { path: 'project/givt2', component: Givt2Component },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'project/omnistrat', component: OmnistratComponent },
  { path: 'project/imaread', component: ImareadComponent },
  { path: 'project/insurance', component: AxaComponent },
  { path: 'project/manufacture', component: AndeaComponent },
  { path: 'project/ethic', component: EthicComponent },
  { path: 'project/daisy', component: DaisyComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
