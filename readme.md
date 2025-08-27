# Ans to the question no: 01.

**নিচে getElementById, getElementsByClassName, querySelector, querySelectorAll এর পার্থক্য লিখা হলো:-**

- getElementById হলো যা আইডি ‍দিয়ে একটি ইলিমেন্ট নেয়। এবং একটা ইলিমেন্টই রিটার্ন করে। সাধারনত document.getElementById("card") এভাবে লিখা হয়।

- getElementsByClassName হলো যা একই নামের ক্লাস দিয়ে ডিক্লার করা সবগুগুলো ইলিমেন্ট নিবে। যা HTMLCollection রিটার্ন করে। document.getElementsByClassName("card") এভাবে লিখা হয়ে থাকে।

- querySelector CSS selector এর মতো কাজ করে । এটি শুধু প্রথম মিলে যাওয়া element রিটার্ন করবে।
  document.querySelector('.card'/'#card') এভাবে লিখা হয়।
- querySelectorAll এটি সব matching element নিবে। এবং NodeList রিটার্ন করবে। document.querySelectorAll('.card'/'#card')

# Ans to the question no: 02.

- নতুন element তৈরি করতে document.createElement ব্যবহার হয়। যেমন const newDiv = document.createElement("div") এখানে একটা নতুন ডিভ তৈরি করা হয়েছে । নতুন element insert করা
  শেষে add বা শুরুতে add করতে পারি যেমন:-
  newDiv.appendChild(newElement);
  newDiv.prepend(newElement);

# Ans to the question no: 03.

- Event Bubbling হল যখন কোনো child element এ event trigger হয়, তখন সেই event উপরের parent element-গুলোর দিকে ধরে উঠতে থাকে। ধরো তুমি <button> এ click করছো।
  Click event প্রথমে button এ ঘটে।
  তারপর একই event button-এর parent, parentএর parent … এ ক্রমান্বয়ে চলে।

# Ans to the question no: 04.

- Event Delegation হলো parent element-এ একবার listener বসানো যাতে তার child elements এ যে কোনো event handle করা যায়। কম memory ব্যবহার হয়,ফলে performance ভালো হয়।

# Ans to the question no: 05.

- preventDefault() হলো:-
  কোন event এর default behaviour কে হতে দেয় না ।
  page reload হলে, preventDefault() দিলে reload হয় না।

- stopPropagation() হলো:-
  event কে উপরের parent element-এ যাওয়ার (bubbling) থেকে রোধ করে। মানে যেখানে ‍stopPropagation() দেওয়া হবে তার উপরে আর bubbling করতে দিবে না। সেখানেই থেমে যাবে।
