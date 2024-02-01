import { Component, OnInit } from '@angular/core';
import { Momment } from 'src/app/Momment';
import { MommentService } from 'src/app/services/momment.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent  implements OnInit {

  btnText = 'Compartilhar';

  constructor(private mommentService: MommentService,
              private messagesService: MessagesService,
              private route: Router) {}

  ngOnInit(): void {}

  async createHandle(momment: Momment) {
    const formData = new FormData;

    formData.append('title', momment.title);
    formData.append('description', momment.description);

    if (momment.image) {
      formData.append('image', momment.image);
    }
    console.log(formData);

    // Alguns passos que precisam ser feitos para cadastrar...
    // todo
    this.mommentService.createMomment(formData).subscribe({
      next: ()=> {
        this.messagesService.add('Momento adicionada com sucesso!');
        this.route.navigate(['/']);
      }
    });
    // ENVIAR PARA O SERVICE
  }
}
