'use strict';

export interface Thought {
  id?: string;
  content: string;
  author: string;
  // template: Colors
  template: string;
}

// path to file or svg color?
enum Colors {
  BLUE = 1,
  LIGHT_BLUE = 2,
  LIGHT_GREEN = 3,
}
