import { UserProps } from './User';


export class Attributes<T> {
  constructor(private data: T) {}
  
  get = <K extends keyof T> (key: K): T[K] => {
    return this.data[key];
  }
  
  getAll (): T {
    return this.data;
  }
  
  set (update: T): void {
    Object.assign(this.data, update);
  }
}

const attrs = new Attributes<UserProps>({ id: 5, name: 'test', age: 20 });
