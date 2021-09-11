export interface IChoiceGroup {
  watchCode: string;
  videoTitle?: string;
  title?: string;
  showAt?: number;
  choices?: IChoice[];
  type: ChoiceGroupType;
  ending?: IEnding;
  subtitles?: string[];
}

export interface IEnding {
  endingName: string;
  endingNumber?: number;
  endingCode?: string;
}

export type ChoiceGroupType = "start" | "end" | "default";

export interface IChoice {
  text: string;
  nextChoiceGroupWatchCode: string;
}
