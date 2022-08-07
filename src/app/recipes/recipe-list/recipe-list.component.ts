import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a test',
      'https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1400/09/07/1400090712354169924151294.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
