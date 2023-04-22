export function searchFilter(users, text) {
    return users.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
    )
}
