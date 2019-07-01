import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';
  
  posts = [
    {
      title: 'Mon premier article',
      content: 'votre PostListComponent affichera un PostListItemComponent pour chaque post dans l\'array qu\'il a reçu',
      loveIts: 2,
      created_at: Date
    },
    {
      title: 'Mon second article',
      content: 'chaque PostListItemComponent affichera le titre, le contenu et la date de création du post dans le template',
      loveIts: 0,
      created_at: Date
    } ,
    {
      title: 'Encore un article',
      content: 'les PostListItemComponent auront des boutons qui permettent d\'augmenter et de diminuer le nombre de loveIts — cette modification aura uniquement un effet sur le component, et n\'a pas besoin d\'être remontée au component parent',
      loveIts: -3,
      created_at: Date
    } 
  ]

  
}
