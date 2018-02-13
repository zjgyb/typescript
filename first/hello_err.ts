function sayHellos(word: string) {
    return 'Hello ' + word;
}

let words = [1, 2, 4];

// 这可能是vscode的bug，https://github.com/Microsoft/TypeScript/issues/15249
// 虽然在tsconfig.json里加了 "noEmitOnError": true但是在vscode没有作用
console.log(sayHellos(words));