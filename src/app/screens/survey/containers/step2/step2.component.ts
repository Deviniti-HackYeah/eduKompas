import { Component, EventEmitter, HostBinding, Output } from '@angular/core';
import { DataService } from '@core/services/data.service';
import { SurveySliders } from '@shared/models';

@Component({
  selector: 'rtm-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
})
export class Step2Component {
  public stepCounter = 0;

  public readonly STEPS: {
    label: string;
    key: keyof SurveySliders;
  }[] = [
    {
      label: 'Czy wiesz jaki kierunek studiów wybrać?',
      key: 'doYouKnowWhatToStudy',
    },
    {
      label: 'Czy chcesz w swojej przyszłej pracy mieć kontakt z ludźmi?',
      key: 'doYouWantToWorkWithPeople',
    },
    {
      label:
        'Czy myślisz o tym, żeby kiedyś otworzyć własną działalność gospodarczą?',
      key: 'doYouWantToOpenBusiness',
    },
    {
      label:
        'Czy jesteś gotowy pokrywanie kosztów bez zewnętrznego wsparcia, takich jak materiały do nauki, wycieczki, projekty, zakwaterowanie itp.?',
      key: 'areYouReadyToCoverCosts',
    },
  ];

  constructor(private readonly _dataService: DataService) {}

  @Output() public goToNextStep = new EventEmitter<void>();
  @Output() public goToChat = new EventEmitter<void>();

  @HostBinding('class') public get classes(): string {
    return 'block mx-auto w-full h-full max-w-screen-xl';
  }

  public onValueChange(
    key: keyof SurveySliders,
    value: number,
    idx: number,
  ): void {
    this._dataService.surveyData.update((prev) => ({
      ...prev,
      [key]: value,
    }));
    if (this.checkIfFirstStepExit(value, idx)) {
      return;
    }
    this.stepCounter = idx + 1;
  }

  private checkIfFirstStepExit(value: number, idx: number): boolean {
    if (idx === 0 && value >= 85) {
      this.goToChat.emit();
      return true;
    }
    return false;
  }
}
