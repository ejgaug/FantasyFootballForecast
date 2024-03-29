import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import FantasyNavbar from "./nav/FantasyNavbar";
import FantasyDataContext from "../contexts/FantasyDataContext";

export default function FantasyForecast() {

    const [filters, setFilters] = useState([]);

    return <div>
        <FantasyNavbar />
        <div style={{ marginLeft: "1rem", marginRight: "1rem", marginTop: "1rem" }}>
            <FantasyDataContext.Provider value={filters}>
                <Outlet />
            </FantasyDataContext.Provider>
        </div>
    </div>
}