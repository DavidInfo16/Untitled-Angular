import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  rawj4v4: string = ' '
  raw312d: string = ' '
  raw06h7: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Untitled')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Untitled',
      },
    ])
  }
}
