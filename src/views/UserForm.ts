export class UserForm {
  constructor(public parent: Element | null) {}
  
  eventsMap (): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick
    };
  }
  
  onButtonClick (): void {
    console.log('click');
  }
  
  template (): string {
    return `
      <div>
        <h1>User Form</h1>
        <input />
        <button>Click</button>
      </div>
    `
  }
  
  bindEvents (fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();
    
    for (const eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');
      
      fragment.querySelectorAll(selector).forEach((elem) => {
        elem.addEventListener(eventName, eventsMap[eventKey]);
      })
    }
  }
  
  render (): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    
    this.bindEvents(templateElement.content);
    this.parent?.append(templateElement.content);
  }
}
