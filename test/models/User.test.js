const User = require ('./../../app/models/user');

describe("unit test for user class",()=>{
    /* test('create an user object',()=>{
        //aqui invocas el codigo que usarás en tu app
        const user = new User(1,"Carlogilmar","Carlo","Bio","dataCreated","lastUpdate");
        //aqui van los resultados de ese código:
        //esta es una comparación que va a igualar el valor de la izquierda con el valor de la derecha(valor esperado)
        expect(user.id).toBe(1);
        expect(user.username).toBe("Carlogilmar");
        expect(user.name).toBe("Carlo");
        expect(user.bio).toBe("Bio");
        expect(user.dataCreated).toBe("dataCreated");
        expect(user.lastUpdate).toBe("lastUpdate");
    }), */
    test('create an method for dataCreated and lastUpdate',()=>{
        //aqui invocas el codigo que usarás en tu app
        const user = new User(1,"Carlogilmar","Carlo","Bio");
        //aqui van los resultados de ese código:
        //esta es la segunda parte que Las propiedades `dateCreated` y `lastUpdated` 
        //deberán ser datos de tipo fecha que guarden el momento en que se instancie un nuevo objeto de la clase `User`.
        expect(user.id).toBe(1);
        expect(user.username).toBe("Carlogilmar");
        expect(user.name).toBe("Carlo");
        expect(user.bio).toBe("Bio");
        expect(user.dataCreated).not.toBeUndefined();// verifica que el valor no sea undefined
        expect(user.lastUpdate).not.toBeUndefined();
    }),
    /* Requerimiento 3: Cada objeto tipo user necesita los siguietes gettes: 
    `getUsername`, `getBio`, `getDateCreated`, `getLastUpdated`.
    Solución: Agrega los getters regresando la propiedad indicada, no olvides usar `this`. */
    test('add getters',()=>{
        //aqui invocas el codigo que usarás en tu app
        const user = new User(1,"Carlogilmar","Carlo","Bio");
        //aqui van los resultados de ese código:
        //esta es la segunda parte que Las propiedades `dateCreated` y `lastUpdated` 
        //deberán ser datos de tipo fecha que guarden el momento en que se instancie un nuevo objeto de la clase `User`.
        expect(user.getUserName()).toBe("Carlogilmar");
        expect(user.getBio()).toBe("Bio");
        expect(user.getDataCreated()).not.toBeUndefined();// verifica que el valor no sea undefined
        expect(user.getLastUpdate()).not.toBeUndefined();
    }),
    /* Requerimiento 4: Cada objeto necesita los siguientes setters: 
    `setUsername` y `setBio`, para actualizar dichas propiedades.
    Solución: Agrega los setters usando la palabra `set` y modificando el atributo indicado. */
    test('add setters',()=>{
        //aqui invocas el codigo que usarás en tu app
        const user = new User(1,"Carlogilmar","Carlo","Bio");
        user.setUserName = "Gilmar";
        expect(user.username).toBe("Gilmar");
        //aqui van los resultados de ese código:
        //esta es la segunda parte que Las propiedades `dateCreated` y `lastUpdated` 
        //deberán ser datos de tipo fecha que guarden el momento en que se instancie un nuevo objeto de la clase `User`.
        user.setBio = "New Bio";
        expect(user.bio).toBe("New Bio");
    })
})