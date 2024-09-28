import db from "../db";

async function seedUsers() {
	try {
		await db.user.upsert({
			where: {
				id: 1,
			},
			create: {
				id: 1,
				email: "johndoe@example.com",
				name: "John Doe",
			},
			update: {},
		});

		await db.user.upsert({
			where: {
				id: 2,
			},
			create: {
				id: 2,
				email: "janesmith@example.com",
				name: "Jane Smith",
			},
			update: {},
		});
	} catch (error) {
		console.error("Error seeding users:", error);
		throw error;
	}
}

async function seedTweets() {
	const tweets = [
		{
			id: 1,
			content: "This is the first tweet.",
			authorId: 1,
		},
		{
			id: 2,
			content: "This is the second tweet.",
			authorId: 2,
		},
		{
			id: 3,
			content: "This is the third tweet.",
			authorId: 1,
		},
		{
			id: 4,
			content: "This is the fourth tweet.",
			authorId: 2,
		},
	];

	try {
		const existingTweets = await db.tweet.findMany();
		if (existingTweets.length > 0) {
			console.error("DB is already seeded with Tweets.");
			return;
		}

		await db.tweet.createMany({ data: tweets });
	} catch (error) {
		console.error("Error seeding Tweets:", error);
		throw error;
	}
}

async function seedDatabase() {
	try {
		await seedUsers();
		await seedTweets();
	} catch (error) {
		console.error("Error seeding database:", error);
		throw error;
	} finally {
		await db.$disconnect();
	}
}

seedDatabase().catch((error) => {
	console.error("An unexpected error occurred during seeding:", error);
	process.exit(1);
});
