import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import React, {useEffect } from 'react';
import ReactGA from 'react-ga';
ReactGA.initialize('G-CE4KYHDZN3');

import FantasyForecast from "../FantasyForecast";
import FantasyLanding from "./pages/FantasyLanding";
import DraftRankings from "./pages/DraftRankings";
import RookiePreview from "./pages/RookiePreview";
import FantasyNoMatch from "./pages/FantasyNoMatch";
import LandingSpots from "./pages/LandingSpots";

export default function FantasyRouter() {
    const location = useLocation();

    useEffect(() => {
        // Google Analytics setup
        const sendPageView = (location) => {

             // Set custom page title for Google Analytics tracking
            ReactGA.set({ page: location.pathname });
            ReactGA.pageview(window.location.pathname);
        };

        sendPageView(location);

    }, [location]);

    return (
    // <HashRouter>
        <Routes>
            <Route path="/" element={<FantasyForecast />}>
                <Route index element={<FantasyLanding />} />
                {/* TODO: Add your routes here! */}
                <Route path="/draft-rankings" element={<DraftRankings />} />
                <Route path="/rookie-preview" element={<RookiePreview />} />
                <Route path="/landing-spots" element={<LandingSpots />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Route>
        </Routes>
    // </HashRouter>
    );
}