
export interface INavigationLink {
  id?: string;
  caption: string;
  url: string;
  icon: string;
  notImplemented?: boolean;
  visible?: boolean;
  backgroundColor?: string;
}

export interface ICustomAction {
  caption: string;
  icon: string;
  disabled?: boolean;
  color?: string;
  action(): void;
}

export interface IDialogAction {
  id: string;
  actionText: string;
  color?: string;
}

export interface IDialogData {
  title: string;
  titleParameters?: string[];
  message: string;
  messageParameters?: string[];
  actions: IDialogAction[],
}

export interface INews {
  date: Date | string;
  title: string;
  text?: string;
  url?: string,
}