import { Route, Routes, Navigate} from "react-router-dom";

import FantasyForecaster from "../FantasyForecaster";
import FantasyLanding from "./pages/FantasyLanding";
import DraftRankings from "./pages/DraftRankings";
import RookiePreview from "./pages/RookiePreview";
import FantasyNoMatch from "./pages/FantasyNoMatch";
import LandingSpots from "./pages/LandingSpots";

export default function FantasyRouter() {
    return (
    // <HashRouter>
        <Routes>
            <Route path="/" element={<FantasyForecaster />}>
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