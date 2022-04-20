import axios from "axios";
import React, { useContext, useState, useEffect } from "react";

interface AppContextInterface {
    user: string | undefined;
    profile: object;
    repo: object[];
}

const UserContext = React.createContext<AppContextInterface | null>(null);

export function useUser() {
    return useContext(UserContext);
}

type Props = {
    children: React.ReactNode;
};

export function UserProvider({ children }: Props) {
    const user: string | undefined = process.env.REACT_APP_USERNAME;
    const [profile, setProfile] = useState<object>({});
    const [repo, setRepo] = useState<object[]>([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_BASE_URL + `/users/${user}`).then((res) => {
            setProfile(res.data);
        });
        axios.get(process.env.REACT_APP_BASE_URL + `/users/${user}/repos`).then((res) => {
            setRepo(res.data);
        });
    }, [user]);

    const value: AppContextInterface = {
        user,
        profile,
        repo,
    };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
