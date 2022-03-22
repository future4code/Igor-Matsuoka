export const goToProfilePage = (history, username) => {
    history.push(`/users/${username}`)    
} 

export const goToSearchPage = (history) => {
    history.push("/")
}

export const goToHistoryPage = (history) => {
    history.push("/history")
}