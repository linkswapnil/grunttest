describe("My module", function() {
    it("answers to myMethod() correctly", function() {
        var instance = new MyModule();
        console.log("In");
        expect(instance.myMethod()).toEqual("Hello    world");
        expect(instance.myMethod()).toEqual("Hello world");
        expect(instance.myMethod()).toEqual("Hello world");
    });

    it("answers to myMethod() correctly", function() {
        var instance = new MyModule();
        expect(instance.myMethod()).toEqual("Hello world");
        expect(instance.myMethod()).toEqual("Hello world");
        expect(instance.myMethod()).toEqual("Hello world");
    });
});
