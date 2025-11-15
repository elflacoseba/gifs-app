import { Component, inject, signal } from '@angular/core';
import { GifList } from "../../components/gif-list/gif-list";
import { GifService } from '../../services/Gifs.Service';

@Component({
  selector: 'app-trending-page',
  imports: [GifList],
  templateUrl: './trending-page.html',
})
export default class TrendingPage {
  gifService = inject(GifService);
 }
