interface Contributor {
  name: string;
  avatar: string;
}

export interface ISpace {
  id: number;
  title: string;
  banner: string;
  description: string;
  flashcardsCount: number;
  commentsCount: number;
  contributors: Contributor[];
}