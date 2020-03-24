const request = require("request");
const contacts = require("../modules/books");

describe("Unit tests on books module", () => {
	describe("load all books", () => {
		it("should have 4 books", () => {
			let results = contacts.list();
			expect(results.length).toBe(4);
		});
	});
});