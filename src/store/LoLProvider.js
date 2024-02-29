import LolContext from "./lol-context";

import React from 'react';
import { useState } from 'react';

const LoLProvider = (props) => {
    
    const [user, setUser] = useState("");
    const [champ, setChamp] = useState("Akali");
    const [users,setUsers] = useState([]);
    const [num, setnum] = useState(0);
    const APIKEY = "RGAPI-4313ec9a-4563-468c-83fa-c5ede69d91b1";

    return (
        <LolContext.Provider value={{ user,setUser,champ,setChamp,APIKEY,users,setUsers,num,setnum }}>
            {props.children}
        </LolContext.Provider>
    );
};

export default LoLProvider;
