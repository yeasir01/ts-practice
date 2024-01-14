function addTwo(num: number) {
    return num + 2;
}

function getUpper(val: string) {
    return val.toUpperCase();
}

// Type annotation followed by default value
function signUserUp(name: string, username: string, isPaid: boolean = false) {
    return;
}

addTwo(5);
getUpper("yeasir");

signUserUp("Yeasir", "yeasir01");
signUserUp("Max", "max_24", true);

console.log(addTwo(5));

//Type annotating a value return from the function.
function addThree(num: number): number {
    return num + 3;
}

const getHello = (str: string): string => {
    return str;
};

function consoleError(msg: string): void {
    console.log(msg);
}

// Throwing an exception or terminate a program (better to return never instead of void)
function handleError(msg: string): never {
    throw new Error(msg);
}
