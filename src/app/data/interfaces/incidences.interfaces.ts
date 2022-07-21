export interface IIncidence {
  incidenceId:	string;
  title:	string;
  shortDescription:	string;
  longDescription:	string;
  watchers: number;
  selectedByAssistant: boolean;
  solved: boolean;
}
