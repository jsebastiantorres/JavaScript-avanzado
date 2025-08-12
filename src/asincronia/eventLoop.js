// Ejemplo del event loop
console.log("1. Start"); // Call stack - se ejecuta inmediatamente

setTimeout(() => { console.log("2. setTimeout"), 0 }); // Task queue - ejecutará después

Promise.resolve().then(() => {
    console.log("3. Promise"); // Microtask queue - mayor prioridad
});

console.log("4. End"); // Call stack - ejecutará inmediatamente





