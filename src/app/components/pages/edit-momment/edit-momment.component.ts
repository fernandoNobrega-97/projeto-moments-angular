import { MessagesService } from './../../../services/messages.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MommentService } from 'src/app/services/momment.service';
import { Momment } from 'src/app/Momment';

@Component({
  selector: 'app-edit-momment',
  templateUrl: './edit-momment.component.html',
  styleUrls: ['./edit-momment.component.css']
})
export class EditMommentComponent implements OnInit {
  momment!: Momment;
  btnText: string = 'Editar';

  constructor(private mommentService: MommentService,
              private activatedRoute: ActivatedRoute,
              private messagesService: MessagesService,
              private route: Router) {}

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get("id"));

    this.mommentService.getMomment(id).subscribe((item) => {
      this.momment = item.data;
    });
  }

  editHandler(mommentData: Momment) {
    const id = this.momment.id;
    const formData = new FormData();

    formData.append('title', mommentData.title);
    formData.append('description', mommentData.description);

    if (mommentData.image) {
      formData.append('image', mommentData.image);
    }

    this.mommentService.updateMomment(id!, formData).subscribe({
      next: () => {
        this.messagesService.add(`Momment ${id} foi atualizado com sucesso`);
        this.route.navigate(['/']);
      }
    });
  }
}
