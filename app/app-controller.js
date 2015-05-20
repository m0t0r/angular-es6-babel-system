class AppController {

  constructor() {
    'use strict';
    this.message = 'Amazing!';
  }

  test() {
    'use strict';
    let msg = 'Yes, it works! Awesome!';
    console.log(msg);
    return msg
  }
}

export { AppController }