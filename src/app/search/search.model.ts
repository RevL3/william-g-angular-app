export class Search {
  public artist: string;
  public track: string;
  public imagePath: string;
  public relatedTracks: [];

constructor(artist: string, track: string, imagePath: string, relatedTracks: []) {
  this.artist = artist;
  this.track = track;
  this.imagePath = imagePath;
  this. relatedTracks = relatedTracks;
}
}
