const UserService = require('./../../app/Services/UserService');

describe("tests for UserService class",() =>{
    test('1) create a new user using the UserService',()=>{
        const user = UserService.create(1,'carlogirlmar',"Carlo");
        expect(user.username).toBe("carlogirlmar");
        expect(user.name).toBe("Carlo");
        expect(user.id).toBe(1);
        expect(user.bio).not.toBeUndefined();
    }),
    // Requerimiento 2: Prueba de unidad:
    test('2) Get all user data in a list',()=>{
        const user = UserService.create(1,'carlogirlmar',"Carlo");
        const userInfoList = UserService.getInfo(user);
        expect(userInfoList[0]).toBe(1);
        expect(userInfoList[1]).toBe("carlogirlmar");
        expect(userInfoList[2]).toBe("Carlo");
        expect(userInfoList[3]).toBe("Sin bio");
    }),
    //Requerimiento 3
    test('3) Update username', () =>{
        const user = UserService.create(1,"carlogilmar","Carlo");
        UserService.updateUserUsername(user,'Carlog');
        expect(user.setUsername).toBe('Carlog');
    }),
    //Requerimiento 4
    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "carlogilmar1", "Carlo")
        const user2 = UserService.create(1, "carlogilmar2", "Carlo")
        const user3 = UserService.create(1, "carlogilmar3", "Carlo")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("carlogilmar1")
        expect(usernames).toContain("carlogilmar2")
        expect(usernames).toContain("carlogilmar3")
      })
})
