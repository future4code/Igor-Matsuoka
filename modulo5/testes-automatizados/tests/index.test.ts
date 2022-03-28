import { isCallExpression } from "typescript"
import { Casino, LOCATION, NACIONALITY, performPurchase, User, User2, verifyAge } from "../src"
import { app } from "../src/app"
import PostController from "../src/Controller/PostController"

//EX 1 e 2
test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 100
	}

	const result = performPurchase(user, 40)
	
	expect(result).toEqual({
		name: "Astrodev",
		balance: 60
	})
})

test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 50
	}

	const result = performPurchase(user, 50)
	
	expect(result).toEqual({
		...user,
		balance: 0
	})
})

test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 30
	}

	const result = performPurchase(user, 50)
	
	expect(result).not.toBeDefined()
})

//EX 3
test("Testing persons authorized to enter a casino", () => {
	const user: User2 = {
		name: "Astrodev",
		age: 30,
        nacionality: NACIONALITY.BRAZILIAN
	}

    const casino: Casino = {
        name: "BR Cassino",
        location: LOCATION.BRAZIL
    }

	const result = verifyAge(casino, [user])
	
	expect(result.brazilians.allowed).toEqual(["Astrodev"])
})

test("Testing persons authorized to enter a casino", () => {
	const user: User2 = {
		name: "Astrodev2",
		age: 30,
        nacionality: NACIONALITY.AMERICAN
	}

    const casino: Casino = {
        name: "BR Cassino",
        location: LOCATION.BRAZIL
    }

	const result = verifyAge(casino, [user])
	
	expect(result.americans.allowed).toEqual(["Astrodev2"])
})

test("Testing persons authorized to enter a casino", () => {
	const user: User2 = {
		name: "Astrodev",
		age: 19,
        nacionality: NACIONALITY.BRAZILIAN
	}

    const user2: User2 = {
		name: "Astrodev2",
		age: 19,
        nacionality: NACIONALITY.AMERICAN
	}

    const casino: Casino = {
        name: "EUA Cassino",
        location: LOCATION.EUA
    }

	const result = verifyAge(casino, [user, user, user2, user2])
	
	expect(result.brazilians.unallowed).toEqual(["Astrodev", "Astrodev"])
    expect(result.americans.unallowed).toEqual(["Astrodev2", "Astrodev2"])
})

test("Testing persons authorized to enter a casino", () => {
	const user: User2 = {
		name: "Astrodev",
		age: 19,
        nacionality: NACIONALITY.BRAZILIAN
	}

    const user2: User2 = {
		name: "Astrodev2",
		age: 21,
        nacionality: NACIONALITY.AMERICAN
	}

    const casino: Casino = {
        name: "EUA Cassino",
        location: LOCATION.EUA
    }

	const result = verifyAge(casino, [user, user, user2, user2])
	
	expect(result.brazilians.unallowed).toEqual(["Astrodev", "Astrodev"])
    expect(result.americans.allowed).toEqual(["Astrodev2", "Astrodev2"])
})

//EX 5
test("Testing persons authorized to enter a casino", () => {
	const user: User2 = {
		name: "Astrodev",
		age: 19,
        nacionality: NACIONALITY.BRAZILIAN
	}

    const casino: Casino = {
        name: "BR Cassino",
        location: LOCATION.BRAZIL
    }

	const result = verifyAge(casino, [user])

    expect(result.brazilians.allowed.length).toBeGreaterThan(0)
    expect(result.brazilians.allowed.length).toBeLessThan(2)
})

test("Testing persons authorized to enter a casino", () => {
	const user: User2 = {
		name: "Astrodev",
		age: 19,
        nacionality: NACIONALITY.AMERICAN
	}

    const casino: Casino = {
        name: "BR Cassino",
        location: LOCATION.BRAZIL
    }

	const result = verifyAge(casino, [user])

    expect(result.americans.unallowed.length).toEqual(0)
})

test("Testing persons authorized to enter a casino", () => {
	const user: User2 = {
		name: "Astrodev",
		age: 19,
        nacionality: NACIONALITY.BRAZILIAN
	}

    const user2: User2 = {
		name: "Astrodev2",
		age: 19,
        nacionality: NACIONALITY.AMERICAN
	}

    const casino: Casino = {
        name: "EUA Cassino",
        location: LOCATION.EUA
    }

	const result = verifyAge(casino, [user, user, user2, user2])
	
	expect(result.brazilians.unallowed).toEqual(["Astrodev", "Astrodev"])
    expect(result.americans.unallowed).toEqual(["Astrodev2", "Astrodev2"])
})

test("Testing persons authorized to enter a casino", () => {
	const user: User2 = {
		name: "Astrodev",
		age: 19,
        nacionality: NACIONALITY.BRAZILIAN
	}

    const user2: User2 = {
		name: "Astrodev2",
		age: 21,
        nacionality: NACIONALITY.AMERICAN
	}

    const casino: Casino = {
        name: "EUA Cassino",
        location: LOCATION.EUA
    }

	const result = verifyAge(casino, [user, user, user2, user2])
	
	expect(result.brazilians.unallowed.length).toBeGreaterThan(1)
    expect(result.americans.unallowed.length).toBeLessThan(1)
    expect(result.americans.allowed.length).toEqual(2)
})

//Não consegui fazer a partir do desafio 6
