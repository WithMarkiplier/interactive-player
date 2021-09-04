export interface IChoiceGroup {
  watchCode: string;
  title?: string;
  showAt?: number;
  choices?: IChoice[];
  type: ChoiceGroupType;
  ending?: IEnding;
}

export interface IEnding {
  endingNumber: number;
  endingName: string;
  endingCode: string;
}

export type ChoiceGroupType = "start" | "end" | "default";

export interface IChoice {
  text: string;
  nextChoiceGroupWatchCode: string;
}
