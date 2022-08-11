import { User } from '../models/User';
import { View } from './View';

export class UserForm extends View {
  eventsMap (): { [key: string]: () => void } {
    return {
      'click:.set-name': this.onAddNameClick,
      'click:.set-age': this.onAddAgeClick
    };
  }
  
  onAddNameClick = (): void => {
    const input = this.parent?.querySelector('input');
    
    if (input) {
      const name = input.value;
  
      this.model.set({ name });
    }
  }
  
  onAddAgeClick = (): void => {
    this.model.setRandomAge();
  }
  
  template (): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <input />
        <button class="set-name">Change name</button>
        <button class="set-age">Add random age</button>
      </div>
    `
  }
}
