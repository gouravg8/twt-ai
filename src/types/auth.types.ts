interface Signup {
	name: string;
	email: string;
	password: string;
}

interface Login {
	email: string;
	password: string;
}

export type { Signup, Login };