export function searchFilter(users, text) {
    console.log(text)
    return users.filter(
        (user) =>
            user.name.slice(0, text.length).toLowerCase() === text.toLowerCase()
    )
}
