interface UserInterface {
    name: string;
    email: string;
    isActive: boolean;
}

// Inline type definition method
function createUser({
    name,
    email,
    isActive,
}: {
    name: string;
    email: string;
    isActive: boolean;
}): {} {
    return { name, email, isActive };
}

function createNewUser({ name, email, isActive }: UserInterface): {} {
    return { name, email, isActive };
}
//--------------------------------------------------------------

// create your own types similar to string, number & boolean
type UserType = {
    name: string;
    email: string;
    isActive: boolean;
};

//method 1 (without default values)
function usersName(user: UserType): string {
    return user.name;
}

//method 2 (with default values & named params)
function createUser2(
    userObject: UserType = { name: "", email: "", isActive: false }
): UserType {
    return userObject;
}

//method 2 (with default values)
function createUser3(
    userObject: UserType = { name: "", email: "", isActive: false }
): UserType {
    return userObject;
}

//method 3 (with default values)
function createUser3({
    name = "",
    email = "",
    isActive = false,
}: UserType): UserType {
    return { name, email, isActive };
}

type UserTypeTwo = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    cardNumber?: number; //Optional operator "?"
};

function createNewUserTwo(user: UserTypeTwo) {}

const myUser: UserTypeTwo = {
    _id: "123456",
    name: "yeasir",
    email: "me@example.com",
    isActive: false,
};

myUser.name = "jack"; //ok
// myUser._id = "568956"; //not ok (read only)


// --------------------------------------

//combine multiple types

type cardNum = {
    cardNumber: string;
}

type cardDate = {
    cardDate: string;
}

type cardDetailsTypes = cardNum & cardDate & {
    cvv: number;
}

const memberCardDetails: cardDetailsTypes = {
    cardNumber: "1222",
    cardDate: "1/2/24",
    cvv: 555
}

console.log(memberCardDetails)

export {};
