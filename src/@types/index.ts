export type ComponentsProps = {
  lang?: string;
  className?: string;
  id?: string,
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  children?: React.ReactFragment | React.ReactNode;
  left?: boolean 
};

export type Contact = {
  index: number;
  title: string;
  href: string;
};

export type EventForm = React.BaseSyntheticEvent;

export interface Mail {
  fromEmail: string;
  toEmail?: string;
  name: string;
  text: string;
}

export interface ResponseMail {
  code: number;
  message: string;
}
