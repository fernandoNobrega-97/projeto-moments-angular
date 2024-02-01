import { Component, OnInit } from '@angular/core';
import { MommentService } from 'src/app/services/momment.service';
import { Momment } from 'src/app/Momment';
import { environment } from 'src/environments/environment.development';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allMoments: Momment[] = [];
  momments: Momment[] = [];
  baseApiUrl = environment.baseApiUrl;

  faSearch = faSearch;
  searchTerm: string = '';

  constructor(private mommentService: MommentService) {}

  ngOnInit(): void {
    this.mommentService.getMomments().subscribe((items) => {
      const data = items.data;
      console.log('subscribe ', items);
      console.log('minha const data ', data);
      data.map((item) => {
        console.log('Entrei na função map ', item);
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR');
      });

      this.allMoments = data;
      this.momments = data;
    });
  }

  search(event: Event): void {
    const gettingInput = event.target as HTMLInputElement;
    const valueInput = gettingInput.value;

    this.momments = this.allMoments.filter((momment) => {
      return momment.title?.toLowerCase().includes(valueInput);
    });
  }
}
