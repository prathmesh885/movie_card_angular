import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMovie } from '../../model/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movieCard!: IMovie;

  imgPath!: string;
  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.imgPath = this.movieService.IMG_PATH

  }
  getFrontCard(id: number) {
    this.router.navigate(['frontCard/', id])
  }
}


