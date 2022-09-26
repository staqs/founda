import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Founda-found';

  userProfile = [{
    heading : 'Emmanuel Antwi-Darkwa',
    socialHandles : [{facebook :'www.facebook.com' }, {linkedin : 'www.linkedin.com'}, {twitter : 'www.twitter.com'}],
    website : 'www.websitenew.com.gh',
    description : 'Having spent much of his professional career in various capacities at Volta River Authority (VRA), Emmanuel Antwi-Darkwa is currently the Chief Executive Officer of the Authority.',
    headline : 'Next generation of UI/UX tooling',
    category : 'CEO/Founder'
  }, 

  {
    heading : 'Akindele Ogunranti',
    socialHandles : [{facebook :'url' }, {linkedin : ''}, {twitter : ''}],
    website : '',
    description : '',
    headline : ''
  },
  {
    heading : 'Ernest De-Graft Egyir',
    socialHandles : [{facebook :'url' }, {linkedin : ''}, {twitter : ''}],
    website : '',
    description : 'Having spent much of his professional career in various capacities at Volta River Authority (VRA), Emmanuel Antwi-Darkwa is currently the Chief Executive Officer of the Authority.',
    headline : ''
  },
  {
    heading : 'Amar Deep S. Hari',
    socialHandles : [{facebook :'url' }, {linkedin : ''}, {twitter : ''}],
    website : '',
    imageUrl : 'https://ghanaceosummit.com/wp-content/uploads/2022/02/KK-Sarpong-3.jpg',
    description : 'Having spent much of his professional career in various capacities at Volta River Authority (VRA), Emmanuel Antwi-Darkwa is currently the Chief Executive Officer of the Authority.',
    headline : ''
  },
  {
    heading : 'Patricia Obo-Nai',
    socialHandles : [{facebook :'url' }, {linkedin : ''}, {twitter : ''}],
    website : '',
    description : '',
    headline : ''
  },
  {
    heading : 'ayssam Fakhry',
    socialHandles : [{facebook :'url' }, {linkedin : ''}, {twitter : ''}],
    website : '',
    description : '',
    headline : ''
  }
]

}
