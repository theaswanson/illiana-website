import { Component, Input, OnInit } from '@angular/core';
import { IAlbum, Lightbox } from 'ngx-lightbox';

class LightboxImage {
  src: string;
  thumbnail: string;
  caption: string;
}

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  _images: string[];
  albums: IAlbum[];

  get images(): string[] {
    return this._images;
  }

  @Input() set images(value: string[]) {
    this._images = value;
    this.albums = this.createAlbums();
  }

  constructor(private lightbox: Lightbox) { }

  ngOnInit(): void {
  }

  createAlbums(): IAlbum[] {
    return this.albums = this.images.map(i => {
      return { src: i, thumb: i } as IAlbum
    });
  }

  open(index: number): void {
    this.lightbox.open(this.albums, index);
  }

}
