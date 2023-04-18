import { Component, OnInit } from '@angular/core';
import { IMovie } from '../../model/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.scss']
})
export class MovieCardsComponent implements OnInit {
  searchBar !: any
  movieArray: IMovie[] = [];
  imgPath!: string;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieArray = this.movieService.getMovieArray()
    this.imgPath = this.movieService.IMG_PATH
    console.log(this.searchBar);
  }

}
