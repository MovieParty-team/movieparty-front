import { InternalApiData } from "./theaterSearchData.types";
import { userInfosType } from "./userData.types";

export interface Group {
  id: string;
  name: string;
  movie: Array<any>;
  userGroups: Array<userInfosType>;
  theater: InternalApiData;
  user: userInfosType;
  session_date: string;
}
