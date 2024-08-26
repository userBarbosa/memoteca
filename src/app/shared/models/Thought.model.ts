'use strict';

export interface Thought {
  id?: string;
  content: string;
  author: string;
  // template: Colors
  template: string;
  favorite: boolean;
}

// path to file or svg color?
enum Colors {
  BLUE = 1,
  LIGHT_BLUE = 2,
  LIGHT_GREEN = 3,
}

export enum FavoriteIconPath {
  ACTIVE = '/assets/favorite-icon-active.png',
  INACTIVE = '/assets/favorite-icon-inactive.png'
}
