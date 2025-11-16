import { Component, inject, signal } from '@angular/core';
import { GifList } from '../../components/gif-list/gif-list';
import { GifService } from '../../services/Gifs.Service';
import type { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [GifList],
  templateUrl: './search-page.html',
})
export default class SearchPage {
  gifService = inject(GifService);

  gifsResults = signal<Gif[]>([]);

  onSearch(query: string) {
   this.gifService.searchGifs(query)
    .subscribe(
      (resp) => {
       this.gifsResults.set(resp);
      }
    )
  }
}
