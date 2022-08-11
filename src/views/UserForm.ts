import { User } from '../models/User';

export class UserForm {
  constructor(public parent: Element | null, public model: User) {
    this.bindModel();
  }
  
  bindModel (): void {
    this.model.on('change', () => {
      this.render();
    });
  }
  
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
  
  bindEvents (fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();
    
    for (const eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');
      
      fragment.querySelectorAll('.set-age').forEach((elem) => {
        elem.addEventListener(eventName, eventsMap[eventKey]);
      })
    }
  }
  
  render (): void {
    if (this.parent) {
      this.parent.innerHTML = '';
    }
    
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    
    this.bindEvents(templateElement.content);
    this.parent?.append(templateElement.content);
  }
}
