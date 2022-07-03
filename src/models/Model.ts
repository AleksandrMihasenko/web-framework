import { AxiosPromise } from 'axios';

interface ModelAttributes<T> {
  get <K extends keyof T> (key: K): T[K];
  getAll (): T;
  set (value: T): void;
}

interface Sync<T> {
  fetch (id: number): AxiosPromise;
  save (data: T): AxiosPromise;
}

interface Events {
  on (eventName: string, callback: () => {}): void;
  trigger (eventName: string): void;
}

export class Model {

}
