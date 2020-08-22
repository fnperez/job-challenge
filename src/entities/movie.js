import moment from "moment";

export default class Movie {
  constructor(
    id,
    original_title,
    original_language,
    title,
    backdrop_path,
    popularity,
    vote_count,
    video,
    vote_average,
    poster_path,
    adult,
    overview,
    release_date,
    genre_ids,
  ) {
    this.id = id;
    this.original_title = original_title;
    this.original_language = original_language;
    this.title = title;
    this.backdrop_path = backdrop_path;
    this.popularity = popularity;
    this.vote_count = vote_count;
    this.video = video;
    this.vote_average = vote_average;
    this.poster_path = poster_path;
    this.adult = adult;
    this.overview = overview;
    this.release_date = release_date;
    this.genre_ids = genre_ids;

    this.setImage();
  }

  setImage() {
    if (this.poster_path) {
      this.image = `https://image.tmdb.org/t/p/w500/${this.poster_path}`;

      return;
    }

    if (this.backdrop_path) {
      this.image = `https://image.tmdb.org/t/p/w500/${this.backdrop_path}`;
      
      return;
    }

    this.image = 'https://media.comicbook.com/files/img/default-movie.png';
  }

  static fromJson(props) {
    return new Movie(
      props.id,
      props.original_title,
      props.original_language,
      props.title,
      props.backdrop_path,
      props.popularity,
      props.vote_count,
      props.video,
      props.vote_average,
      props.poster_path,
      props.adult,
      props.overview,
      moment(props.release_date),
      props.genre_ids,
    );
  }
}