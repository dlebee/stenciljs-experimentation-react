export function wc(customEvents = {}, props = {}) {
    let storedEl;
  
    return function (el) {
      for (let name in customEvents) {
        let value = customEvents[name] ;
        // If we have an element then add event listeners
        // otherwise remove the event listener
        const action = (el) ? el.addEventListener : storedEl.removeEventListener;
        if (typeof value === 'function') {
          action(name, value);
          return;
        }
      }
      
      // If we have an element then set props
      if (el) {
        for (let name in props) {
          let value = props[name] ;
          el[name] = value;
        }
      }
      storedEl = el;
    };
  }