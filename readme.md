# Ans to the question no: 01.

**Differences between getElementById, getElementsByClassName, querySelector, querySelectorAll**

- getElementById → Selects an element by its ID. It always returns a single element.
  Example: document.getElementById("card")

- getElementsByClassName → Selects all elements with the same class name. It returns an HTMLCollection.
  Example: document.getElementsByClassName("card")

- querySelector → Works like a CSS selector. It returns only the first matched element.
  Example: document.querySelector('.card') or document.querySelector('#card')

- querySelectorAll → Selects all matching elements. It returns a NodeList.
  Example: document.querySelectorAll('.card') or document.querySelectorAll('#card')

# Ans to the question no: 02.

- document.createElement is used to create new elements. For example const newDiv = document.createElement("div") Here a new div is created. Insert new element
  Add at the end or add at the beginning like:-
  newDiv.appendChild(newElement);
  newDiv.prepend(newElement);

# Ans to the question no: 03.

- Event bubbling is when an event is triggered on a child element, then that event is raised towards the parent elements above. Suppose you click on <button>.
  The click event first occurs on the button.
  Then the parent of the same event button, the parent of the parent … sequentially.

# Ans to the question no: 04.

- Event Delegation is placing a listener on the parent element so that any event can be handled on its child elements. Less memory is used, resulting in better performance.

# Ans to the question no: 05.

- preventDefault() is:-
  Does not allow the default behavior of any event.
  When the page reloads, preventDefault() does not reload.

- stopPropagation() is:-
  Prevents the event from bubbling to the parent element above. Meaning no more bubbling above where stopPropagation() is called. It will stop there.
