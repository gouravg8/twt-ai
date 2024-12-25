"use client";
import { createContext, useContext, useEffect, useState } from "react";
import Loading from "../loading";

interface User {
	id: string;
	email: string;
	given_name: string;
	family_name: string;
	picture: string;
	phone_number: string;
}

interface UserContextType {
	user: User | null;
	setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		const getKindeSession = async () => {
			const res = await fetch("/api/kindeSession");
			const data = await res.json();
			setUser(data.user);
		};

		getKindeSession();
	}, []);

	if (user === null) {
		return <Loading />;
	}

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => {
	const context = useContext(UserContext);
	if (context === undefined) {
		throw new Error("useUser must be used within a UserContextProvider");
	}
	return context;
};

export default UserContextProvider;
