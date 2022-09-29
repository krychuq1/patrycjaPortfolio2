import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectThumbComponent } from './components/project-thumb/project-thumb.component';
import { AppRoutingModule } from './app-routing.module';
import { GivtComponent } from './projects/givt/givt.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { OmnistratComponent } from './components/omnistrat/omnistrat.component';
import { ImareadComponent } from './components/imaread/imaread.component';
import { AxaComponent } from './components/axa/axa.component';
import { EthicComponent } from './components/ethic/ethic.component';
import { DaisyComponent } from './components/daisy/daisy.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import { Givt2Component } from './components/givt2/givt2.component';
import { AndeaComponent } from './components/andea/andea.component';
import { FooterComponent } from './footer/footer.component';
import {SeeMoreComponent} from './components/see-more/see-more.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectThumbComponent,
    GivtComponent,
    AboutComponent,
    ContactComponent,
    OmnistratComponent,
    ImareadComponent,
    AxaComponent,
    EthicComponent,
    DaisyComponent,
    Givt2Component,
    AndeaComponent,
    FooterComponent,
    SeeMoreComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
