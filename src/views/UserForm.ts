import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  eventsMap (): { [key: string]: () => void } {
    return {
      'click:.set-name': this.onAddNameClick,
      'click:.set-age': this.onAddAgeClick,
      'click:.save-model': this.onSaveClick
    };
  }
  
  onSaveClick = (): void => {
    this.model.save();
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
        <input placeholder="${ this.model.get('name') }" />
        <button class="set-name">Change name</button>
        <button class="set-age">Add random age</button>
        <button class="save-model">Save user</button>
      </div>
    `
  }
}
