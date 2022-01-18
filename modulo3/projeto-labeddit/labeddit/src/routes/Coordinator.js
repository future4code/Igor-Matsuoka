export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToFeed = (navigate) => {
    navigate("/")
}

export const goToPostDetail = (navigate, id) => {
    navigate(`/detalhe/${id}`)
}

export const goToSignUp = (navigate) => {
    navigate("/cadastro")
}