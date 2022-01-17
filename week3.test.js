const toggleTable = require("./week3");
test("The table is toggled", () => {
   expect(toggleTable("open")).tobe("closed"); 
});