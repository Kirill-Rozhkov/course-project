export function searchFilter(users, text) {
    return users.find(
        (user) => console.log(user.name.spice(0, text.length)) === text
    )
}

// Нужно переберать каждый символ и проверять его с text
// Длина символов должна быть такая же как у text
