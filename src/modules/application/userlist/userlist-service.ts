import * as _ from "lodash";

export class UserlistService {

  constructor() {
  }

  public parseData (data: any): any {
    return data[0].map((element) => {
      let albums: number = data[1].filter((i) => i.userId === element.id).length;
      let posts: number = data[2].filter((i) => i.userId === element.id).length;
      return {
        id: element.id,
        username: element.username,
        name: element.name,
        albums: albums,
        posts: posts,
        sum: albums + posts
      };
    });
  }
}


