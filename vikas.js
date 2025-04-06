// DOM Elements
const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

// Speech Synthesis Function
function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1.2;   // Speed of speech
    text_speak.volume = 1;   // Volume level
    text_speak.pitch = 1.3;  // Pitch of voice
    window.speechSynthesis.speak(text_speak);
}

// Greeting Function Based on Time
function wishMe() {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 12) {
        speak("Good Morning SIR.");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon SIR.");
    } else {
        speak("Good Evening SIR.");
    }
}

// Initialization on Page Load
document.addEventListener('DOMContentLoaded', () => {
    speak("Initializing JARVIS");
    wishMe();
});

// Speech Recognition Setup
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// Handle Speech Recognition Result
recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

// Start Listening on Button Click
btn.addEventListener('click', () => {
    content.textContent = "Listening....";
    recognition.start();
});

// Command Processing Function
function takeCommand(message) {
    // ------------------------------------
    // Basic Commands
    // ------------------------------------
    if (message.includes('hey') || message.includes('hello jarvis')) {
        speak("Hello Sir, How May I Help You?");
    } else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    } else if (message.includes("who developed you") || message.includes("who created you")) {
        speak("I was developed by Vikas Yadav.");
    } else if (message.includes("tumhe kisne banaya") || message.includes("tumhe kisne develop kiya")) {
        speak("Mujhe Vikas Yadav ne develop kiya hai.");
    } else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak(time);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        speak(date);
    } else if (message.includes('calculator')) {
        window.open('Calculator:///');
        speak("Opening Calculator...");
    }

    // ------------------------------------
    // General Knowledge Questions
    // ------------------------------------
    else if (message.includes("who is virat kohli")) {
        speak("Virat Kohli is an Indian cricketer, known for being one of the best batsmen in the world.");
    } else if (message.includes("what is web development")) {
        speak("Web development is the process of building and maintaining websites and web applications.");
    } else if (message.includes("what is ai") || message.includes("what is artificial intelligence")) {
        speak("Artificial intelligence is the simulation of human intelligence by machines, like me!");
    } else if (message.includes("who is elon musk")) {
        speak("Elon Musk is a billionaire entrepreneur, CEO of Tesla, SpaceX, and founder of Neuralink.");
    } else if (message.includes("what is the sun")) {
        speak("The sun is a star at the center of our solar system, providing light and energy to Earth.");
    } else if (message.includes("why is the sky blue")) {
        speak("The sky appears blue due to the scattering of sunlight by tiny particles in the atmosphere.");
    } else if (message.includes("what is python")) {
        speak("Python is a popular programming language known for its simplicity and versatility.");
    } else if (message.includes("who is narendra modi")) {
        speak("Narendra Modi is the Prime Minister of India, leading the country since 2014.");
    } else if (message.includes("who is bill gates")) {
        speak("Bill Gates is a billionaire philanthropist and the co-founder of Microsoft.");
    } else if (message.includes("what is the moon")) {
        speak("The moon is Earth’s natural satellite, orbiting around it.");
    } else if (message.includes("what is coding")) {
        speak("Coding is the process of writing instructions for computers to perform tasks.");
    } else if (message.includes("what is a computer")) {
        speak("A computer is an electronic device that processes data and performs tasks based on instructions.");
    } else if (message.includes("who is albert einstein")) {
        speak("Albert Einstein was a famous physicist known for his theory of relativity.");
    } else if (message.includes("what is internet")) {
        speak("The internet is a global network of computers that allows communication and information sharing.");
    } else if (message.includes("what is blockchain")) {
        speak("Blockchain is a decentralized technology used to record transactions, like in cryptocurrencies.");
    } else if (message.includes("what is cryptocurrency")) {
        speak("Cryptocurrency is a digital currency that uses cryptography for security, like Bitcoin.");
    } else if (message.includes("who is sundar pichai")) {
        speak("Sundar Pichai is the CEO of Google and Alphabet.");
    } else if (message.includes("what is machine learning")) {
        speak("Machine learning is a branch of AI where machines learn from data to make predictions.");
    } else if (message.includes("what is data science")) {
        speak("Data science is the study of data to extract insights using statistics and programming.");
    } else if (message.includes("who is sachin tendulkar")) {
        speak("Sachin Tendulkar is a legendary Indian cricketer, known as the God of Cricket.");
    } else if (message.includes("what is 5g")) {
        speak("5G is the fifth generation of wireless technology, offering faster internet speeds.");
    }

    // ------------------------------------
    // HTML Questions (75)
    // ------------------------------------
    else if (message.includes("what is html")) speak("HTML stands for HyperText Markup Language, used to create web page structure.");
    else if (message.includes("what is a tag in html")) speak("A tag in HTML defines how content is displayed, like <p> for paragraphs.");
    else if (message.includes("what is an attribute in html")) speak("An attribute in HTML adds info to elements, like id or class.");
    else if (message.includes("what is a div in html")) speak("A div is a block-level container in HTML for grouping elements.");
    else if (message.includes("what is a span in html")) speak("A span is an inline container in HTML for styling small text parts.");
    else if (message.includes("what is semantic html")) speak("Semantic HTML uses meaningful tags like <article> for better structure.");
    else if (message.includes("what is the doctype in html")) speak("The DOCTYPE declares the HTML version, like <!DOCTYPE html> for HTML5.");
    else if (message.includes("what is an html form")) speak("An HTML form collects user input with the <form> tag.");
    else if (message.includes("what is the head tag")) speak("The head tag holds metadata, like title and stylesheets, not visible.");
    else if (message.includes("what is the body tag")) speak("The body tag contains the visible content of a web page.");
    else if (message.includes("what is an anchor tag")) speak("An anchor tag, <a>, creates hyperlinks in HTML.");
    else if (message.includes("what is an image tag")) speak("The image tag, <img>, displays images on a web page.");
    else if (message.includes("what is a list in html")) speak("A list in HTML can be ordered <ol> or unordered <ul>.");
    else if (message.includes("what is a table in html")) speak("A table in HTML, <table>, organizes data in rows and columns.");
    else if (message.includes("what is meta tag")) speak("A meta tag provides metadata, like charset or description.");
    else if (message.includes("what is iframe in html")) speak("An iframe embeds another webpage inside the current page.");
    else if (message.includes("what is canvas in html")) speak("The canvas tag is used for drawing graphics with JavaScript.");
    else if (message.includes("what is svg in html")) speak("SVG is Scalable Vector Graphics, used for vector images in HTML.");
    else if (message.includes("what is a button in html")) speak("A button in HTML, <button>, triggers actions or submits forms.");
    else if (message.includes("what is input tag")) speak("The input tag creates interactive fields, like text boxes.");
    else if (message.includes("what is a label in html")) speak("A label tag links text to form elements for accessibility.");
    else if (message.includes("what is a fieldset")) speak("A fieldset groups related form elements in HTML.");
    else if (message.includes("what is a legend in html")) speak("A legend provides a caption for a fieldset in a form.");
    else if (message.includes("what is html5")) speak("HTML5 is the latest version of HTML with new features like video and canvas.");
    else if (message.includes("what is a header tag")) speak("The header tag, <header>, defines a page or section header.");
    else if (message.includes("what is a footer tag")) speak("The footer tag, <footer>, defines a page or section footer.");
    else if (message.includes("what is a section tag")) speak("The section tag groups thematic content in HTML.");
    else if (message.includes("what is an article tag")) speak("The article tag defines independent content, like a blog post.");
    else if (message.includes("what is a nav tag")) speak("The nav tag defines navigation links in HTML.");
    else if (message.includes("what is an aside tag")) speak("The aside tag holds content related to the main content, like sidebars.");
    else if (message.includes("what is a main tag")) speak("The main tag contains the primary content of a page.");
    else if (message.includes("what is a title tag")) speak("The title tag sets the browser tab title in the head section.");
    else if (message.includes("what is a link tag")) speak("The link tag connects external resources, like CSS, in the head.");
    else if (message.includes("what is a script tag")) speak("The script tag embeds or links JavaScript in HTML.");
    else if (message.includes("what is a style tag")) speak("The style tag adds CSS directly in HTML.");
    else if (message.includes("what is an ordered list")) speak("An ordered list, <ol>, displays numbered items in HTML.");
    else if (message.includes("what is an unordered list")) speak("An unordered list, <ul>, displays bulleted items in HTML.");
    else if (message.includes("what is a list item")) speak("A list item, <li>, is an entry in an HTML list.");
    else if (message.includes("what is a blockquote")) speak("A blockquote tags quotes from another source in HTML.");
    else if (message.includes("what is a pre tag")) speak("The pre tag displays preformatted text with spacing preserved.");
    else if (message.includes("what is a code tag")) speak("The code tag formats text as computer code in HTML.");
    else if (message.includes("what is an hr tag")) speak("The hr tag creates a horizontal line in HTML.");
    else if (message.includes("what is a br tag")) speak("The br tag adds a line break in HTML.");
    else if (message.includes("what is a strong tag")) speak("The strong tag emphasizes important text in HTML.");
    else if (message.includes("what is an em tag")) speak("The em tag italicizes text for emphasis in HTML.");
    else if (message.includes("what is a mark tag")) speak("The mark tag highlights text in HTML.");
    else if (message.includes("what is a small tag")) speak("The small tag reduces text size in HTML.");
    else if (message.includes("what is a sub tag")) speak("The sub tag creates subscript text in HTML.");
    else if (message.includes("what is a sup tag")) speak("The sup tag creates superscript text in HTML.");
    else if (message.includes("what is a video tag")) speak("The video tag embeds video content in HTML5.");
    else if (message.includes("what is an audio tag")) speak("The audio tag embeds sound content in HTML5.");
    else if (message.includes("what is a source tag")) speak("The source tag specifies media resources for video or audio.");
    else if (message.includes("what is a track tag")) speak("The track tag adds subtitles or captions to media in HTML.");
    else if (message.includes("what is a progress tag")) speak("The progress tag shows task completion in HTML.");
    else if (message.includes("what is a meter tag")) speak("The meter tag displays a scalar value within a range.");
    else if (message.includes("what is a details tag")) speak("The details tag creates expandable content in HTML.");
    else if (message.includes("what is a summary tag")) speak("The summary tag provides a heading for the details tag.");
    else if (message.includes("what is a dialog tag")) speak("The dialog tag creates a popup or modal in HTML.");
    else if (message.includes("what is a data tag")) speak("The data tag links content with machine-readable data.");
    else if (message.includes("what is a time tag")) speak("The time tag represents dates or times in HTML.");
    else if (message.includes("what is a base tag")) speak("The base tag sets a base URL for relative links.");
    else if (message.includes("what is a noscript tag")) speak("The noscript tag shows content if JavaScript is disabled.");
    else if (message.includes("what is a template tag")) speak("The template tag holds content for later use in HTML.");
    else if (message.includes("what is a slot tag")) speak("The slot tag is used in web components for content distribution.");
    else if (message.includes("what is a picture tag")) speak("The picture tag provides multiple image sources for responsiveness.");
    else if (message.includes("what is an object tag")) speak("The object tag embeds multimedia like PDFs in HTML.");
    else if (message.includes("what is a param tag")) speak("The param tag sets parameters for an object tag.");
    else if (message.includes("what is an embed tag")) speak("The embed tag adds external content like plugins in HTML.");
    else if (message.includes("what is a map tag")) speak("The map tag defines clickable areas on an image.");
    else if (message.includes("what is an area tag")) speak("The area tag specifies regions in an image map.");
    else if (message.includes("what is a col tag")) speak("The col tag defines column properties in a table.");
    else if (message.includes("what is a colgroup tag")) speak("The colgroup tag groups columns in a table.");
    else if (message.includes("what is a caption tag")) speak("The caption tag adds a title to an HTML table.");
    else if (message.includes("what is a th tag")) speak("The th tag defines a table header cell in HTML.");
    else if (message.includes("what is a td tag")) speak("The td tag defines a table data cell in HTML.");

    // ------------------------------------
    // CSS Questions (75)
    // ------------------------------------
    else if (message.includes("what is css")) speak("CSS stands for Cascading Style Sheets, used to style web pages.");
    else if (message.includes("what is a css selector")) speak("A CSS selector targets HTML elements for styling, like class or id.");
    else if (message.includes("what is the box model in css")) speak("The CSS box model includes content, padding, border, and margin.");
    else if (message.includes("what is flexbox")) speak("Flexbox is a CSS layout module for arranging items in a container.");
    else if (message.includes("what is grid in css")) speak("CSS Grid is a two-dimensional layout system with rows and columns.");
    else if (message.includes("what is a pseudo class")) speak("A pseudo-class targets an element’s state, like :hover.");
    else if (message.includes("what is a pseudo element")) speak("A pseudo-element styles a part of an element, like ::before.");
    else if (message.includes("what is responsive design")) speak("Responsive design adapts websites to different screen sizes.");
    else if (message.includes("what is a media query")) speak("A media query applies styles based on device traits, like width.");
    else if (message.includes("what is css specificity")) speak("CSS specificity decides which style rule applies when multiple exist.");
    else if (message.includes("what is position in css")) speak("Position in CSS controls element placement, like absolute or fixed.");
    else if (message.includes("what is z index")) speak("Z-index determines the stacking order of overlapping elements.");
    else if (message.includes("what is a css variable")) speak("A CSS variable stores reusable values, like --color.");
    else if (message.includes("what is transition in css")) speak("Transition adds smooth changes to properties over time.");
    else if (message.includes("what is animation in css")) speak("Animation creates effects with keyframes, like moving elements.");
    else if (message.includes("what is transform in css")) speak("Transform in CSS changes an element’s shape, like rotate or scale.");
    else if (message.includes("what is overflow in css")) speak("Overflow controls what happens when content exceeds its container.");
    else if (message.includes("what is display in css")) speak("Display in CSS sets how an element is rendered, like block or inline.");
    else if (message.includes("what is visibility in css")) speak("Visibility in CSS hides or shows an element without removing it.");
    else if (message.includes("what is opacity in css")) speak("Opacity in CSS sets the transparency level of an element.");
    else if (message.includes("what is a class selector")) speak("A class selector targets elements with a specific class, like .myclass.");
    else if (message.includes("what is an id selector")) speak("An ID selector targets an element with a specific ID, like #myid.");
    else if (message.includes("what is a universal selector")) speak("The universal selector, *, targets all elements in CSS.");
    else if (message.includes("what is a descendant selector")) speak("A descendant selector targets elements inside another, like div p.");
    else if (message.includes("what is a child selector")) speak("A child selector targets direct children, like div > p.");
    else if (message.includes("what is an adjacent sibling selector")) speak("An adjacent sibling selector targets the next sibling, like h1 + p.");
    else if (message.includes("what is a general sibling selector")) speak("A general sibling selector targets all siblings, like h1 ~ p.");
    else if (message.includes("what is a css reset")) speak("A CSS reset removes default browser styles for consistency.");
    else if (message.includes("what is a css framework")) speak("A CSS framework, like Bootstrap, provides pre-built styles.");
    else if (message.includes("what is margin in css")) speak("Margin in CSS is the space outside an element’s border.");
    else if (message.includes("what is padding in css")) speak("Padding in CSS is the space inside an element’s border.");
    else if (message.includes("what is border in css")) speak("Border in CSS is the line around an element’s padding.");
    else if (message.includes("what is box sizing")) speak("Box-sizing in CSS controls how the box model calculates size.");
    else if (message.includes("what is float in css")) speak("Float in CSS positions elements to the left or right.");
    else if (message.includes("what is clear in css")) speak("Clear in CSS prevents elements from wrapping around floated items.");
    else if (message.includes("what is a css sprite")) speak("A CSS sprite combines multiple images into one for faster loading.");
    else if (message.includes("what is a css preprocessor")) speak("A CSS preprocessor, like Sass, adds features like variables.");
    else if (message.includes("what is sass")) speak("Sass is a CSS preprocessor with syntax for nesting and variables.");
    else if (message.includes("what is less")) speak("Less is a CSS preprocessor similar to Sass with simpler syntax.");
    else if (message.includes("what is a css module")) speak("A CSS module scopes styles locally to avoid conflicts.");
    else if (message.includes("what is a css keyframe")) speak("A keyframe defines stages in a CSS animation.");
    else if (message.includes("what is a css gradient")) speak("A CSS gradient creates a smooth color transition.");
    else if (message.includes("what is a css filter")) speak("A CSS filter applies effects like blur or brightness to elements.");
    else if (message.includes("what is a css clip path")) speak("A clip-path in CSS shapes an element by clipping parts.");
    else if (message.includes("what is a css mask")) speak("A mask in CSS hides parts of an element with an image or gradient.");
    else if (message.includes("what is a css blend mode")) speak("A blend mode in CSS mixes colors of overlapping elements.");
    else if (message.includes("what is a css counter")) speak("A CSS counter tracks and displays numbers, like in lists.");
    else if (message.includes("what is a css unit")) speak("A CSS unit measures size, like px, em, or rem.");
    else if (message.includes("what is rem in css")) speak("Rem in CSS is a unit relative to the root font size.");
    else if (message.includes("what is em in css")) speak("Em in CSS is a unit relative to the parent font size.");
    else if (message.includes("what is vw in css")) speak("Vw in CSS is a viewport width unit, 1% of the screen width.");
    else if (message.includes("what is vh in css")) speak("Vh in CSS is a viewport height unit, 1% of the screen height.");
    else if (message.includes("what is a css calc")) speak("Calc in CSS performs calculations for property values.");
    else if (message.includes("what is a css custom property")) speak("A CSS custom property is a variable, like --my-color.");
    else if (message.includes("what is a css shadow")) speak("A CSS shadow adds drop or inner effects to elements.");
    else if (message.includes("what is text align")) speak("Text-align in CSS sets the horizontal alignment of text.");
    else if (message.includes("what is line height")) speak("Line-height in CSS sets the space between text lines.");
    else if (message.includes("what is font size")) speak("Font-size in CSS sets the size of text.");
    else if (message.includes("what is font weight")) speak("Font-weight in CSS sets the thickness of text.");
    else if (message.includes("what is font family")) speak("Font-family in CSS sets the typeface of text.");
    else if (message.includes("what is letter spacing")) speak("Letter-spacing in CSS adjusts space between characters.");
    else if (message.includes("what is word spacing")) speak("Word-spacing in CSS adjusts space between words.");
    else if (message.includes("what is text transform")) speak("Text-transform in CSS changes text case, like uppercase.");
    else if (message.includes("what is text decoration")) speak("Text-decoration in CSS adds lines, like underline.");
    else if (message.includes("what is a css hover")) speak("Hover in CSS applies styles when the mouse is over an element.");
    else if (message.includes("what is a css active")) speak("Active in CSS styles an element when it’s clicked.");
    else if (message.includes("what is a css focus")) speak("Focus in CSS styles an element when it’s selected.");
    else if (message.includes("what is a css visited")) speak("Visited in CSS styles links after they’re clicked.");
    else if (message.includes("what is a css link")) speak("Link in CSS styles unvisited links.");
    else if (message.includes("what is a css outline")) speak("Outline in CSS draws a line outside an element’s border.");
    else if (message.includes("what is a css cursor")) speak("Cursor in CSS changes the mouse pointer style.");
    else if (message.includes("what is a css pointer events")) speak("Pointer-events in CSS controls if an element responds to clicks.");
    else if (message.includes("what is a css object fit")) speak("Object-fit in CSS controls how images or videos fit their container.");

    // ------------------------------------
    // JavaScript Questions (75)
    // ------------------------------------
    else if (message.includes("what is javascript")) speak("JavaScript is a programming language for interactive websites.");
    else if (message.includes("what is a variable in javascript")) speak("A variable in JavaScript stores data with var, let, or const.");
    else if (message.includes("what is a function in javascript")) speak("A function in JavaScript is reusable code with a name.");
    else if (message.includes("what is an array in javascript")) speak("An array in JavaScript is a list, like [1, 2, 3].");
    else if (message.includes("what is an object in javascript")) speak("An object in JavaScript holds key-value pairs.");
    else if (message.includes("what is dom")) speak("DOM is the Document Object Model, manipulated by JavaScript.");
    else if (message.includes("what is an event in javascript")) speak("An event in JavaScript is an action, like a click.");
    else if (message.includes("what is a promise in javascript")) speak("A promise handles async operations, resolving or rejecting.");
    else if (message.includes("what is async await")) speak("Async await makes asynchronous JavaScript code look synchronous.");
    else if (message.includes("what is closure in javascript")) speak("A closure remembers outer variables after execution.");
    else if (message.includes("what is event delegation")) speak("Event delegation handles events on parent elements.");
    else if (message.includes("what is a callback function")) speak("A callback is a function passed as an argument.");
    else if (message.includes("what is fetch in javascript")) speak("Fetch makes HTTP requests, like getting API data.");
    else if (message.includes("what is local storage")) speak("Local storage stores data in the browser without expiration.");
    else if (message.includes("what is a module in javascript")) speak("A module is a reusable file of code in JavaScript.");
    else if (message.includes("what is var in javascript")) speak("Var declares variables with function scope in JavaScript.");
    else if (message.includes("what is let in javascript")) speak("Let declares block-scoped variables in JavaScript.");
    else if (message.includes("what is const in javascript")) speak("Const declares constant, block-scoped variables.");
    else if (message.includes("what is scope in javascript")) speak("Scope determines where variables are accessible.");
    else if (message.includes("what is hoisting in javascript")) speak("Hoisting moves declarations to the top during execution.");
    else if (message.includes("what is this in javascript")) speak("This refers to the current object or context in JavaScript.");
    else if (message.includes("what is a prototype in javascript")) speak("A prototype is an object for inheritance in JavaScript.");
    else if (message.includes("what is inheritance in javascript")) speak("Inheritance shares properties between objects via prototypes.");
    else if (message.includes("what is a constructor in javascript")) speak("A constructor creates objects with the new keyword.");
    else if (message.includes("what is a class in javascript")) speak("A class in JavaScript is a blueprint for objects.");
    else if (message.includes("what is an arrow function")) speak("An arrow function is a concise syntax for functions.");
    else if (message.includes("what is map in javascript")) speak("Map applies a function to each array item.");
    else if (message.includes("what is filter in javascript")) speak("Filter creates a new array with items that pass a test.");
    else if (message.includes("what is reduce in javascript")) speak("Reduce reduces an array to a single value.");
    else if (message.includes("what is foreach in javascript")) speak("ForEach loops through array items without returning.");
    else if (message.includes("what is a template literal")) speak("A template literal uses backticks for string interpolation.");
    else if (message.includes("what is destructuring")) speak("Destructuring unpacks values from arrays or objects.");
    else if (message.includes("what is spread operator")) speak("The spread operator, ..., expands arrays or objects.");
    else if (message.includes("what is rest parameter")) speak("The rest parameter collects arguments into an array.");
    else if (message.includes("what is a generator in javascript")) speak("A generator is a function that yields values one at a time.");
    else if (message.includes("what is a symbol in javascript")) speak("A symbol is a unique primitive type in JavaScript.");
    else if (message.includes("what is json")) speak("JSON is a format for storing and exchanging data.");
    else if (message.includes("what is eval in javascript")) speak("Eval executes a string as JavaScript code.");
    else if (message.includes("what is a regular expression")) speak("A regular expression matches patterns in strings.");
    else if (message.includes("what is try catch")) speak("Try catch handles errors in JavaScript code.");
    else if (message.includes("what is throw in javascript")) speak("Throw creates custom errors in JavaScript.");
    else if (message.includes("what is set timeout")) speak("SetTimeout delays code execution in milliseconds.");
    else if (message.includes("what is set interval")) speak("SetInterval repeats code at set intervals.");
    else if (message.includes("what is clear timeout")) speak("ClearTimeout stops a setTimeout execution.");
    else if (message.includes("what is clear interval")) speak("ClearInterval stops a setInterval execution.");
    else if (message.includes("what is a date object")) speak("A Date object handles dates and times in JavaScript.");
    else if (message.includes("what is math object")) speak("The Math object provides mathematical functions.");
    else if (message.includes("what is a string method")) speak("String methods manipulate text, like toLowerCase.");
    else if (message.includes("what is an array method")) speak("Array methods manipulate arrays, like push or pop.");
    else if (message.includes("what is null in javascript")) speak("Null represents an intentional absence of value.");
    else if (message.includes("what is undefined in javascript")) speak("Undefined means a variable has no value yet.");
    else if (message.includes("what is boolean in javascript")) speak("Boolean is a true or false value in JavaScript.");
    else if (message.includes("what is type of")) speak("Typeof checks the data type of a value.");
    else if (message.includes("what is instanceof")) speak("Instanceof checks if an object is an instance of a class.");
    else if (message.includes("what is a loop in javascript")) speak("A loop repeats code, like for or while.");
    else if (message.includes("what is break in javascript")) speak("Break exits a loop early in JavaScript.");
    else if (message.includes("what is continue in javascript")) speak("Continue skips to the next loop iteration.");
    else if (message.includes("what is a switch in javascript")) speak("A switch statement selects code blocks to run.");
    else if (message.includes("what is a ternary operator")) speak("A ternary operator is a short if-else, like condition ? true : false.");
    else if (message.includes("what is strict mode")) speak("Strict mode enforces stricter JavaScript rules.");
    else if (message.includes("what is a proxy in javascript")) speak("A proxy intercepts operations on objects.");
    else if (message.includes("what is a weak map")) speak("A WeakMap holds weak references to keys in JavaScript.");
    else if (message.includes("what is a set in javascript")) speak("A Set stores unique values in JavaScript.");
    else if (message.includes("what is a map object")) speak("A Map object holds key-value pairs with any key type.");
    else if (message.includes("what is a weak set")) speak("A WeakSet holds weak references to objects.");
    else if (message.includes("what is a bigint")) speak("BigInt handles large integers in JavaScript.");
    else if (message.includes("what is a debugger")) speak("Debugger pauses code execution for inspection.");
    else if (message.includes("what is a console log")) speak("Console.log prints messages to the browser console.");
    else if (message.includes("what is a window object")) speak("The window object represents the browser window.");
    else if (message.includes("what is a navigator object")) speak("The navigator object provides browser info.");
    else if (message.includes("what is a location object")) speak("The location object manages the browser URL.");

    // ------------------------------------
    // React Questions (75)
    // ------------------------------------
    else if (message.includes("what is react")) speak("React is a JavaScript library for building user interfaces.");
    else if (message.includes("what is a component in react")) speak("A component in React is a reusable UI piece.");
    else if (message.includes("what is jsx")) speak("JSX is a syntax extension for HTML-like code in React.");
    else if (message.includes("what is state in react")) speak("State in React holds dynamic component data.");
    else if (message.includes("what are props in react")) speak("Props are arguments passed to customize React components.");
    else if (message.includes("what is a hook in react")) speak("A hook lets you use state in functional components.");
    else if (message.includes("what is use state")) speak("useState adds state to React functional components.");
    else if (message.includes("what is use effect")) speak("useEffect handles side effects in React components.");
    else if (message.includes("what is react router")) speak("React Router adds navigation to React apps.");
    else if (message.includes("what is virtual dom")) speak("The Virtual DOM optimizes updates in React.");
    else if (message.includes("what is redux")) speak("Redux manages app-wide state in React.");
    else if (message.includes("what is context in react")) speak("Context passes data without prop drilling.");
    else if (message.includes("what is a ref in react")) speak("A ref directly accesses DOM or component instances.");
    else if (message.includes("what is prop drilling")) speak("Prop drilling passes props through many layers.");
    else if (message.includes("what is react hooks")) speak("React Hooks add features to functional components.");
    else if (message.includes("what is use callback")) speak("useCallback memoizes functions in React.");
    else if (message.includes("what is use memo")) speak("useMemo memoizes values in React.");
    else if (message.includes("what is use reducer")) speak("useReducer manages complex state in React.");
    else if (message.includes("what is use context")) speak("useContext accesses React context values.");
    else if (message.includes("what is use ref")) speak("useRef creates mutable references in React.");
    else if (message.includes("what is a functional component")) speak("A functional component is a function returning JSX.");
    else if (message.includes("what is a class component")) speak("A class component is a class extending React.Component.");
    else if (message.includes("what is a controlled component")) speak("A controlled component has its value managed by React.");
    else if (message.includes("what is an uncontrolled component")) speak("An uncontrolled component uses DOM for value.");
    else if (message.includes("what is a higher order component")) speak("A higher-order component enhances another component.");
    else if (message.includes("what is render prop")) speak("A render prop shares code via a function prop.");
    else if (message.includes("what is react fragments")) speak("React Fragments group elements without extra nodes.");
    else if (message.includes("what is a key in react")) speak("A key uniquely identifies elements in a list.");
    else if (message.includes("what is lazy loading in react")) speak("Lazy loading delays component loading until needed.");
    else if (message.includes("what is suspense in react")) speak("Suspense handles loading states in React.");
    else if (message.includes("what is code splitting")) speak("Code splitting breaks React code into smaller chunks.");
    else if (message.includes("what is a portal in react")) speak("A portal renders content outside the component hierarchy.");
    else if (message.includes("what is error boundary")) speak("An error boundary catches JavaScript errors in React.");
    else if (message.includes("what is react dev tools")) speak("React DevTools is a browser extension for debugging.");
    else if (message.includes("what is a lifecycle method")) speak("Lifecycle methods handle component stages in class components.");
    else if (message.includes("what is component did mount")) speak("ComponentDidMount runs after a component mounts.");
    else if (message.includes("what is component did update")) speak("ComponentDidUpdate runs after a component updates.");
    else if (message.includes("what is component will unmount")) speak("ComponentWillUnmount runs before a component unmounts.");
    else if (message.includes("what is should component update")) speak("ShouldComponentUpdate decides if a component re-renders.");
    else if (message.includes("what is get derived state from props")) speak("GetDerivedStateFromProps updates state from props.");
    else if (message.includes("what is a pure component")) speak("A pure component optimizes rendering in React.");
    else if (message.includes("what is a memo in react")) speak("React.memo memoizes functional components.");
    else if (message.includes("what is a provider in react")) speak("A provider supplies context data to components.");
    else if (message.includes("what is a consumer in react")) speak("A consumer accesses context data in React.");
    else if (message.includes("what is a redux store")) speak("A Redux store holds the entire app state.");
    else if (message.includes("what is an action in redux")) speak("An action is a payload describing state changes.");
    else if (message.includes("what is a reducer in redux")) speak("A reducer updates state based on actions.");
    else if (message.includes("what is dispatch in redux")) speak("Dispatch sends actions to the Redux store.");
    else if (message.includes("what is connect in redux")) speak("Connect links React components to Redux.");
    else if (message.includes("what is thunk in redux")) speak("Thunk allows async actions in Redux.");
    else if (message.includes("what is saga in redux")) speak("Saga manages complex async logic in Redux.");
    else if (message.includes("what is a middleware in redux")) speak("Middleware enhances Redux with extra functionality.");
    else if (message.includes("what is a selector in redux")) speak("A selector extracts data from the Redux store.");
    else if (message.includes("what is use selector")) speak("useSelector accesses Redux state in React.");
    else if (message.includes("what is use dispatch")) speak("useDispatch sends actions in Redux with hooks.");
    else if (message.includes("what is a react prop type")) speak("PropTypes validates prop types in React.");
    else if (message.includes("what is a default prop")) speak("Default props set fallback values in React.");
    else if (message.includes("what is a children prop")) speak("The children prop passes content between component tags.");
    else if (message.includes("what is a react event")) speak("A React event handles user actions, like onClick.");
    else if (message.includes("what is synthetic event")) speak("A synthetic event is React’s cross-browser event wrapper.");
    else if (message.includes("what is a form event")) speak("A form event handles form actions, like onSubmit.");
    else if (message.includes("what is a state lifting")) speak("State lifting moves state to a parent component.");
    else if (message.includes("what is a controlled form")) speak("A controlled form uses state to manage inputs.");
    else if (message.includes("what is a react hook form")) speak("React Hook Form is a library for managing forms.");
    else if (message.includes("what is a custom hook")) speak("A custom hook is a reusable hook function.");
    else if (message.includes("what is a react transition")) speak("React Transition handles animations in components.");
    else if (message.includes("what is a server component")) speak("Server Components render on the server in React.");
    else if (message.includes("what is a client component")) speak("Client Components render on the browser in React.");
    else if (message.includes("what is hydration in react")) speak("Hydration adds interactivity to server-rendered React.");
    else if (message.includes("what is a react suspense list")) speak("SuspenseList coordinates multiple Suspense components.");

    // ------------------------------------
    // Fallbacks (Google/Wikipedia Search)
    // ------------------------------------
    else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        speak("This is what I found on Wikipedia regarding " + message.replace("wikipedia", "").trim());
    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        speak("This is what I found on the internet regarding " + message);
    } else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        speak("I found some information for " + message + " on Google.");
    }
}