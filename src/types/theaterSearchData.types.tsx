export enum EntityType {
  THEATER = "theater",
}

export interface ExternalApiData {
  entity_type: EntityType.THEATER;
  entity_id: string;
  gid: string;
  label: string;
  facet: string;
  original_label: string;
  text_search_data: Array<string>;
  status: number;
  viewcount: number;
  irankpopular: number;
  browsable: boolean;
  starts_at: string | null;
  ends_at: string | null;
  last_release: string | null;
  data: {
    id: string;
    zip: string;
    city: string;
    address: string;
    country: string;
    poster_path: string;
    thumbnail: string;
  };
  scores: {
    all_time_rank_score: number;
  };
  genres: Array<unknown>;
  tags: Array<string>;
  last_updated_at: string;
  index: string;
  type: string;
  id: string;
  score: number;
  sponsored: boolean;
}

export interface InternalApiData {
  id: number;

  provider_id: string;

  name: string;

  city: string;

  zip: string;

  address: string;

  thumbnail: string;
}
