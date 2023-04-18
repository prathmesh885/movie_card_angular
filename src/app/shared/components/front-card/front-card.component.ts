import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IMovie } from '../../model/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-front-card',
  templateUrl: './front-card.component.html',
  styleUrls: ['./front-card.component.scss']
})
export class FrontCardComponent implements OnInit {

  movieCard!: IMovie;
  cardId!: number;
  movieImg!: string;
  // serachBarDisable: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.cardId = +params['id']
    })
    this.movieCard = this.movieService.getSingleMovieCard(this.cardId)!
    this.movieImg = this.movieService.IMG_PATH
  }
}
