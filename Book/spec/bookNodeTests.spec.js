const request = require("request");

const raleigh_url = 'http://localhost:3034/Books/all/Raleigh';
const durham_url = 'http://localhost:3034/Books/all/Durham';
const bad_url = 'http://localhost:3034/Books/all/Cary';
const team_url = 'http://localhost:3034/Books/team';

describe("Node Tests", () => {
	describe("GET all books with Raleigh tax", () => {
		it("returns correct Raleigh tax", (done) => {
			request.get(raleigh_url, (error, response, body) =>
			 {
					expect(body).toBeTruthy();
					expect(body).toContain("27.94");
					done();
			 });
		});
	});

	describe("GET all books with Durham tax", () => {
		it("returns correct Durham tax", (done) => {
			request.get(durham_url, (error, response, body) =>
			 {
					expect(body).toBeTruthy();
					expect(body).toContain("28.07");
					done();
			 });
		});
	});

	describe("GET GeC", () => {
		it("returns GeC", (done) => {
			request.get(team_url, (error, response, body) =>
			 {
					expect(body).toBeTruthy();
					expect(body).toContain("Chris Koh");
					done();
			 });
		});
	});

	describe("returns 400 with invalid city", () => {
		it("returns 400", (done) => {
			request.get(bad_url, (error, response, body) =>
			 {
				  expect(response.statusCode).toBe(400);
					done();
			 });
		});
	});
});