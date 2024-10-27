interface Signup {
	name: string;
	email: string;
	password: string;
}

interface Login {
	email: string;
	password: string;
}

type User = {
	id: string;
	email: string;
	name: string;
};
export type { Signup, Login, User };
