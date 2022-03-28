import { User, USER_ROLES } from "../../src/model/User";

export const userMock = new User(
    "id_mockado",
    "astrodev",
    "astrodev@gmail.com",
    "astrodev123",
    USER_ROLES.NORMAL
)

export const userMock2 = new User(
    "id_mockado_2",
    "astrodev2",
    "astrode2v@gmail.com",
    "astrodev123",
    USER_ROLES.ADMIN
)

