import LolContext from "./lol-context";

import React from 'react';
import { useState } from 'react';

const LoLProvider = (props) => {
    
    const [user, setUser] = useState("");
    const [champ, setChamp] = useState("Akali");
    const [users,setUsers] = useState([]);
    const [num, setnum] = useState(0);
    const APIKEY = "RGAPI-1c8586a1-e783-4c13-ab06-5ef6740f3d05";

    return (
        <LolContext.Provider value={{ user,setUser,champ,setChamp,APIKEY,users,setUsers,num,setnum }}>
            {props.children}
        </LolContext.Provider>
    );
};

export default LoLProvider;
