import { Component, OnInit } from '@angular/core';
import { MommentService } from 'src/app/services/momment.service';
import { Momment } from 'src/app/Momment';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from 'src/app/services/messages.service';
import { Comment } from 'src/app/Comment';
import { FormGroup, FormControl, Validators ,FormGroupDirective } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-momment',
  templateUrl: './momment.component.html',
  styleUrls: ['./momment.component.css']
})
export class MommentComponent implements OnInit {
  momment?: Momment;
  faTimes = faTimes;
  faEdit = faEdit;
  baseApiUrl = environment.baseApiUrl;
  commentForm!: FormGroup;

  constructor(private mommentService: MommentService,
              private activatedRoute: ActivatedRoute,
              private messagesService: MessagesService,
              private route: Router,
              private commentService: CommentService) {}

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.mommentService.getMomment(id).subscribe((item) => {
      this.momment = item.data;
      console.log('item.data ', item.data);
      console.log('item.message ', item.message);
    });
    console.log('meu id: ', id);
    console.log('só o momment ', this.momment);

    this.commentForm = new FormGroup({
      text: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required])
    });
  }

  get text() {
    return this.commentForm.get('text')!;
  }

  get username() {
    return this.commentForm.get('username')!;
  }

  async removeHandler(id: number) {
    this.mommentService.removeMomment(id).subscribe({
      next: ()=> { this.messagesService.add('Momento excluído com sucesso!');
        this.route.navigate(['/']);
      }
    });
  };

  async onSubmit(formDirective: FormGroupDirective) {
    if (this.commentForm.invalid) {
      return;
    }
    const data: Comment = this.commentForm.value;
    data.mommentId = Number(this.momment!.id);

    this.commentService.createComment(data).subscribe((comment) => {
      next: () => {
        this.momment!.comments!.push(comment.data);
        this.messagesService.add('Comentário adicionado!');
        this.commentForm.reset();
        formDirective.resetForm();
      }
    });
  }
}
