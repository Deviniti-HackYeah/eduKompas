import {
  AfterViewChecked,
  HostBinding,
  ElementRef,
  Component,
  ViewChild,
  OnInit,
  DestroyRef,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ChatService } from '@core/services/chat.service';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, tap } from 'rxjs';

@Component({
  selector: 'rtm-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements AfterViewChecked, OnInit {
  @ViewChild('window') public chatWindow?: ElementRef<HTMLDivElement>;

  public isInactive = false;

  constructor(
    private readonly _chatService: ChatService,
    private readonly _destroyRef: DestroyRef,
  ) {}

  public ngAfterViewChecked(): void {
    this._scrollToBottom();
  }

  public ngOnInit(): void {
    this.chatForm.valueChanges
      .pipe(
        takeUntilDestroyed(this._destroyRef),
        tap(() => {
          this.setNotInactive();
        }),
        debounceTime(45000),
      )
      .subscribe(() => {
        this.isInactive = true;
      });
  }

  public chatForm = new FormGroup({
    input: new FormControl(''),
  });

  public readonly isLoading = this._chatService.isLoading;
  public readonly messages = this._chatService.chat;

  @HostBinding('class') public get classes(): string {
    return 'flex h-full flex-col justify-between';
  }

  public sendMessage(): void {
    const value = this.chatForm.get('input')?.value;
    if (!value) return;
    this._chatService.postMessage(value);
    this.chatForm.reset();
  }

  public setNotInactive(): void {
    this.isInactive = false;
  }

  private _scrollToBottom(): void {
    const element = this.chatWindow?.nativeElement;
    element!.scrollTop = element!.scrollHeight;
  }
}
