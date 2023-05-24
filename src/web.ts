import { WebPlugin } from '@capacitor/core';

import type { MyPluginPlugin } from './definitions';

export class MyPluginWeb extends WebPlugin implements MyPluginPlugin {
  constructor() {
    console.log('MyPluginWeb > constructor');
    super();
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('MyPluginWeb > ECHO', options);
    return options;
  }
}
