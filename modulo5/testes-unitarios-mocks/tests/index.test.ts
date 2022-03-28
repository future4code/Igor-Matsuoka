import { Character, performAttack, validateCharacter } from "../src"

describe("Testing validatingCharacter", ()=>{
    test("Should return false for empty name", ()=>{
            const result = validateCharacter({
                name: "",
                life: 3000,
                strength: 5000,
                defense: 3000
            })
            expect(result).toBe(false)
    })

    test("Should return false for empty life", ()=>{
        const result = validateCharacter({
            name: "Ryu",
            life: 0,
            strength: 5000,
            defense: 3000
        })
        expect(result).toBe(false)
    })

    test("Should return false for empty strength", ()=>{
        const result = validateCharacter({
            name: "Ryu",
            life: 2000,
            strength: 0,
            defense: 3000
        })
        expect(result).toBe(false)
    })

    test("Should return false for empty defense", ()=>{
        const result = validateCharacter({
            name: "Ryu",
            life: 2000,
            strength: 3000,
            defense: 0
        })
        expect(result).toBe(false)
    })

    test("Should return false for life or strength or defende < 0", ()=>{
        const result = validateCharacter({
            name: "Ryu",
            life: 2000,
            strength: 3000,
            defense: -2000
        })
        expect(result).toBe(false)
    })

    test("Should return false for life or strength or defende < 0", ()=>{
        const result = validateCharacter({
            name: "Ryu",
            life: 2000,
            strength: -3000,
            defense: 2000
        })
        expect(result).toBe(false)
    })

    test("Should return false for life or strength or defende < 0", ()=>{
        const result = validateCharacter({
            name: "Ryu",
            life: -2000,
            strength: 3000,
            defense: 2000
        })
        expect(result).toBe(false)
    })

    test("Should return false for life or strength or defende < 0", ()=>{
        const result = validateCharacter({
            name: "Ryu",
            life: -2000,
            strength: -3000,
            defense: -2000
        })
        expect(result).toBe(false)
    })

    test("Should return true for all valid inputs", ()=>{
        const result = validateCharacter({
            name: "Ryu",
            life: 2000,
            strength: 3000,
            defense: 2000
        })
        expect(result).toBe(true)
    })
})

describe("Testing performAttack", ()=>{
    test("Should return defender received damage", ()=>{
        const validatorMock = jest.fn(() => {
            return true;
        });
    
        const attacker: Character = {
            name: "Scorpion",
            life: 1500,
            defense: 200,
            strength: 600,
        };
      
        const defender: Character = {
            name: "Kitana",
            life: 1500,
            defense: 400,
            strength: 800,
        };
    
        performAttack(attacker, defender, validatorMock as any)
        
        expect(defender.life).toEqual(1300)
        expect(validatorMock).toHaveBeenCalled()
        expect(validatorMock).toHaveBeenCalledTimes(2)
        expect(validatorMock).toHaveReturnedTimes(2)
    })
    
    test("Should return invalid character error", () => {
      
        const validatorMock = jest.fn(() => {
          return false;
        });
    
        const attacker: Character = {
          name: "",
          life: 1500,
          defense: 200,
          strength: 600,
        };
    
        const defender: Character = {
          name: "Kitana",
          life: 1500,
          defense: 400,
          strength: 800,
        };
    
        try {
          performAttack(attacker, defender, validatorMock as any);
        } catch (error:any) {
          expect(error.message).toBe("Invalid character");
          expect(validatorMock).toHaveBeenCalled();
          expect(validatorMock).toHaveBeenCalledTimes(1);
          expect(validatorMock).toHaveReturnedTimes(1);
        } finally {
            expect.assertions(4);
        }
    });
})
