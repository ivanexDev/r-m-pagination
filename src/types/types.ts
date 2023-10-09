export interface CharactersFetched {
    info:    Info;
    results: Result[];
  }
  
  export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  string;
  }
  
  export interface Result {
    id:       number;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   string;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
  }
  export interface Location {
    name: string;
    url:  string;
  }

  export interface Character {
    id?: number;
    name: string;
    image: string;
  }

  export type getCharacterType = (page?: number) => void;