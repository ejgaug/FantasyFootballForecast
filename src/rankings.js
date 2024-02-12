import packersLogo from './assets/Packers_logo.svg'; import bearsLogo from './assets/Bears_logo.svg';
import lionsLogo from './assets/Lions_logo.svg'; import vikingsLogo from './assets/Vikings_logo.svg';
import eaglesLogo from './assets/Eagles_logo.svg'; import cowboysLogo from './assets/Cowboys_logo.svg';
import giantsLogo from './assets/Giants_logo.svg'; import commandersLogo from './assets/Commanders_logo.svg';
import falconsLogo from './assets/Falcons_logo.svg'; import carolinaLogo from './assets/Carolina_logo.svg';
import buccaneersLogo from './assets/Buccaneers_logo.svg'; import saintsLogo from './assets/Saints_logo.svg';
import ninersLogo from './assets/Niners_logo.svg'; import seahawksLogo from './assets/Seahawks_logo.svg';
import cardinalsLogo from './assets/Cardinals_logo.svg'; import ramsLogo from './assets/Rams_logo.svg';
import bengalsLogo from './assets/Bengals_logo.svg'; import ravensLogo from './assets/Ravens_logo.svg';
import brownsLogo from './assets/Browns_logo.svg'; import steelersLogo from './assets/Steelers_logo.svg';
import billsLogo from './assets/Bills_logo.svg'; import dolphinsLogo from './assets/Dolphins_logo.svg';
import jetsLogo from './assets/Jets_logo.svg'; import patriotsLogo from './assets/Patriots_logo.svg';
import texansLogo from './assets/Texans_logo.svg'; import jaguarsLogo from './assets/Jaguars_logo.svg';
import coltsLogo from './assets/Colts_logo.svg'; import titansLogo from './assets/Titans_logo.svg';
import chiefsLogo from './assets/Chiefs_logo.svg'; import chargersLogo from './assets/Chargers_logo.svg';
import broncosLogo from './assets/Broncos_logo.svg'; import raidersLogo from './assets/Raiders_logo.svg';
import adonaiMitchell from './assets/adonai-mitchell.jpg'; import audricEstime from './assets/audric-estime.jpg';
import blakeCorum from './assets/blake-corum.jpg'; import boNix from './assets/Bo-Nix.jpg';
import braelonAllen from './assets/braelon-allen.jpg'; import brendenRice from './assets/brenden-rice.png';
import brianThomasJr from './assets/brian-thomas-jr.jpg'; import brockBowers from './assets/brock-bowers.jpg';
import cadeStover from './assets/cade-stover.jpg'; import buckyIrving from './assets/bucky-irving.jpg';
import calebWilliams from './assets/caleb-williams.jpg'; import drakeMaye from './assets/drake-maye.jpg';
import haydenHatten from './assets/hayden-hatten.jpg'; import jatavionSanders from './assets/jatavion-Sanders.jpg';
import jacobCowing from './assets/jacob-cowing.jpg'; import jalenMcmillan from './assets/jalen-mcmillan.jpg';
import jalynnPolk from './assets/jalynn-polk.jpg'; import jamariThrash from './assets/jamari-thrash.jpg';
import javonBaker from './assets/javon-baker.jpg'; import jaydenDaniels from './assets/jayden-daniels.jpg';
import jaylenWright from './assets/jaylen-wright.jpg'; import jermaineBurton from './assets/jermaine-burton.jpg';
import jjMccarthy from './assets/jj-mccarthy.jpg'; import johnnyWilson from './assets/johnny-wilson.jpg';
import jonothanBrooks from './assets/jonothan-brooks.jpg'; import kendallMilton from './assets/kendall-milton.jpg';
import keonColeman from './assets/keon-coleman.jpg'; import laddMcconkey from './assets/ladd-mcconkey.jpg';
import malachiCorley from './assets/malachi-corley.jpg'; import malikNabers from './assets/malik-nabers.jpg';
import marshawnLloyd from './assets/marshawn-lloyd.jpg'; import marvinWilliams from './assets/marvin-williams.jpg';
import michaelPenixJr from './assets/Michael-Penix-Jr.png'; import michaelPratt from './assets/Michael-Pratt.jpg';
import rayDavis from './assets/ray-davis.jpg'; import rickyPearsall from './assets/ricky-pearsall.jpg';
import romanWilson from './assets/roman-wilson.jpg'; import romeOdunze from './assets/rome-odunze.jpg';
import spencerRattler from './assets/spencer-rattler.jpg'; import tezWalker from './assets/tez-walker.jpg';
import treyBenson from './assets/trey-benson.jpg'; import troyFranklin from './assets/troy-franklin.jpg';
import willShipley from './assets/will-shipley.jpg'; import xavierLegette from './assets/xavier-legette.jpg'; 
import xavierWorthy from './assets/xavier-worthy.jpg'; import dylanLaube from './assets/dylan-laube.png'

const playerInfo = [
    {name: "Marvin Harrison Jr.", pos: "WR", age: "21", uni: "Ohio State", size: `6'4" | 205 lbs`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", recTdRec: "67 (14 TDs)", recYrds: "1,211 yds",
        lastEditTime: "1/26/24", 
        analysis: "The son of Hall Of Fame wide receiving, Marvin Harrison Jr. breaks all the molds. The only criticism against the 2023 Biletnikoff Award winner is " +
            "that his slight frame causes him to struggle in press coverage and go down quickly after the catch. Other than that, he excels in every metric and facet " +
            "of the game. His acceleration, speed, footwork, and agility are very impressive at his size. He possesses ball skills that are rivaled by few. He is " +
            "excellent on the sideline and in traffic due to his rare ball tracking skills and ability to adjust to throws. In his 13 games played in 2022 and 12 in " +
            "2023, he hauled in 14 TDs in both seasons, in addition to logging 1263 and 1211 receiving yards over this time. While the lack of improvement in those " +
            "numbers may be disappointing, this can partially be explained by the significant downgrade at QB following the departure of CJ Stroud in 2022. However, " +
            "under worse QB play, Harrison Jr. became even more of the focal point, hauling in 54% of the team's receiving TDs in 2023. This is an estonishing number " +
            "on any team, but at a powerhouse like Ohio State, with other elite WR talent in Emeka Egbuka, this is unheard of. If he can add some strength to his game, " +
            "signs point to a generational talent, annual All-Pro appearances, and a top-10 fantasy WR.", 
        imgSite: `thespun.com`, imgUrl: "https://thespun.com/.image/t_share/MjAyMTUwMDk1ODc2MDA2OTI0/penn-state-v-ohio-state.jpg",
        img: marvinWilliams}, 
    {name: "Caleb Williams", pos: "QB", age: "21", uni: "USC", size: `6'1" | 216 lbs`, fortyYrd: "?.??", threeCone: "?.??", compPerc: "68.6%", td2Int: "30/5", passYrds: "3,633 yds", yrdsPerAtt: "9.4 yds", rush: "136 yds (11 TDs)", 
        lastEditTime: "1/26/24", 
        analysis: "Caleb's Heisman season was truly one for the record books with 4,537 yards, 42 TDs, only 5 INTs, and a passer rating of 168.5. After winning the " +
            "award for the 2022 season, Williams had a comparatively disappointing 2023; seeing a decline in production and only going 7-5 as a team." + 
            "However after the departure of Jordan Addison (Vikings), his offensive weapons were severely depleted. Despite all of this, his completion percentage " +
            "and passer rating increased. In addition, take out his awful 3 INT game against Notre Dame " +
            "(one of two games held under 280 total yards), and he'd have an absurd 14.5 TD to INT ratio. Caleb's biggest advantages include is other-worldly arm talent, " +
            "improvisation, and feel for the game. He can make any pass on the field and places the ball exactly where it needs to be to continue his receivers momentum. " +
            "He also possesses an impressive scrambling ability that resulted in 11 rushing TDs this past year. However, at times he is loose " +
            "with the ball. While his talent is something to behold, he is often too reliant on his arm talent. He favors the big play " +
            "rather than taking an easy gain, and tends to abandon footwork and technique. This leads to uncharacteristic and avoidable off-target balls. He also " +
            "sometimes leaves the pocket too early to either take it himself or throw an off platform pass. Some also have concerns about his character  " +
            "following the draft demands he has made. With the right coaching staff, all of these worries could subside, but they are something to think about. " +
            "With Caleb Williams, the positives vastly outweigh the negatives. He has the talent to be a franchise QB and an annual top-10 fantasy QB.", 
        imgSite: `collegefootballnetwork.com`, imgUrl: "https://collegefootballnetwork.com/wp-content/uploads/2023/12/caleb-williams-latest-status-holiday-bowl.jpg",
        img: calebWilliams}, 
    {name: "Malik Nabers", pos: "WR", age: "20", uni: "LSU", size: `6'0 | 201 lbs"`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", recTdRec: "89 (14 TDs)", recYrds: "1,569 yds",
        lastEditTime: "1/10/24", 
        analysis: "If Marvin Harrison Jr. wasn't in this draft class, Malik would be the WR locked into one of the top 4 picks. Malik had far better " +
            "numbers than Marvin Harrison Jr. in 2023. Some may credit Malik's production to his " +
            "Heisman winning QB, and the lack of elite QB play at OSU. However, Nabers had massive target competition with fellow projected first round pick, " +
            "Brian Thomas Jr. who had a monster season of his own. He is an exceptional athlete with great acceleration and long speed. This combined with his " +
            "quick, snappy routes allows him to get open at every level of the field. He is a very dangerous deep threat. His speed, strength, and vision make him a " +
            "task to bring down in the open field. Malik Nabers is truly a big play waiting to happen and an assassin in YAC situations. The only negative is that " +
            "like Harrison Jr., he can sometimes be slow to get off the line, especially in press coverage, but he has the physicals to overcome this. He should have " +
            "an immediate impact on any NFL roster, and, providing a solid landing spot, a rookie fantasy contributor.", 
        imgSite: `people.com`, imgUrl: "https://people.com/thmb/I_Hh94F3wdksYhtkTAgzmjtzCu0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(979x225:981x227)/malik-nabers-lsu-carrying-weapon-022323-2-a6504e70d82f481585a6a92ead121b64.jpg",
        img: malikNabers}, 
    {name: "Jayden Daniels", pos: "QB", age: "23", uni: "LSU", size: `6'4" | 210 lbs`, fortyYrd: "?.??", threeCone: "?.??", compPerc: "72.2%", td2Int: "40/4", passYrds: "3,812 yds", yrdsPerAtt: "11.7 yds", rush: "1,134 yds (10 TDs)", 
        lastEditTime: "2/7/24", 
        analysis: "The 2023 Heisman winner had one of the best duel-threat QB seasons college football has ever seen. Whether it was on the ground or through the air, " +
            "Jayden Daniels could not be stopped. The incredible weapons around him can't be overlooked as major contributors to his elevation, but Daniels was truly " +
            "incredible. He is the most electric running QB we've seen since Lamar Jackson won the Heisman at Louisville and is a more polished passer than the now 2-time " +
            "MVP was coming out of college. He has truly elite speed, burst, and agility regardless of position allowing him to slice up defenses for massive gains on the " +
            "ground. In the passing game, he has incredible deep ball accuracy, regularly hitting his guys in stride deep down the field. His athleticism allows him to " +
            "extend plays, giving his receivers time to get open. Daniels showed above-average processing and doesn't abandon the pocket too quickly to run it. There are " +
            "some slight concerns about his velocity as he sometimes struggles to fit passes into tight windows. He also doesn't display great accuracy in the short and " +
            "intermediate areas. Given his rushing ability, his skinny frame makes injury probability seem more likely. Daniels has the talent to be a solid NFL starter, and " +
            "given the high draft capital he'll receive, he should be a locked in fantasy starter for at least 3 years.", 
        imgSite: `si.com`, imgUrl: "https://www.si.com/.image/t_share/MjAyNjMzMDI0NDE0Njg4MzI0/daniels.jpg",
        img: jaydenDaniels}, 
    {name: "Rome Odunze", pos: "WR", age: "21", uni: "Washington", size: `6'3" | 216 lbs`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", recTdRec: "92 (13 TDs)", recYrds: "1,640 yds",
        lastEditTime: "1/26/24", 
        analysis: "Odunze was the alpha in Washington's stacked WR in the 2023 season, and is, maybe, the most league ready WR in this class. He was able to " +
        "create space at all levels of the field and against any defender due to his elite combination of strength and mature route-running. His great ball skills " +
        "and above average size help him to be a threat in contested catch situations. He is extremely fluid for a player of his size. Once he has the ball " +
        "in his hands, he has the strength, speed, and vision to wreck havoc in the open field. He does lack truly elite speed and explosiveness, but makes up for it " +
        "with his polished route-running. He should have an instant impact in the NFL and will likely be a valuable fantasy player.", 
        imgSite: `247sports.com`, imgUrl: "https://s3media.247sports.com/Uploads/Assets/148/350/11350148.jpg",
        img: romeOdunze}, 
    {name: "Brock Bowers", pos: "TE", age: "21", uni: "Georgia", size: `6'4" | 240 lbs`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", recTdRec: "56 (6 TDs)", recYrds: "714 yds",
        lastEditTime: "1/10/24", 
        analysis: "The 2022 and 2023 John Mackey Award winner is one of the best TE prospects we've ever seen. He's dominated the offense of one of the nations best teams, " + 
            "Georgia, since his first game. He won two National Championships in that time. His rare mix of size, speed, explosiveness, balance, and vision make him an " +
            "elite YAC threat, a rare attribute at the TE position. His YAC ability is what truly separates him from other TEs and is what has led some to call him " +
            "the next Travis Kelce. He also has great hands and an impressive ability to get open which open up for YAC situations. The only negatives in his game are " +
            "that he plays too much like a WR at times, which isn't much of a negative in fantasy circles. For example, he runs routes a less physically than " +
            "some may like and his average size for a TE lead to concerns about his consistency as a blocker at the next level. ", 
        imgSite: `thedraftnetwork.com`, imgUrl: "https://www.thedraftnetwork.com/img/random/USATSI_22177129-1600x900.jpg",
        img: brockBowers}, 
    {name: "Drake Maye", pos: "QB", age: "21", uni: "North Carolina", size: `6'4" | 229 lbs`, fortyYrd: "?.??", threeCone: "?.??", compPerc: "63.3%", td2Int: "24/9", passYrds: "3,608 yds", yrdsPerAtt: "8.5 yds", rush: "449 yds (9 TDs)", 
        lastEditTime: "2/7/24", 
        analysis: "Drake Maye is an excellent QB prospect with the prototypical size and excellent arm talent. Maye is a very good athlete with surprising quickness and " +
            "speed for a guy of his size. This gives him a solid rushing upside for fantasy and allows him to escape the pocket to extend plays. While Maye has the " +
            "ability to make any throw on the field, his accuracy lacked the consistency we're looking for. He also threw some very bad interceptions as a result of " +
            "trying to do too much and lacking elite processing skills. Maye is an elite. raw prospect at the QB position that needs work to become an NFL star. " +
            "With the tools he has, he is worth a pick. His low end comparison would be a more talented version of another UNC QB, Sam Howell, but even Howell gave " +
            "solid fantasy production for the first half of 2023. ", 
        imgSite: `spectrumlocalnews.com`, imgUrl: "https://s7d2.scene7.com/is/image/TWCNews/drake_maye_nc_ap-1",
        img: drakeMaye}, 
    {name: "Troy Franklin", pos: "WR", age: "20", uni: "Oregon", size: `6'2" | 187 lbs`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", recTdRec: "81 (14 TDs)", recYrds: "1,383 yds",
        lastEditTime: "1/26/24", // LOVE HIM
        analysis: "Franklin is an extremely smooth, complete route-runner, maintaining his elite speed through the entirety of his routes. This, combined with his " +
            "extensive release package, allow him to consistently separate from defenders and escape tackles once the ball is in his hands. His elite acceleration " +
            "allows him to quickly regain top speed and continue down field for impressive YAC given his thinner frame. He has the ability to make explosive plays " +
            "from both the slot and outside. His shortcomings are due to his skinny, lanky frame. He isn't great battling through contact in routes or at the catch point. " +
            "On top of all there is to be excited about Troy Franklin, he'll be 21 for the entirety of his rookie season (very young). Unless he gets drafted " + 
            "to an unfortunate situation, expect great success for Franklin.", 
        imgSite: `247sports.com`, imgUrl: "https://s3media.247sports.com/Uploads/Assets/133/999/11999133.jpg",
        img: troyFranklin}, 
    {name: "Brian Thomas Jr.", pos: "WR", age: "21", uni: "LSU", size: `6'4" | 205 lbs`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", recTdRec: "68 (17 TDs)", recYrds: "1,177 yds",
        lastEditTime: "1/26/24", 
        analysis: "Thomas Jr. is a large, physically imposing WR with great acceleration and top speed making him a major threat down the field. His ball " +
            "tracking skills and aggressive play leaves him in a good situation to bring in any contested catch. Unlike most players of his size, he is very fluid and, " +
            "at times, can create separation through snappy route-running. He has a great release package that allows him to beat his man off the line consistently. " +
            "Through explosiveness, speed, and fluidity, he can be a dangerous YAC player. He is extremely effective in the red-zone (Led NCAA in receiving TDs) " +
            "and is a monster when it comes to high-pointing the ball. If he can improve his route-running, he could become a true WR1 for an NFL team and your " + 
            "fantasy team.", 
        imgSite: `thedraftnetwork.com`, imgUrl: "https://www.thedraftnetwork.com/img/random/USATSI_21706171-1600x900.jpg",
        img: brianThomasJr},
    {name: "Adonai Mitchell", pos: "WR", age: "21", uni: "Texas", size: `6'4" | 196 lbs`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", recTdRec: "55 (11 TDs)", recYrds: "845 yds",
        lastEditTime: "1/26/24", 
        analysis: "Mitchell is an extremely athletically gifted WR that shows flashes of truly elite upside. He has a great release package and change of speed allowing " +
            "him to find separation from his defender. His body control, coordination, and ball-tracking abilities make him a highlight waiting to happen. His feel " +
            "for the game is elite and his play-style fits into today's NFL very well. His route-running is solid, but could use some polishing. Given his lanky build, " + 
            "he struggles with contact and isn't a big YAC threat. If he can improve his route running and learn to play stronger through contact, he could develop " +
            "into a great NFL WR with high fantasy upside.", 
        imgSite: `vox.com`, imgUrl: "https://cdn.vox-cdn.com/thumbor/7QhrC5d0quCKGf-CxLHS-sA9Vdg=/0x0:2000x1473/1200x800/filters:focal(1021x379:1341x699)/cdn.vox-cdn.com/uploads/chorus_image/image/72835296/usa_today_21819373.0.jpg",
        img: adonaiMitchell}, 
    {name: "Jonathon Brooks", pos: "RB", age: "20", uni: "Texas", size: `6'0" | 207 lbs`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", rushing: "1,139 yds (10 TDs)", ydsPerRush: "6.1 yds", recTdRec: "25 (1 TDs)", recYrds: "286 yds",
        lastEditTime: "2/3/24", // **Tore ACL late in season, but is a stud, held off 2 RBS behind him that can BALL
        analysis: "Brooks is at the top of this week RB class. Playing behind top-10 pick, Bijan Robinson, his snaps were limited prior to 2023. " +
            "After Robinson's departure, Brooks was impressive up until tearing his ACL late in the season. He has great patience and vision " +
            "in waiting for blocks to develop and finding the hole, and the size, shiftiness, and speed to pick up extra yards once he finds " +
            "that hole. He has also shown to have good hands in the receiving game and proficiency in pass-pro. Brooks doesn't have quite " +
            "the explosiveness as some of the uber-productive fantasy RBs in recent years. He'll have a harder time breaking off some of " +
            "the home-run plays that Jahmyr Gibbs and Devon Achane made a habit of last year because of this. Still, once he fully recovers " +
            "from the ACL, he has the talent to dominate his future backfield.",
        imgSite: `texasfootball.com`, imgUrl: "https://txfbstatic.blob.core.windows.net/txfb-static/img/articles/banner/editFG8A5014-copy-93022625.jpg",
        img: jonothanBrooks}, 
    {name: "Xavier Worthy", pos: "WR", age: "20", uni: "Texas", size: `6'1" | 172 lbs`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", recTdRec: "75 (5 TDs)", recYrds: "1,014 yds",
        lastEditTime: "1/27/24", 
        analysis: "Worthy is a very young with incredible route-running prowess. This, combined with his above-average speed and great quickness " +
            "allow him to create separation, primarily down the field. His rail-thin frame limits him when dealing with press coverage, jump " + 
            "balls, and in YAC situations. Despite his strength issues, he was extremely productive at Texas as a true freshman and continued to produce every " + 
            "year. It would be hard to repeat this dominance in the NFL, but maybe he'll be an outlier as a receiver under 175lbs. His frame gives him " +
            "a low floor, but his speed and talent give him elite upside. His landing spot will likely determine if he hits that upside.", 
        imgSite: `texassports.com`, imgUrl: "https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/texassports_com/images/2023/9/18/X_TD_Filtered_2023_09_16_DK-2.jpg",  
        img: xavierWorthy},
    {name: "Jalen McMillan", pos: "WR", age: "22", uni: "Washington", size: `6'1" | 192 lbs`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", recTdRec: "45 (5 TDs)", recYrds: "559 yds",
        lastEditTime: "2/2/24", // **Excellent route-runner at every level -> Gets open
        analysis: "Jalen McMillan is one of the most complete route-runners in this draft class. This, combined with his exceptional top end speed " +
            "and solid acceleration allow him to create separation at every level of the field. He has good hands and has shown flashes of an ability " + 
            "to rack up yards after the catch. While he has a slighter frame that leads to less effectiveness in high contact scenarios, he has shown " +
            "the toughness to battle through and come out on top. If he wasn't dealing with injuries for much of the 2023 season, people " + 
            "would be talking about McMillan a lot more.", 
        imgSite: `247sports.com`, imgUrl: "https://s3media.247sports.com/Uploads/Assets/404/613/10613404.jpg",
        img: jalenMcmillan}, 
    {name: "Trey Benson", pos: "RB", age: "21", uni: "Florida State", size: `6'1" | 221 lbs`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", rushing: "905 yds (14 TDs)", ydsPerRush: "5.8 yds", recTdRec: "20 (1 TDs)", recYrds: "227 yds",
        lastEditTime: "2/4/24", 
        analysis: "Benson is one of the more complete backs in this class. He has the elite acceleration and top end speed to take any touch " +
            "to the house. Combine this with his good ability in the passing game, he could be a nice fantasy contributor. He doesn't make many guys " +
            "miss due to a slight inability and a preference for running people over. Despite his tough play-style and bigger body, he isn't very good " +
            "in pass-pro which could lead to less playing time. If he lands somewhere with opportunity, he could be a solid NFL and fantasy RB.", 
        imgSite: `247sports.com`, imgUrl: "https://s3media.247sports.com/Uploads/Assets/729/337/11337729.jpg",
        img: treyBenson}, 
    {name: "Ja'Tavion Sanders", pos: "TE", age: "20", uni: "Texas", size: `6'3" | 252 lbs`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", recTdRec: "45 (2 TDs)", recYrds: "682 yds",
        lastEditTime: "2/6/24", 
        analysis: "If it wasn't for Brock Bowers, Sanders would be the talk of the town. There isn't much else you could ask for out of a TE " +
            "in the receiving game. He has elite hands, solid route-running, and great speed for a player of his size. Once the ball is in his " +
            "hands, he has the athleticism to continue down field for YAC yards. What holds him back is his less than ideal in-line blocking " +
            "ability. However, if he improves this, his coaches won't be able to keep him off the field. Dependent on his landing spot, he could " +
            "be an immediate valuable TE in fantasy.", 
        imgSite: `247sports.com`, imgUrl: "https://s3media.247sports.com/Uploads/Assets/448/967/11967448.jpg",
        img: jatavionSanders}, 
    {name: "Xavier Legette", pos: "WR", age: "23", uni: "South Carolina", size: `6'1" | 223 lbs`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", recTdRec: "71 (7 TDs)", recYrds: "1,255 yds",
        lastEditTime: "2/12/24",  
        analysis: "Prior to being measured 2in shorter and nearly 10lbs lighter at the Senior Bowl Legette was one of the most physically imposing " + 
            "WRs in this class. While smaller than originally thought, he still has the size and strength to bully many NFL DBs. He has excellent speed " +
            "and clear YAC upside. However, he doesn't have the burst, route-running, or game IQ to get open at a consistent level. Combine these flaws " +
            "with the fact that it took till his 5th season in college to break out, it's unlikely he'll become a valuable fantasy asset.", 
        imgSite: `wistv.com`, imgUrl: "https://cloudfront-us-east-1.images.arcpublishing.com/gray/AIHJH7RCRFCTXLC4RYFOKWK4HM.jpg",
        img: xavierLegette}, 
    {name: "Ladd McConkey", pos: "WR", age: "22", uni: "Georgia", size: `5'11" 1⁄2 | 187 lbs`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", recTdRec: "30 (2 TDs)", recYrds: "478 yds",
        lastEditTime: "2/12/24", // SPACE CREATOR 
        analysis: "Ladd doesn't have anywhere near the numbers of most of the receivers in this class, but that can be partially explained away by a lower volume passing " +
        "attack, elite target competition (Brock Bowers), and injuries. Despite never having eye-popping production, he continues to climb in NFL mocks. This is because" + 
        "McConkey is one of the best route-runners in this class. This, combined with his great burst and top end speed allow him to create separation at every level " +
        "of the field. What he lacks in size, he makes up with grit and IQ. He doesn't project to be a WR1 on a team, but he could provide very consistent production " +
        "as soon as he enters the league.",
        imgSite: `larrybrownsports.com`, imgUrl: "https://larrybrownsports.com/wp-content/uploads/2023/01/ladd-mcconkey.jpg",
        img: laddMcconkey}, 
    {name: "Bucky Irving", pos: "RB", age: "21", uni: "Oregon", size: `5'10" | 195 lbs`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", rushing: "1,180 yds (11 TDs)", ydsPerRush: "6.3 yds", recTdRec: "56 (2 TDs)", recYrds: "413 yds",
        lastEditTime: "2/4/24", // *Explosive pass catcher*
        analysis: "Bucky Irving is one of the more explosive backs in this class. He has elite top end speed and acceleration and makes guys " +
            "miss habitually. His good hands make him a threat in the receiving game, but he didn't see many targets more than a few yards " +
            "down field at Oregon. In spite of his smaller size, he doesn't shy away from contact and has had good durability though high usage " +
            "over the past couple years. Given his size, Bucky doesn't break tackles at the rate that you'd hope. Durability running out could " +
            "be a concern in the pros. Still, he has the skills to contribute on an NFL roster and in PPR leagues.", 
        imgSite: `247sports.com`, imgUrl: "https://s3media.247sports.com/Uploads/Assets/845/455/11455845.jpg",
        img: buckyIrving}, 
    {name: "Braelon Allen", pos: "RB", age: "20", uni: "Wisconsin", size: `6'2" | 245 lbs`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", rushing: "984 yds (12 TDs)", ydsPerRush: "5.4 yds", recTdRec: "28 (0 TDs)", recYrds: "131 yds",
        lastEditTime: "2/4/24", // * just turned 20
        analysis: "Braelon Allen has been dominating Big 10 football since he was 17 as a freshman. Now, newly 20, he enters the draft as by " +
            "far the biggest RB in the class. As one would assume, Braelon excels at shedding arm tackles and is a load to bring down. He has " +
            "also shown good vision and has a decent jump-cut for a man of his size. While it wasn't shown off until 2023, Allen has capable " +
            "hands. He showed very little route variation, but can be a dependable check-down target. Unsurprisingly, the Wisconsin product " +
            "doesn't have breakaway speed or impressive acceleration and deceleration. Similar to one of the few NFL backs with his size, Derrick " +
            "Henry, if the O-line lets Braelon get hit in the backfield, the play is likely done. Again, just like Henry, once he gets a " +
            "little head of steam, good luck bringing him down alone. ", 
        imgSite: `uwbadgers.com`, imgUrl: "https://d1qwqe1acr1rnz.cloudfront.net/images/2021/11/15/211113FB_1624_0.jpg",
        img: braelonAllen},
    {name: "Bo Nix", pos: "QB", age: "24", uni: "Oregon", size: `6'1" 7⁄8 | 218 lbs`, fortyYrd: "?.??", threeCone: "?.??", compPerc: "77.4%", td2Int: "45/3", passYrds: "4,508 yds", yrdsPerAtt: "9.6 yds", rush: "234 yds (6 TDs)", 
        lastEditTime: "2/7/24", 
        analysis: "Bo Nix was one of the most efficient QBs in all of college football in 2023. He showed an ability to hit his guys consistently at every level of the " +
            "field. However, Oregon did have a very schemed up offense with very good weapons which both gave a crutch for Nix to lean on. While he didn't show it very " +
            "often, Nix does have the ability to create with his legs as a very good athlete with near-elite explosiveness and speed at the QB position. It'll be interesting " +
            "to see how Bo Nix does if he doesn't have a great O-line, schemed offense, and good weapons in the NFL. He could provide value to a receiving corps, but " +
            "don't expect him to have his own fantasy value.", 
        imgSite: `sportingnews.com`, imgUrl: "https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-10/Bo%20Nix%20102522.jpg?itok=zznwLgh6",
        img: boNix},
    {name: "Audric Estimé", pos: "RB", age: "20", uni: "Notre Dame", size: `5' 11" | 227 lbs`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", rushing: "1,341 yds (18 TDs)", ydsPerRush: "6.4 yds", recTdRec: "17 (0 TDs)", recYrds: "142 yds",
        lastEditTime: "2/4/24", 
        analysis: "Audric is a big, strong, vicious runner with a lot of value in the blocking game. He has great patience waiting for a hole to " +
            "open up, and then attacks it like its 4th and 1 every time. Estimé bounces off bodies and breaks tackles as well as anyone in this " +
            "class. He has pretty solid burst for a guy of his size and good enough top speed to separate from some defenders. His elite pass-pro " +
            "game will make him a favorite of coaching staffs and his QB. He didn't show much in the receiving game at Notre Dame, but maybe he could " +
            "shock in the pros. While the burst and speed are there, they are not elite. He likely won't have many home-run plays. He should provide " +
            "enough NFL value to make him a decent fantasy option.", 
        imgSite: `espn.com`, imgUrl: "https://a.espncdn.com/media/motion/2022/1112/ss_20221112_133448878_2101148852/ss_20221112_133448878_2101148852.jpg",
        img: audricEstime},    
    {name: "Malachi Corley", pos: "WR", age: "21", uni: "Western Kentucky", size: `5'10" 5⁄8 | 215 lbs`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", recTdRec: "79 (11 TDs)", recYrds: "984 yds",
        lastEditTime: "2/12/24", 
        analysis: `At a tad under 5'11" and 215 lbs, Corley is a WR in an RB's body. In college he thrived on low air yard throws and massive YAC production.` + 
            "With his poor all-around route-skills, it is likely that most of his work comes closer to the line of scrimmage in the NFL. However, " +
            "if he can develop his route-running to get more intermediate and deep receptions, his daunting YAC ability could make him a monster for NFL and fantasy " +
            "teams. He could thrive in the write system.", 
        imgSite: `withthefirstpick.com`, imgUrl: "https://images2.minutemediacdn.com/image/upload/c_crop,w_1645,h_925,x_0,y_259/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/182/01heqpt0c1zpn4mgnbn3.jpg",
        img: malachiCorley},
    {name: "Keon Coleman", pos: "WR", age: "21", uni: "Florida State", size: `6'4" | 216 lbs`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", recTdRec: "50 (11 TDs)", recYrds: "658 yds",
        lastEditTime: "2/2/24", 
        analysis: "Keon Coleman looks like he was built in a lab in to a WR. His impressive combination of size, strength, athleticism, and great hands make him the perfect " + 
            "jump ball receiver. Once he has the ball in his hands, he is a task to bring down, usually getting more yards than seemingly possibly. However, he is a " +
            "project route-runner with a below average release package. This is going to make it extremely hard for him to find enough separation in the NFL " + 
            "where he won't be able to win with size and strength every time. That being said, he has the raw ability to be the next Mike Evans. That's something to " +
            "take a shot on.", 
        imgSite: `espn.com`, imgUrl: "https://a.espncdn.com/media/motion/2023/1014/evc__20231014_syr__fsu_d3484956_252f_41fe_a3bd_20b806/evc__20231014_syr__fsu_d3484956_252f_41fe_a3bd_20b806.jpg",
        img: keonColeman},
    {name: "Ja'Lynn Polk", pos: "WR", age: "21", uni: "Washington", size: `6'2" | 204 lbs`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", recTdRec: "69 (9 TDs)", recYrds: "1,159 yds",
        lastEditTime: "2/2/24", 
        analysis: "Polk has all the makings of a solid WR2 in the NFL. He is a very explosive and fluid route-runner, allowing him to separate from DBs, especially " +
            "down the field. Polk shows off impressive contested catch skills due to has great hands and body control. His good size, vision, and acceleration make " +
            "him a dangerous YAC threat once the ball is in his hands. Overall, he is a pretty complete WR, but doesn't seem to have the elite ceiling that some of the " +
            "other receivers in this class do. If he finds good opportunity on an NFL roster, he could be an immediate producer in the NFL and a solid fantasy asset.", 
        imgSite: `sports.mynorthwest.com`, imgUrl: "https://sports.mynorthwest.com/wp-content/uploads/2023/09/uw-huskies-jalynn-polk-point-getty-900.jpg",
        img: jalynnPolk}, 
    {name: "Marshawn Lloyd", pos: "RB", age: "23", uni: "USC", size: `5'9" 1⁄8 | 217 lbs`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", rushing: "820 yds (9 TDs)", ydsPerRush: "7.1 yds", recTdRec: "13 (0 TDs)", recYrds: "232 yds",
        lastEditTime: "2/4/24", 
        analysis: "Lloyd is an extremely explosive runner with elite speed and burst. He has the agility to make guys miss in the open field and enough " +
            "size to break a few tackles along the way. He is a threat to take it all the way every time he touches the ball. While he saw " +
            "very limited receiving work at USC, this may have been a product of Caleb Williams preferring down field throws as Lloyd look pretty " +
            "fluid on the targets he did get. Lloyd also wasn't very effective in pass-pro. Combine this with his advanced age for a rookie, " +
            "he'd need a solid landing spot to make the investment worth it.", 
        imgSite: `latimes.com`, imgUrl: "https://ca-times.brightspotcdn.com/dims4/default/6f1bd99/2147483647/strip/true/crop/5262x2763+0+0/resize/1200x630!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F64%2F59%2F077e94f549809f6a1db77120ef89%2Fusc-nevada-football-04073.jpg",
        img: marshawnLloyd},       
    {name: "Code Stover", pos: "TE", age: "23", uni: "Ohio State", size: `6'4" | 255 lbs`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", recTdRec: "41 (5 TDs)", recYrds: "576 yds",
        lastEditTime: "2/6/24", 
        analysis: "In a shallow TE class, Stover is on the higher end. In spite of his great size for the position, he has near-elite explosive " +
            "capabilities. Combine this with his very reliable, strong hands, he is a threat in the receiving game. He's fluid in space, but doesn't " +
            "have great speed. He uses his size well in the blocking game at times, but this could improve. He could definitely provide good value " +
            "to an NFL roster, but elite fantasy production doesn't seem to be in the cards at the moment.", 
        imgSite: `cleveland19.com`, imgUrl: "https://cloudfront-us-east-1.images.arcpublishing.com/gray/5ZAWXIMXLBC5DJ7NYX7OWJP37Y.jpg",
        img: cadeStover}, 
    {name: "Jermaine Burton", pos: "WR", age: "22", uni: "Alabama", size: `6'0" | 194 lbs`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", recTdRec: "39 (8 TDs)", recYrds: "798 yds",
        lastEditTime: "2/2/24", 
        analysis: "Jermaine Burton is a great route-runner with excellent acceleration and speed allowing him to consistently create separation at every level of the " +
            "When the ball comes his ways, he's just about guaranteed to reel it in with his great hands. Where Burton struggles is in his play strength. " +
            "At times, he can get bullied and doesn't project to do much after the catch. He has the makings of a consistent WR2 in the NFL.", 
        imgSite: `rolltide.com`, imgUrl: "https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/rolltide.com/images/2022/10/12/100822_MFB_BurtonJe_TAMU_TN5320_mQx2V.jpg",
        img: jermaineBurton}, 
    {name: "Devontez Walker", pos: "WR", age: "22", uni: "North Carolina", size: `6'1" 1⁄2 | 197 lbs`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", recTdRec: "41 (7 TDs)", recYrds: "699 yds",
        lastEditTime: "2/12/24", 
        analysis: "Tez Walker was a dominant outside WR in his 8 games at UNC this year. Despite NCAA transfer rules limiting his games played, Tez was " +
            "remarkable on downfield plays and in YAC situations. He was elite acceleration and top end speed for a player of his size. " +
            "However, his lack of route-running prowess may keep him from ever having a major role in an NFL offense. He struggles to separate which often leads to big " +
            "problems in the pros. Sadly, he has many similarities to last year's WR bust, Quentin Johnston. The Senior Bowl only highlighted his flaws as he struggled to " +
            "create separation and had far too many drops. The Senior Bowl plummeted his stock.", 
        imgSite: `vox.com`, imgUrl: "https://cdn.vox-cdn.com/thumbor/wXN-rFXgLAz-9mNL_nVU6EXr30A=/0x0:7223x4818/1200x800/filters:focal(2383x870:3537x2024)/cdn.vox-cdn.com/uploads/chorus_image/image/72781951/usa_today_21704886.0.jpg",
        img: tezWalker}, 
    {name: "Ricky Pearsall", pos: "WR", age: "22", uni: "Florida", size: `6'0" 7⁄8 | 193 lbs`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", recTdRec: "65 (4 TDs)", recYrds: "965 yds",
        lastEditTime: "2/12/24", 
        analysis: "Ricky Pearsall is an incredible route-runner with a great ability to create separation and find space in the defense. He " +
        "has a league-ready release package and enough explosiveness to consistently get open and make plays. Ricky has great hands and good ball " +
        "tracking skills down field. He doesn't have truly elite athleticism, but he makes up for it with his pristine route-running and high IQ. " +
        "He may end up being one of the bigger steals in this years draft.", 
        imgSite: `espn.com`, imgUrl: "https://a4.espncdn.com/combiner/i?img=%2Fmedia%2Fmotion%2F2023%2F0923%2Fss_20230923_193431430_23466101197%2Fss_20230923_193431430_23466101197.jpg",
        img: rickyPearsall}, 
    {name: "Michael Penix Jr.", pos: "QB", age: "23", uni: "Washington", size: `6'2" 1⁄2 | 212 lbs`, fortyYrd: "?.??", threeCone: "?.??", compPerc: "65.4%", td2Int: "36/11", passYrds: "4,903 yds", yrdsPerAtt: "8.8 yds", rush: "8 yds (3 TDs)", 
        lastEditTime: "2/7/24", 
        analysis: "Penix is an incredible deep ball thrower with a rocket of an arm. He is able to put it exactly where his receiver wants it down the field. He is " +
            "solid in intermediate areas of the field, but struggles with finesse throws. Penix has shown the IQ to process defensive schemes and make the right play. " +
            "While it isn't a strength, he has enough athleticism to create at times. Penix showed poor composure in the pressure and often favored the big play over the " +
            "easy gain. Those negatives are not what you want to see in an old QB. There are also huge injury concerns as he has suffered multiple ACL tears and has a " +
            "history of shoulder joint issues. Overall, there isn't much to be excited about from a fantasy perspective, other than the added value he could provide" +
            "to field stretching WRs.", 
        imgSite: `gohuskies.com`, imgUrl: "https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/washington.sidearmsports.com/images/2023/8/22/Michael_Penix_Jr_.png",
        img: michaelPenixJr}, 
    {name: "Blake Corum", pos: "RB", age: "23", uni: "Michigan", size: `5'8" | 213 lbs`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", rushing: "1,245 yds (27 TDs)", ydsPerRush: "4.8 yds", recTdRec: "16 (1 TDs)", recYrds: "117 yds",
        lastEditTime: "2/6/24", 
        analysis: "Corum is a mature, all-around RB with that could bring immediate value to an NFL roster. His excellent vision allows him to " +
            "find the wholes in the defense. He then uses great strength in a compact body that is able to squeeze between the tackles. " +
            "Corum has enough speed and burst to make big plays, but lacks truly elite break-away speed to be a home-run hitter in the NFL. " +
            "He showed little ability in the passing game at Michigan, but that could've been mostly the offensive scheme. Overall, he's a solid, " +
            "older back that just isn't very exciting for fantasy.", 
        imgSite: `sportingnews.com`, imgUrl: "https://library.sportingnews.com/styles/crop_style_16_9_desktop/s3/2023-11/Blake%20Corum%20112223%20FTR.jpg?h=920929c4&itok=FvGVLONF",
        img: blakeCorum}, 
    {name: "Jacob Cowing", pos: "WR", age: "22", uni: "Arizona", size: `5'8" 1⁄2 | 165 lbs`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", recTdRec: "90 (13 TDs)", recYrds: "848 yds",
        lastEditTime: "2/12/24", 
        analysis: "Jacob Cowing has the skills to be a game breaking player in the NFL, but his size will limit him greatly. His acceleration, twitchiness, top speed, " + 
            "route-running, and IQ are all at nearly elite levels. After transferring to Arizona in 2023, he dominated through these elite traits. Getting open seemed " + 
            "almost effortless for him at times. However, at 165 lbs, it would be hard to imagine him becoming an elite WR in the NFL. Hopefully, he can land in the " +
            "right fit where he can thrive primarily out of the slot.", 
        imgSite: `arizonawildcats.com`, imgUrl: "https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/arizona.sidearmsports.com/images/2022/10/3/221001_FB_vs._Colorado_Mike_Christy3449_I17Zy.jpg",
        img: jacobCowing}, 
    {name: "Jaylen Wright", pos: "RB", age: "20", uni: "Tennessee", size: `5'11" | 210 lbs`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", rushing: "1,010 yds (4 TDs)", ydsPerRush: "7.4 yds", recTdRec: "22 (0 TDs)", recYrds: "141 yds",
        lastEditTime: "2/6/24", 
        analysis: "Seen by his 7.4 yards per carry in 2023, Wright is a highly efficient RB with great speed and explosiveness. Wright has elite " +
            "vision in between the tackles, regularly finding a hole to sneak through. He runs extremely hard and has a shake in the " +
            "open field that consistently loses defenders. Wright has also shown an ability to bounce off of solo tackles. He is above " +
            "average in the passing game with a more complete route-tree than most of the RBs in this class. In spite " +
            "of his home-run play ability, he rarely bounces outside and instead tries to force the issue between the tackles. He also " +
            "had fumbling troubles in 2023. Jaylen could provide valuable NFL and fantasy value if he lands in a good spot.", 
        imgSite: `utdailybeacon.com`, imgUrl: "https://bloximages.chicago2.vip.townnews.com/utdailybeacon.com/content/tncms/assets/v3/editorial/7/26/72697912-6c4b-11ee-a812-e3f8f5adc2c6/652d762347ef1.image.jpg?resize=1200%2C800",
        img: jaylenWright}, 
    {name: "Will Shipley", pos: "RB", age: "21", uni: "Clemson", size: `5'11" | 210 lbs`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", rushing: "827 yds (5 TDs)", ydsPerRush: "5.0 yds", recTdRec: "31 (2 TDs)", recYrds: "244 yds",
        lastEditTime: "2/6/24", 
        analysis: "Will Shipley was an effective three year starter at Clemson. His best attributes include his burst, elusiveness, and passing " +
            "game chops. Shipley is best out in space and loves getting there by bouncing outside (sometimes too often). He has great explosive " +
            "characteristics with his speed and acceleration that help him get to the second level in a hurry. Once he's there, he makes guys miss " +
            "regularly and has surprisingly decent contact balance to bounce off defenders. He shows very good hands and great route-running for a RB. " +
            "Durability and workload will be a concern at the next level with his size, but he has plenty of upside in PPR leagues.", 
        imgSite: `247sports.com`, imgUrl: "https://s3media.247sports.com/Uploads/Assets/948/66/12066948.jpg",
        img: willShipley},
    {name: "Roman Wilson", pos: "WR", age: "22", uni: "Michigan", size: `5'10" 1⁄2 | 186 lbs`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", recTdRec: "48 (12 TDs)", recYrds: "789 yds",
        lastEditTime: "2/12/24", 
        analysis: "Wilson's performance at the Senior Bowl shot up his draft stock. It seems the concerns in his game were mostly to do with the low volume passing " +
        "offense at Michigan. We shouldn't have been surprised by his sure hands at the Senior Bowl as he had only a 2% drop rate in 2023. What was shocking was his" +
        "ability to consistently create separation through precise route-running and elite athleticism. The biggest concern for Roman is his slight frame and inability " +
        "to play through contact. He could end up being a valuable slot WR in the NFL.", 
        imgSite: `thedraftnetwork.com`, imgUrl: "https://www.thedraftnetwork.com/img/random/USATSI_22207545-1600x900.jpg",  
        img: romanWilson},  
    {name: "Brenden Rice", pos: "WR", age: "21", uni: "USC", size: `6'2" 1⁄8 | 212 lbs`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", recTdRec: "45 (12 TDs)", recYrds: "791 yds",
        lastEditTime: "2/12/24",  
        analysis: "Son of Hall of Famer, Jerry Rice, Brenden was a touchdown monster in the 2023 season, bringing in 40% of Caleb Williams passing TDs. He has great " +
        "hands and surprisingly good quickness player of his height. He slightly struggles when dealing with pressure at the line and in contested catch situations " +
        "and doesn't have elite top speed. He also had issues with consistently and would seemingly disappear at time. If he can clean up his route-running and learns " +
        "to play more physical, he could become a very solid NFL receiver with fantasy value.", 
        imgSite: `sportingnews.com`, imgUrl: "https://library.sportingnews.com/styles/twitter_card_120x120/s3/2023-08/GettyImages-1453839583.png?itok=JsdliGaT", 
        img: brendenRice}, 
    {name: "Johnny Wilson", pos: "WR", age: "22", uni: "Florida State", size: `6'6" 1⁄8 | 237 lbs`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", recTdRec: "41 (2 TDs)", recYrds: "617 yds",
        lastEditTime: "2/12/24", 
        analysis: `Wilson has impressive speed, route-running, and change of direction given his 6'6" frame. However, it would be shocking if his ends up get ` +
        `open with any consistency against NFL DBs. Given his size and talent, his NFL coaches will likely want him on the field, and, seeing his strong ` + 
        `blocking ability, move him to TE. He could find success at this position if he accepts the role change. This gives him some valuable (but unlikely) upside.`, 
        imgSite: `profootballnetwork.com`, imgUrl: "https://static.profootballnetwork.com/wp-content/uploads/2023/09/21181132/how-tall-is-johnny-wilson-florida-state-wr-draft.jpg",
        img: johnnyWilson}, 
    {name: "J.J. McCarthy", pos: "QB", age: "20", uni: "Michigan", size: `6'3" | 202 lbs`, fortyYrd: "?.??", threeCone: "?.??", compPerc: "72.3%", td2Int: "22/4", passYrds: "2,991 yds", yrdsPerAtt: "9.0 yds", rush: "202 yds (3 TDs)", 
        lastEditTime: "1/10/24", 
        analysis: "2023's National Championship winning QB, while solid, profited greatly from an incredible defense, elite O-line, and great " +
            "RB play. However, he has some coveted characteristics. McCarthy is a near-elite athlete at the QB position. He is very agile and " +
            "quick. He has great top-end speed for the position. He has good arm talent, showing impressive velocity and very good accuracy. " +
            "While he has shown flashes of elite processing skills, there is some left to be desired in that department. There are also some " +
            "concerns about his ability to survive hits given his leaner frame. If he is given time to develop as a backup for a year or two, " +
            "he could be a very good NFL and fantasy QB with rushing upside. The Rams and Jets are two spots that could provide exactly what he " +
            "needs.", 
        imgSite: `espn.com`, imgUrl: "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0627%2Fr1191339_1296x729_16%2D9.jpg",
        img: jjMccarthy}, 
    {name: "Jamari Thrash", pos: "WR", age: "23", uni: "Louisville", size: `5'11" 3⁄4 | 185 lbs`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", recTdRec: "63 (6 TDs)", recYrds: "858 yds",
        lastEditTime: "2/12/24", 
        analysis: "Thrash is a very smooth, fluid route-runner with great understanding for how to get open. However, his skinny frame and soft play-style lead him to struggle " + 
        "with playing through contact at the line of scrimmage and at the catch point. He also has disappointing speed and acceleration for a player of his size. One of these " + 
        "areas would probably have to improve for his career to pan out.", 
        imgSite: `lsports.yahoo.com`, imgUrl: "https://s.yimg.com/ny/api/res/1.2/scaVN1N3XdxpiZCPUlfEYw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/ap.org/f8ef07e522118c36a505df1c37f263ff",
        img: jamariThrash}, 
    {name: "Javon Baker", pos: "WR", age: "22", uni: "UCF", size: `6'1" 3⁄8 | 208 lbs`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", recTdRec: "52 (7 TDs)", recYrds: "1,139 yds",
        lastEditTime: "2/12/24", 
        analysis: "Jerome Baker was a 5-star recruit coming out of High School and committed to Alabama where he lasted 2 years before transferring " +
        "to UCF. He has great hands and elite body control giving him highlight reel potential. His top end speed is good and he is a solid " +
        "route-runner. His route-tree needs expanding, but he has the talent to be a valuable sleeper. His performance at the Senior Bowl only " +
        "rose his stock, making us more confident in his ability to be a late round steal in drafts.", 
        imgSite: `collegefootballnetwork.com`, imgUrl: "https://collegefootballnetwork.com/wp-content/uploads/2023/08/USATSI_19326665-1024x683.jpg",
        img: javonBaker}, 
    {name: "Michael Pratt", pos: "QB", age: "22", uni: "Tulane", size: `6'2" 1⁄2 | 220 lbs`, fortyYrd: "?.??", threeCone: "?.??", compPerc: "65.4%", td2Int: "22/5", passYrds: "2,406 yds", yrdsPerAtt: "8.5 yds", rush: "286 yds (5 TDs)", 
        lastEditTime: "2/12/24", 
        analysis: "Pratt has good size for the QB position, solid accuracy, and a great understanding for the game. He definitely projects to be more of a game " + 
        "manager than a game breaker. This is because, other than his size, he simply doesn't have the physical attributes of some other prospects. His arm talent " + 
        "is alright and he doesn't have the rushing ability to have it as a focal point of his game. Luckily, he'll probably be drafted late enough to guarantee him " + 
        "time to develop as the backup. If he lands in the right spot, maybe he'll develop well, but don't count on it.", 
        imgSite: `tulanegreenwave.com`, imgUrl: "https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/tulanegreenwave.com/images/2023/10/28/Michael_Pratt_3757_c.jpg",
        img: michaelPratt}, 
    {name: "Hayden Hatten", pos: "WR", age: "N/A", uni: "Idaho", size: `6'2" | 210 lbs`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", recTdRec: "92 (9 TDs)", recYrds: "1,226 yds",
        lastEditTime: "1/24/24", 
        analysis: "Hayden Hatten dominated the FCS, putting up monstrous seasons in 2022 and 2023. While he was playing against lesser talent that " + 
        "anyone else we've looked at, his film was very impressive. He has incredible hands and is a great route-runner with a good understanding of the game. " +
        "He excelled in all levels of the receiving game. However, he shys away from contact and is a poor blocker. If he gets drafted by the right organization " +
        "that can toughen him up a bit, he could be a very valuable player seemingly out of nowhere.", 
        imgSite: 'govandals.com', imgUrl: "https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/govandals.com/images/2023/11/18/haydentd.jpg",
        img: haydenHatten}, 
    {name: "Ray Davis", pos: "RB", age: "24", uni: "Kentucky", size: `5'8" 1⁄2 | 220 lbs`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", rushing: "1,129 yds (14 TDs)", ydsPerRush: "5.7 yds", recTdRec: "33 (7 TDs)", recYrds: "323 yds",
        lastEditTime: "2/12/24", 
        analysis: "Ray Davis had a tragic childhood, growing up in homelessness and going hungry. Football was his saving grace. He worked his way to Temple, then " +
        "Vanderbilt, and finally Kentucky where he balled out in his 5th collegiate season. He is a very mature running back that is ready to make an immediate impact " + 
        "on an NFL roster in the running and pass-blocking game. However, he will be 25 in his rookie season and doesn't have the breakaway speed and quickness like a Jahmyr Gibbs " + 
        "or Devon Achane. For those reasons, we don't see him having much fantasy value, other than a TD-heavy outlier of a season. He could fit into Gus Edwards' role in " + 
        "Baltimore very well.", 
        imgSite: 'spectrumnews1.com', imgUrl: "https://s7d2.scene7.com/is/image/TWCNews/ray_davis_uk_ap_23260028893178_ky_0917",
        img: rayDavis},   
    {name: "Spencer Rattler", pos: "QB", age: "23", uni: "South Carolina", size: `6'0" 1⁄8 | 219 lbs`, fortyYrd: "?.??", threeCone: "?.??", compPerc: "68.9%", td2Int: "19/8", passYrds: "3,186 yds", yrdsPerAtt: "8.0 yds", rush: "104 yds (4 TDs)", 
        lastEditTime: "2/12/24", 
        analysis: "Rattler is a former top recruit in his class. He reached that status through elite arm talent and very good athleticism. He showed this upside at the " +
        "Senior Bowl where he was the most impressive QB. However, what led to his " +
        "benching at and transferring from Oklahoma was his poor aptitude for the mental side of the game. He didn't handle pressure well, had poor timing, and didn't " +
        "see the middle of the field well. Thanks to his fall from stardom, he'll likely receive much later draft capital than he was originally projected to receive " +
        "coming out of high school. This will likely allow him to sit during his rookie year in the NFL. If he lands on the right team, maybe he can develop the mental " +
        "side of his game and reclaim his stardom", 
        imgSite: 'youtube.com', imgUrl: "https://i.ytimg.com/vi/uzrqeOxa8BQ/maxresdefault.jpg",
        img: spencerRattler},  
    {name: "Dylan Laube", pos: "RB", age: "23", uni: "New Hampshire", size: `5'9" 5⁄8 | 210 lbs`, fortyYrd: "?.??", threeCone: "?.??", vert: "??.??", rushing: "715 yds (9 TDs)", ydsPerRush: "4.5 yds", recTdRec: "68 (7 TDs)", recYrds: "699 yds",
        lastEditTime: "2/12/24", 
        analysis: "Coming out of the University of New Hampshire, Laube hasn't seen the best competition, but he is the best receiver in this " +
            "RB class. He shows incredible hands and impressive route-running out of the backfield and when lined up out wide. He's got very good burst " +
            "and the top-end speed to take it the distance. He's not the most efficient on the ground and isn't very effective in between the " +
            "tackles. However, it's hard not to think Austin Ekeler with this guy. He's a little older coming out, but if his work ethic can earn " +
            "him time on the field, he could develop into a valuable PPR player.", 
        imgSite: 'unhwildcats.com', imgUrl: "https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/unh.sidearmsports.com/images/2023/12/13/Dylan_Laube_D06_6364.png",
        img: dylanLaube},   
]

const ppr1QB = [ 
    {id: "1", name: "Marvin Harrison Jr.", pos: "WR", age: "21", uni: "Ohio State", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "2", name: "Malik Nabers", pos: "WR", age: "20", uni: "LSU", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "3", name: "Rome Odunze", pos: "WR", age: "21", uni: "Washington", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "4", name: "Brock Bowers", pos: "TE", age: "21", uni: "Georgia", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "5", name: "Brian Thomas Jr.", pos: "WR", age: "21", uni: "LSU", analysis: "mumbo jumbo", height: `6'4"`, weight: "205 lbs."},
    {id: "6", name: "Troy Franklin", pos: "WR", age: "20", uni: "Oregon", analysis: "mumbo jumbo", height: `6'2"`, weight: "187 lbs."},
    {id: "7", name: "Caleb Williams", pos: "QB", age: "21", uni: "USC", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "8", name: "Jayden Daniels", pos: "QB", age: "23", uni: "LSU", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "9", name: "Adonai Mitchell", pos: "WR", age: "21", uni: "Texas", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "10", name: "Drake Maye", pos: "QB", age: "21", uni: "North Carolina", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "11", name: "Jonathon Brooks", pos: "RB", age: "20", uni: "Texas", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "12", name: "Ladd McConkey", pos: "WR", age: "22", uni: "Georgia", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."}, 
    {id: "13", name: "Xavier Worthy", pos: "WR", age: "20", uni: "Texas", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "14", name: "Trey Benson", pos: "RB", age: "21", uni: "Florida State", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "15", name: "Ja'Lynn Polk", pos: "WR", age: "21", uni: "Washington", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "16", name: "Jalen McMillan", pos: "WR", age: "22", uni: "Washington", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."}, 
    {id: "17", name: "Malachi Corley", pos: "WR", age: "21", uni: "Western Kentucky", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "18", name: "Jermaine Burton", pos: "WR", age: "22", uni: "Alabama", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "19", name: "Braelon Allen", pos: "RB", age: "19", uni: "Wisconsin", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "20", name: "Keon Coleman", pos: "WR", age: "21", uni: "Florida State", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "21", name: "Bucky Irving", pos: "RB", age: "21", uni: "Oregon", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "22", name: "Roman Wilson", pos: "WR", age: "22", uni: "Michigan", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "23", name: "Ricky Pearsall", pos: "WR", age: "22", uni: "Florida", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "24", name: "Xavier Legette", pos: "WR", age: "23", uni: "South Carolina", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "25", name: "Ja'Tavion Sanders", pos: "TE", age: "20", uni: "Texas", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "26", name: "Javon Baker", pos: "WR", age: "22", uni: "UCF", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "27", name: "J.J. McCarthy", pos: "QB", age: "20", uni: "Michigan", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "28", name: "Devontez Walker", pos: "WR", age: "22", uni: "North Carolina", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."}, 
    {id: "29", name: "Bo Nix", pos: "QB", age: "23", uni: "Oregon", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "30", name: "Michael Penix Jr.", pos: "QB", age: "23", uni: "Washington", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "31", name: "Marshawn Lloyd", pos: "RB", age: "23", uni: "USC", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "32", name: "Jaylen Wright", pos: "RB", age: "20", uni: "Tennessee", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "33", name: "Brenden Rice", pos: "WR", age: "21", uni: "USC", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "34", name: "Blake Corum", pos: "RB", age: "23", uni: "Michigan", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "34", name: "Cade Stover", pos: "TE", age: "23", uni: "Ohio State", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."}, // move off
    {id: "36", name: "Audric Estimé", pos: "RB", age: "20", uni: "Notre Dame", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
];

const ppr2QB = [ 
    {id: "1", name: "Caleb Williams", pos: "QB", age: "21", uni: "USC", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "2", name: "Marvin Harrison Jr.", pos: "WR", age: "21", uni: "Ohio State", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "3", name: "Malik Nabers", pos: "WR", age: "20", uni: "LSU", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "4", name: "Drake Maye", pos: "QB", age: "21", uni: "North Carolina", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "5", name: "Jayden Daniels", pos: "QB", age: "23", uni: "LSU", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "6", name: "Rome Odunze", pos: "WR", age: "21", uni: "Washington", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "7", name: "Brock Bowers", pos: "TE", age: "21", uni: "Georgia", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "8", name: "Brian Thomas Jr.", pos: "WR", age: "21", uni: "LSU", analysis: "mumbo jumbo", height: `6'4"`, weight: "205 lbs."},
    {id: "9", name: "Troy Franklin", pos: "WR", age: "20", uni: "Oregon", analysis: "mumbo jumbo", height: `6'2"`, weight: "187 lbs."},
    {id: "10", name: "Adonai Mitchell", pos: "WR", age: "21", uni: "Texas", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "11", name: "Jonathon Brooks", pos: "RB", age: "20", uni: "Texas", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "12", name: "J.J. McCarthy", pos: "QB", age: "20", uni: "Michigan", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "13", name: "Ladd McConkey", pos: "WR", age: "22", uni: "Georgia", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "14", name: "Xavier Worthy", pos: "WR", age: "20", uni: "Texas", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "15", name: "Trey Benson", pos: "RB", age: "21", uni: "Florida State", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "16", name: "Bo Nix", pos: "QB", age: "23", uni: "Oregon", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "17", name: "Ja'Lynn Polk", pos: "WR", age: "21", uni: "Washington", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "18", name: "Jalen McMillan", pos: "WR", age: "22", uni: "Washington", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "19", name: "Michael Penix Jr.", pos: "QB", age: "23", uni: "Washington", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "20", name: "Malachi Corley", pos: "WR", age: "21", uni: "Western Kentucky", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "21", name: "Jermaine Burton", pos: "WR", age: "22", uni: "Alabama", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "22", name: "Braelon Allen", pos: "RB", age: "19", uni: "Wisconsin", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "23", name: "Keon Coleman", pos: "WR", age: "21", uni: "Florida State", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "24", name: "Bucky Irving", pos: "RB", age: "21", uni: "Oregon", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "25", name: "Roman Wilson", pos: "WR", age: "22", uni: "Michigan", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "26", name: "Ricky Pearsall", pos: "WR", age: "22", uni: "Florida", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "27", name: "Xavier Legette", pos: "WR", age: "22", uni: "South Carolina", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "28", name: "Ja'Tavion Sanders", pos: "TE", age: "20", uni: "Texas", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "29", name: "Javon Baker", pos: "WR", age: "22", uni: "UCF", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "30", name: "Spencer Rattler", pos: "QB", age: "23", uni: "South Carolina", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "31", name: "Michael Pratt", pos: "QB", age: "22", uni: "Tulane", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "32", name: "Devontez Walker", pos: "WR", age: "22", uni: "North Carolina", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "33", name: "Marshawn Lloyd", pos: "RB", age: "23", uni: "USC", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "34", name: "Jaylen Wright", pos: "RB", age: "20", uni: "Tennessee", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "35", name: "Blake Corum", pos: "RB", age: "23", uni: "Michigan", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "36", name: "Cade Stover", pos: "TE", age: "23", uni: "Ohio State", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."}, // move off
    //{id: "36", name: "Audric Estimé", pos: "RB", age: "20", uni: "Notre Dame", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
];

const nPpr1QB = [ 
    {id: "1", name: "Marvin Harrison Jr.", pos: "WR", age: "21", uni: "Ohio State", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "2", name: "Malik Nabers", pos: "WR", age: "20", uni: "LSU", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "3", name: "Rome Odunze", pos: "WR", age: "21", uni: "Washington", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "4", name: "Brock Bowers", pos: "TE", age: "21", uni: "Georgia", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "5", name: "Brian Thomas Jr.", pos: "WR", age: "21", uni: "LSU", analysis: "mumbo jumbo", height: `6'4"`, weight: "205 lbs."},
    {id: "6", name: "Troy Franklin", pos: "WR", age: "20", uni: "Oregon", analysis: "mumbo jumbo", height: `6'2"`, weight: "187 lbs."},
    {id: "7", name: "Caleb Williams", pos: "QB", age: "21", uni: "USC", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "8", name: "Jayden Daniels", pos: "QB", age: "23", uni: "LSU", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "9", name: "Adonai Mitchell", pos: "WR", age: "21", uni: "Texas", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "10", name: "Drake Maye", pos: "QB", age: "21", uni: "North Carolina", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "11", name: "Jonathon Brooks", pos: "RB", age: "20", uni: "Texas", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "12", name: "Ladd McConkey", pos: "WR", age: "22", uni: "Georgia", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "13", name: "Xavier Worthy", pos: "WR", age: "20", uni: "Texas", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "14", name: "Trey Benson", pos: "RB", age: "21", uni: "Florida State", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "15", name: "Ja'Lynn Polk", pos: "WR", age: "21", uni: "Washington", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "16", name: "Jalen McMillan", pos: "WR", age: "22", uni: "Washington", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "17", name: "Braelon Allen", pos: "RB", age: "19", uni: "Wisconsin", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "18", name: "Malachi Corley", pos: "WR", age: "21", uni: "Western Kentucky", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "19", name: "Bucky Irving", pos: "RB", age: "21", uni: "Oregon", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "20", name: "Jermaine Burton", pos: "WR", age: "22", uni: "Alabama", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "21", name: "Keon Coleman", pos: "WR", age: "21", uni: "Florida State", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "22", name: "Roman Wilson", pos: "WR", age: "22", uni: "Michigan", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "23", name: "Ricky Pearsall", pos: "WR", age: "22", uni: "Florida", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "24", name: "Xavier Legette", pos: "WR", age: "22", uni: "South Carolina", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "25", name: "Ja'Tavion Sanders", pos: "TE", age: "20", uni: "Texas", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "26", name: "Javon Baker", pos: "WR", age: "22", uni: "UCF", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "27", name: "J.J. McCarthy", pos: "QB", age: "20", uni: "Michigan", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "28", name: "Marshawn Lloyd", pos: "RB", age: "23", uni: "USC", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "29", name: "Devontez Walker", pos: "WR", age: "22", uni: "North Carolina", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "30", name: "Bo Nix", pos: "QB", age: "23", uni: "Oregon", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "31", name: "Michael Penix Jr.", pos: "QB", age: "23", uni: "Washington", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "32", name: "Jaylen Wright", pos: "RB", age: "20", uni: "Tennessee", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "33", name: "Blake Corum", pos: "RB", age: "23", uni: "Michigan", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "34", name: "Cade Stover", pos: "TE", age: "23", uni: "Ohio State", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."}, // move off
    {id: "35", name: "Audric Estimé", pos: "RB", age: "20", uni: "Notre Dame", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "36", name: "Brenden Rice", pos: "WR", age: "21", uni: "USC", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
];

const nPpr2QB = [ 
    {id: "1", name: "Caleb Williams", pos: "QB", age: "21", uni: "USC", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "2", name: "Marvin Harrison Jr.", pos: "WR", age: "21", uni: "Ohio State", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "3", name: "Malik Nabers", pos: "WR", age: "20", uni: "LSU", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "4", name: "Drake Maye", pos: "QB", age: "21", uni: "North Carolina", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "5", name: "Jayden Daniels", pos: "QB", age: "23", uni: "LSU", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "6", name: "Rome Odunze", pos: "WR", age: "21", uni: "Washington", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "7", name: "Brock Bowers", pos: "TE", age: "21", uni: "Georgia", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "8", name: "Brian Thomas Jr.", pos: "WR", age: "21", uni: "LSU", analysis: "mumbo jumbo", height: `6'4"`, weight: "205 lbs."},
    {id: "9", name: "Troy Franklin", pos: "WR", age: "20", uni: "Oregon", analysis: "mumbo jumbo", height: `6'2"`, weight: "187 lbs."},
    {id: "10", name: "Adonai Mitchell", pos: "WR", age: "21", uni: "Texas", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "11", name: "Jonathon Brooks", pos: "RB", age: "20", uni: "Texas", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "12", name: "J.J. McCarthy", pos: "QB", age: "20", uni: "Michigan", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "13", name: "Ladd McConkey", pos: "WR", age: "22", uni: "Georgia", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "14", name: "Xavier Worthy", pos: "WR", age: "20", uni: "Texas", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "15", name: "Trey Benson", pos: "RB", age: "21", uni: "Florida State", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "16", name: "Bo Nix", pos: "QB", age: "23", uni: "Oregon", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "17", name: "Ja'Lynn Polk", pos: "WR", age: "21", uni: "Washington", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "18", name: "Jalen McMillan", pos: "WR", age: "22", uni: "Washington", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "19", name: "Michael Penix Jr.", pos: "QB", age: "23", uni: "Washington", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "20", name: "Braelon Allen", pos: "RB", age: "19", uni: "Wisconsin", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "21", name: "Malachi Corley", pos: "WR", age: "21", uni: "Western Kentucky", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "22", name: "Bucky Irving", pos: "RB", age: "21", uni: "Oregon", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "23", name: "Jermaine Burton", pos: "WR", age: "22", uni: "Alabama", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "24", name: "Keon Coleman", pos: "WR", age: "21", uni: "Florida State", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "25", name: "Roman Wilson", pos: "WR", age: "22", uni: "Michigan", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "26", name: "Ricky Pearsall", pos: "WR", age: "22", uni: "Florida", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "27", name: "Xavier Legette", pos: "WR", age: "22", uni: "South Carolina", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "28", name: "Ja'Tavion Sanders", pos: "TE", age: "20", uni: "Texas", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "29", name: "Javon Baker", pos: "WR", age: "22", uni: "UCF", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "30", name: "Spencer Rattler", pos: "QB", age: "23", uni: "South Carolina", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "31", name: "Michael Pratt", pos: "QB", age: "22", uni: "Tulane", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "32", name: "Marshawn Lloyd", pos: "RB", age: "23", uni: "USC", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "31", name: "Devontez Walker", pos: "WR", age: "22", uni: "North Carolina", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "34", name: "Jaylen Wright", pos: "RB", age: "20", uni: "Tennessee", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "35", name: "Blake Corum", pos: "RB", age: "23", uni: "Michigan", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
    {id: "36", name: "Cade Stover", pos: "TE", age: "23", uni: "Ohio State", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."}, // move off
    // {id: "36", name: "Brenden Rice", pos: "WR", age: "21", uni: "USC", analysis: "mumbo jumbo", height: `0'0"`, weight: "0 lbs."},
];

const nflTeams = [
    // NFC North
    {mascot: "Packers", location: "Green Bay", ppg: '22.5', logoUrl: packersLogo, division: 'NFC North', primCol: '#025928', secCol: '#FFB612', 
    posLandingGrade: {QB: 'D+', RB: 'B+', WR: 'C+', TE: 'C-'}, posLandingRank: {QB: '24', RB: '3', WR: '18', TE: '25'}, lastEditTime: '1/18/2024', 
    posLandingAnalysis: {QB: `It looks like Green Bay has found their next QB in Jordan Love. Unless the back half of the 2023 season was all just an aberration, he won't be going away anytime soon.`, 
        RB: 'Even if Aaron Jones stays on the Packers next year, he is teetering on the RB age cliff. AJ Dillon will likely be gone and poses no threat to a talented rookie. This is a great RB landing spot.', 
        WR: `Green Bay's WR room is a tough one to analyze as it seems like they have 6 solid starters. However, if they find one that can develop into their true number 1 option, he could be a solid fantasy starter.`,
        TE: `The Packers have too solid 2023 rookie TEs in Luke Musgrave and Tucker Kraft. There's no room for another to be involved.`}},
    {mascot: "Bears", location: "Chicago", ppg: '21.2', logoUrl: bearsLogo, division: 'NFC North', primCol: '#04123C', secCol: '#F46624',
    posLandingGrade: {QB: 'A-', RB: 'C+', WR: 'C+', TE: 'C-'}, posLandingRank: {QB: '3', RB: '15', WR: '19', TE: '21'}, lastEditTime: '1/18/2024',
    posLandingAnalysis: {QB: `It looks like the Bears are going for a total restart on their offense with a new QB (likely Caleb Williams), OC, and maybe even a first-round WR to play with DJ Moore. if they hit on the OC and WR, their next QB could be valuable.`,
        RB: `Khalil Herbert and Roschan Johnson both showed flashes in 2023 and still weren't very valuable. A new RB coming probably won't change that.`,
        WR: `With DJ Moore already there, a rookie WR as a second option in a newly constructed offense isn't very enticing to me. However, there's a chance that Caleb Williams will be good enough to support two options.`,
        TE: `Cole Kmet has been good when given opportunity and is still a young player. It is unlikely the Bears to take a TE this year. Even if they do, there's very little value there.`}}, 
    {mascot: "Lions", location: "Detroit", ppg: '27.1', logoUrl: lionsLogo, division: 'NFC North', primCol: '#0076B6', secCol: '#F2F2F2',
    posLandingGrade: {QB: 'B-', RB: 'F', WR: 'D', TE: 'D-'}, posLandingRank: {QB: '11', RB: '32', WR: '30', TE: '32'}, lastEditTime: '1/18/2024',
    posLandingAnalysis: {QB: `The Lions have the best group of young weapons in the league. Amon-Ra, Jahmyr, LaPorta, Monty, and Jameson Williams would make me excited for a rookie QB even with Jared Goff still in Detroit. Could be a perfect landing spot for a QB who could benefit from a couple years as a backup.`, 
        RB: `Jahmyr Gibbs and David Montgomery are the best RB tandem in the NFL. Jahmyr is going into his second year and Monty isn't an old player. There's little chance Detroit takes another RB.`, 
        WR: `Amon-Ra St. Brown is that guy and Jameson Williams started improving over the back half of the year. With Gibbs and LaPorta also as dominant receivers in this offense, there's not many other targets to go around.`, 
        TE: `Sam LaPorta is a top-3 TE in dynasty without question. There is not room for another TE here.`}}, 
    {mascot: "Vikings", location: "Minnesota", ppg: '20.2', logoUrl: vikingsLogo, division: 'NFC North', primCol: '#582C83', secCol: '#FFC62F',
    posLandingGrade: {QB: 'B+', RB: 'B-', WR: 'D-', TE: 'D'}, posLandingRank: {QB: '7', RB: '12', WR: '32', TE: '30'}, lastEditTime: '1/18/2024',
    posLandingAnalysis: {QB: 'If Kirk stays, a rookie QB could be great after a few developmental years behind Cousins. If Kirk leaves, a new QB will have immediate access to great weapons in a scheme that creates QB production.', 
        RB: 'Ty Chandler came on over the second half of the season, but a new RB could come in and take over the job in that productive offense. A better runner with pass-catching chops could be a valuable fantasy asset.', 
        WR: `There isn't a better young receiving corps with JJ, Addison, and Hock. A rookie coming in and having success without injuries ahead of him and JJ leaving seems like a long shot.`, 
        TE: `TJ Hockenson is one of the best young TEs in the league. Even with his ACL injury that will likely sideline him for the beginning of the year, there's no reason to doubt that TJ would take over once he's back.`}}, 
    // NFC East
    {mascot: "Eagles", location: "Philadelphia", ppg: '25.5', logoUrl: eaglesLogo, division: 'NFC East', primCol: '#025159', secCol: '#B4BCBF',
    posLandingGrade: {QB: 'D', RB: 'C', WR: 'C-', TE: 'C-'}, posLandingRank: {QB: '26', RB: '18', WR: '28', TE: '22'}, lastEditTime: '1/18/2024',
    posLandingAnalysis: {QB: `Despite Jalen Hurts' poor end to the 2023 season, he was still an MVP candidate for most of the last two years. He'll have a pretty long leash.`, 
        RB: `Even if the tush-push is outlawed, Jalen Hurts is Philly's goal-line back, and after Swift's solid year in 2023, they'll probably bring the hometown kid back. Expect him to have most of the RB touches in 2024.`, 
        WR: `A.J. Brown and DeVonta Smith rule this WR room. Until one of them is gone, don't get too excited by another Philly WR.`, 
        TE: `Dallas Goedert is one of the better TEs in the league and still has at least another year with the Eagles. He's also been less consistent than a guy of his talent would be on a team without this WR room.`}}, 
    {mascot: "Cowboys", location: "Dallas", ppg: '29.9', logoUrl: cowboysLogo, division: 'NFC East', primCol: '#041E42', secCol: '#F2F2F2',
    posLandingGrade: {QB: 'D+', RB: 'B+', WR: 'B', TE: 'B-'}, posLandingRank: {QB: '25', RB: '4', WR: '12', TE: '12'}, lastEditTime: '1/18/2024',
    posLandingAnalysis: {QB: `Dak will likely get a massive extension this year. With former top pick Trey Lance as their backup, they won't spend much on a new QB anytime soon.`, 
        RB: `The Zeke and Pollard days were great for fantasy football. We saw this year that Pollard can't do it by himself. Expect Dallas to try to find that combo again, and with it, valuable fantasy options.`, 
        WR: `McCarthy showed us this year that as long as he's at the helm with Dak he's going to air it out. With Gallup's decline and Cooks old age, a rookie WR could be productive behind Ceedee.`, 
        TE: `Dak loves the TE, especially in the red zone. While Ferguson is solid, there is a path to him getting overtaken by a rookie TE.`}}, 
    {mascot: "Giants", location: "New York", ppg: '15.6', logoUrl: giantsLogo, division: 'NFC East', primCol: '#082366', secCol: '#F2F2F2',
    posLandingGrade: {QB: 'C', RB: 'C+', WR: 'B+', TE: 'C'}, posLandingRank: {QB: '16', RB: '16', WR: '6', TE: '20'}, lastEditTime: '1/18/2024',
    posLandingAnalysis: {QB: `The Giants dug themselves in a hole with the recent Daniel Jones contract. Even if they do decide to move on, they have very limited weapons for a QB to produce.`, 
        RB: `It all depends on whether Saquon is there in 2024 or not. If he's gone, whoever they draft has an immediate path to relevancy. However, if he stays, there's no way for another RB to see the field.`, 
        WR: `We haven't seen a consistent producer in the Giants WR room since Odell. However, there will be plenty of opportunity for any rookie WR this year. Let's see if they capitalize.`, 
        TE: `Despite his injury struggles, Darren Waller is still a great TE when he's on the field. In addition, their backup, Daniel Bellinger, is a solid TE in his own right.`}}, 
    {mascot: "Commanders", location: "Washington", ppg: '19.4', logoUrl: commandersLogo, division: 'NFC East', primCol: '#591616', secCol: '#FFB612',
    posLandingGrade: {QB: 'A', RB: 'B', WR: 'C-', TE: 'B+'}, posLandingRank: {QB: '2', RB: '8', WR: '26', TE: '5'}, lastEditTime: '1/18/2024',
    posLandingAnalysis: {QB: `Terry McLaurin, Jahan Dotson, and Curtis Samuel make for a strong receiving corps in DC. With the right coaching staff, their rookie QB could have an immediate fantasy impact.`, 
        RB: `Brian Robinson Jr. isn't a game breaking talent, but it would be a shock if they spend much draft capital on a RB. If they do, there could be a changing of the guard.`, 
        WR: `Despite Jahan Dotson's disappointing sophomore year, he still is a talented player. Him, along with Terry McLaurin would be a lot of target competition for a rookie to compete with.`, 
        TE: `Logan Thomas' career has been riddled with injuries. It seems they haven't had a consistent performer at the TE position in years. Changing that in the draft could be a huge help for their new QB, providing value for both the QB and TE positions..`}}, 
    // NFC South
    {mascot: "Falcons", location: "Atlanta", ppg: '18.9', logoUrl: falconsLogo, division: 'NFC South', primCol: '#AC1F2B', secCol: '#D7D8DA',
    posLandingGrade: {QB: 'A+', RB: 'F', WR: 'C-', TE: 'C'}, posLandingRank: {QB: '1', RB: '31', WR: '27', TE: '19'}, lastEditTime: '1/18/2024',
    posLandingAnalysis: {QB: `Atlanta has been building its offensive weapons under Arthur Smith for years. All they need now is a new HC and a QB. This could be the draft where they fill those holes. Whatever QB goes to ATL will immediately have high powered help around him.`, 
        RB: `Bijan Robinson was a top-10 fantasy RB in 2023 in despite of Arthur Smith's attempt to drive fantasy managers senile. With Tyler Allgier already there as well, there's no space for a rookie.`, 
        WR: `Similar to Bijan, Drake London has suffered under Arthur Smith, but he has shown to be a very talented receiver who will demand targets in this new offense. There is a path for a second option in the passing game, but it wouldn't be likely to be a fantasy relevant role until.`, 
        TE: `We're still not confident that Kyle Pitts is truly dead. If he doesn't perform this year in a non-Arthur-Smith-led offense, give up. For now, let's give him another chance and not believe a rookie TE will take his role.`}}, 
    {mascot: "Panthers", location: "Carolina", ppg: '13.9', logoUrl: carolinaLogo, division: 'NFC South', primCol: '#101010', secCol: '#37baFc',
    posLandingGrade: {QB: 'C-', RB: 'C-', WR: 'B-', TE: 'B+'}, posLandingRank: {QB: '22', RB: '25', WR: '15', TE: '6'}, lastEditTime: '1/18/2024',
    posLandingAnalysis: {QB: `It doesn't seem likely that Bryce Young will turn it around. This team is also in too deep to give up on him at least for a couple years. Even if they do, we just saw what happened with a highly touted rookie QB.`, 
        RB: `Miles Sanders was extremely disappointing in 2023. Still, he is an above average RB and his running-mate, Chuba Hubbard looked pretty good in spite of the poor offense. A rookie RB in Carolina wouldn't be likely to find success.`, 
        WR: `Carolina would be a decent landing spot for a rookie WR by pure necessity alone. Last year was extremely poor for everyone in this offense other than Adam Thielen (at times). Thielen will be another year older and another step slower. There is room for a good rookie to receive 8 or so targets per game.`, 
        TE: `A good TE is a rookie QBs best friend. While Bryce Young is no longer a rookie, we can look at him and this offense like he is. If he gets a sure-handed, big-bodied target over the middle, there may be fantasy relevancy there.`}}, 
    {mascot: "Buccaneers", location: "Tampa Bay", ppg: '20.5', logoUrl: buccaneersLogo, division: 'NFC South', primCol: '#D50A0A', secCol: '#F2F2F2',
    posLandingGrade: {QB: 'C+', RB: 'C', WR: 'B-', TE: 'C'}, posLandingRank: {QB: '15', RB: '21', WR: '16', TE: '18'}, lastEditTime: '1/18/2024',
    posLandingAnalysis: {QB: `Baker Mayfield looked very good this year. If they choose to draft a QB in 2024, they would have a tough time taking over the job. By the time he'd get his shot, Mike Evans and (possibly) Chris Godwin will be gone.`,
        RB: `Rashaad White shocked everyone in 2023, posting a top-5 RB performance. Expect this to be his best fantasy finish of his career, but he will likely remain a workhorse in 2024, allowing no room for another back.`, 
        WR: `If Mike Evans leaves, there is huge opportunity here, especially for a bigger-bodied deep threat (like Evans) that Baker loves. If that is not the case, this will be an average landing spot at best.`,
        TE: `Cade Otten has shown to be a pretty solid TE in this Bucs offense. Despite his talent, he's never been a consistent fantasy producer. Unless they get a dominant TE, his role likely won't be changed.`}}, 
    {mascot: "Saints", location: "New Orleans", ppg: '23.6', logoUrl: saintsLogo, division: 'NFC South', primCol: '#000000', secCol: '#A08A58',
    posLandingGrade: {QB: 'A-', RB: 'B-', WR: 'B', TE: 'B'}, posLandingRank: {QB: '5', RB: '10', WR: '10', TE: '8'}, lastEditTime: '1/18/2024',
    posLandingAnalysis: {QB: `Derek Carr wasn't inspiring this year despite the talent around him. Chris Olave is a stud, young WR and many mock drafts are projecting the Saints to take a WR in the 1st or 2nd round. If this happens, this changes from a good to a great QB landing spot.`, 
        RB: `Alvin Kamara is aging out. Expect him to be involved in the passing game next year, but unless Kendre Miller can take the next step and stay healthy, there's room for a rookie RB.`, 
        WR: `Chris Olave and Rashid Shaheed were a pretty good tandem this year, but Shaheed isn't a crazy talented WR. Mock drafts expect the Saints to take a WR in the 1st or 2nd this year. If they do, that WR could quickly overtake Shaheed as the WR2 on this team, a valuable spot with the attention Olave draws.`, 
        TE: `The Saints' haven't been using their TEs in the receiving game very much lately. However, Juwan Johnson is only to the team for one more year. With coaching changes and TEs moving on, there could be room for a rookie to make some noise.`}}, 
    // NFC West
    {mascot: "49ers", location: "San Francisco", ppg: '28.9', logoUrl: ninersLogo, division: 'NFC West', primCol: '#AA0000', secCol: '#CAB076',
    posLandingGrade: {QB: 'C-', RB: 'C-', WR: 'D+', TE: 'C+'}, posLandingRank: {QB: '18', RB: '24', WR: '29', TE: '16'}, lastEditTime: '1/18/2024',
    posLandingAnalysis: {QB: `Brock Purdy is a great fit for the Kyle Shanahan offense, and they won't move on anytime soon. That being said, he isn't a ridiculously talented QB, so if he suffers a bad injury, that could open up the floor for a new QB to take over just like Purdy did.`, 
        RB: `CMC somehow seemed to get better in his 7th season. Don't look at a rookie RB in San Fran until age starts to get the best of CMC.`, 
        WR: `Brandon Aiyuk is a free agent this off-season, but everything point to him resigning. Deebo's contract is up in 2025. Wait for one of those guys to be on the way out before going after another 49ers WR.`, 
        TE: `George Kittle's contract is up in 2025 in his 32 year-old season. It's very unlikely that a second TE would have fantasy relevance until he is gone, but maybe father-time will come for Kittle in the next few years.`}}, 
    {mascot: "Seahawks", location: "Seattle", ppg: '21.4', logoUrl: seahawksLogo, division: 'NFC West', primCol: '#002244', secCol: '#A5ACAF',
    posLandingGrade: {QB: 'A-', RB: 'D', WR: 'D-', TE: 'B-'}, posLandingRank: {QB: '4', RB: '29', WR: '31', TE: '13'}, lastEditTime: '1/18/2024',
    posLandingAnalysis: {QB: `Geno Smith's regression from his 2022 performance allows space for a new QB to come in and win the job. That combined with the plethora of weapons makes this a great landing spot for a 2024 rookie QB.`,
        RB: `Kenneth Walker and Zach Charbonnet make up a great RB room in Seattle. There isn't much room for any rookie to win a role hear without injury ahead of them.`, 
        WR: `Seattle has one of the best WR rooms in the NFL with DK Metcalf, Tyler Lockett, and Jaxon Smith-Njigba. Metcalf and Lockett both have time on their contract, but Lockett could be a cap casualty. Still, with Smith-Njigba just getting started in his NFL career, there's not much room for another WR in Seattle.`,
        TE: `There's a lot of target competition in Seattle with their impressive WR room. That being said, there's room for a rookie TE to come in and at the very least win the starting position. He could possibly even carve out a role.`}}, 
    {mascot: "Cardinals", location: "Arizona", ppg: '19.4', logoUrl: cardinalsLogo, division: 'NFC West', primCol: '#96233E', secCol: '#F2F2F2',
    posLandingGrade: {QB: 'C-', RB: 'B-', WR: 'A+', TE: 'D'}, posLandingRank: {QB: '21', RB: '11', WR: '2', TE: '28'}, lastEditTime: '1/18/2024',
    posLandingAnalysis: {QB: `It looks like the Cardinals are sticking with Kyler Murray as their QB, making this a poor QB landing spot. However, he hasn't shown enough to completely plant himself as a franchise QB. Maybe a rookie QB could find themselves as a starter in a couple years, but don't count on it.`,
        RB: `James Conner was incredible in 2023 after coming back from injury. At this point, we know Conner will miss at least a few weeks in 2024. We expect a rookie WR to join Kyler and Trey McBride in this offense. If they snag the right RB in this draft, he could have a ton of value for sure in 2025 and possibly 2024 as well.`,
        WR: `Hollywood Brown might be off this team come the start of the 2024 season. Even if he's still there, he isn't a true WR1 for a team. Whoever the Cardinals take with their first pick has immense opportunity to be the 1st read on an exciting young offense.`, 
        TE: `Trey McBride is a top-5 TE in dynasty. Unless Brock Bowers somehow ends up on this team, no rookie TE will take over McBride's role.`}}, 
    {mascot: "Rams", location: "Los Angeles", ppg: '23.8', logoUrl: ramsLogo, division: 'NFC West', primCol: '#1438A6', secCol: '#F2CB05',
    posLandingGrade: {QB: 'B-', RB: 'C', WR: 'B', TE: 'C+'}, posLandingRank: {QB: '10', RB: '20', WR: '11', TE: '15'}, lastEditTime: '1/18/2024',
    posLandingAnalysis: {QB: `Matthew Stafford will likely remain in the starting role for the next season or two. However, many mocks have recently projected them picking Stafford's replacement this year. Sitting behind a Hall of Famer for a couple years can do wonders for a QB's progression as we saw in 2023 with Jordan Love. If you're willing to wait for the payoff, a Rams' rookie QB could be a great investment.`, 
        RB: `Sean McVay seems to have found his workhorse in Kyren Williams making this a backfield with limited available opportunity. With this year's subpar RB class, there isn't a likely path for Kyren to lose his job.`, 
        WR: `Puka Nakua broke records last year in his rookie season. He got his chance as a result of father time and injuries catching up with Cooper Kupp. As Puka replaces Kupp completely, there leaves room for a new Robert Woods role in the future. If they find the right guy, there could be fantasy value.`, 
        TE: `The Rams extended Tyler Higbee in the 2023 season prior to him tearing his ACL in the Wild Card round. That being said, their rookie, Davis Allen, stepped up in Higbee's absences. Unless they draft one of the top TEs this year, it's unlikely that there will be much change.`}}, 
    // AFC North
    {mascot: "Bengals", location: "Cincinnati", ppg: '21.5', logoUrl: bengalsLogo, division: 'AFC North', primCol: '#000000', secCol: '#FA4D14',
    posLandingGrade: {QB: 'D-', RB: 'B', WR: 'B+', TE: 'A'}, posLandingRank: {QB: '29', RB: '6', WR: '7', TE: '2'}, lastEditTime: '1/18/2024',
    posLandingAnalysis: {QB: `Joe Burrow had a very disappointing year in 2023, but much of that can be explained away by injuries. He is still their franchise QB and locked into a long term deal.`, 
        RB: `Joe Mixon hasn't been very efficient as a runner in recent years and his time with Cincy is likely approaching its end. Rookie, Chase Brown, was decent when he got work in 2023, but was drafted late in 2023. If the Bengals choose to try to replace Mixon in this draft, there could be value in this high powered offense.`, 
        WR: `It looks like Tee Higgins is probably going to be gone this off-season, which will leave an opportunity for a new receiver to come in. Looking back to 2022, this was a very valuable role in fantasy as Tee finished as a top-15 WR. If Cincy chooses to fill this role with a WR, that player could have an immediate impact.`, 
        TE: `It looks like Tee Higgins is probably going to be gone this off-season, which will leave an opportunity for a new receiver to come in. Looking back to 2022, this was a very valuable role in fantasy as Tee finished as a top-15 WR. If Cincy chooses to fill this role with a TE, that player could have an immediate impact.`}}, 
    {mascot: "Ravens", location: "Baltimore", ppg: '28.4', logoUrl: ravensLogo, division: 'AFC North', primCol: '#201747', secCol: '#9A7611',
    posLandingGrade: {QB: 'D', RB: 'B-', WR: 'C', TE: 'D-'}, posLandingRank: {QB: '27', RB: '9', WR: '24', TE: '31'}, lastEditTime: '1/18/2024',
    posLandingAnalysis: {QB: `Lamar Jackson won the MVP in 2023. The Ravens have their franchise QB. Outside of a major injury, there's no value for a rookie QB in Baltimore.`,
        RB: `In 2023 we saw JK Dobbins tear his Achilles early, an injury that historically ends RB careers. We also saw Keaton Mitchell show major flashes as a small explosive back, and we saw Gus Edwards dominate in the TD department. Behind a good O-Line, in a great offense, there could be value for a rookie RB that can steal Gus' job.`,
        WR: `Zay Flowers flashed in 2023, elevating to Lamar's top option after Mark Andrews went down. However, Lamar likes to spread it around, so with a healthy Mark Andrews and a 2nd year Zay Flowers, don't expect another rookie WR to get enough opportunity to be fantasy relevant.`, 
        TE: `Lamar loves to throw to the TE. However, Mark Andrews will be back and Isaiah Likely is a very capable player in his own right. There is no room for another TE.`}}, 
    {mascot: "Browns", location: "Cleveland", ppg: '21.3', logoUrl: brownsLogo, division: 'AFC North', primCol: '#271203', secCol: '#F23806',
    posLandingGrade: {QB: 'C-', RB: 'B', WR: 'C', TE: 'D'}, posLandingRank: {QB: '19', RB: '5', WR: '23', TE: '27'}, lastEditTime: '1/18/2024',
    posLandingAnalysis: {QB: `Sadly for Cleveland and the NFL, the Browns are stuck with Deshaun Watson for the foreseeable future. His contract is far too big to not play him. The only value for a rookie QB here is through another injury for Watson.`, 
        RB: `Nick Chubb suffered another devastating injury this past season. Combine this with 2024 being his age 29 season, it's unlikely that he'll ever be the old world-beater version of himself. If Cleveland drafts an RB with decent draft capital, they could be in for a large workload behind a great O-Line for years to come.`, 
        WR: `With Amari Cooper and David Njoku, there currently isn't enough volume to go to a third option in the passing game without an extreme consolidation of targets. However, in a couple years, if Cooper is gone, there will be room for another WR to be involved.`, 
        TE: `David Njoku finished the year playing at an extremely high level. It will be interesting to see how involved he his when Watson comes back. They also have Harrison Bryant as a good pass catching backup TE. This duo leaves no room for additional TEs.`}}, 
    {mascot: "Steelers", location: "Pittsburgh", ppg: '17.9', logoUrl: steelersLogo, division: 'AFC North', primCol: '#0C0C0E', secCol: '#C1C1C1',
    posLandingGrade: {QB: 'C+', RB: 'C', WR: 'C', TE: 'C-'}, posLandingRank: {QB: '13', RB: '19', WR: '25', TE: '24'}, lastEditTime: '1/18/2024',
    posLandingAnalysis: {QB: `The Steelers have had QB struggles since Big Ben's down fall. However, they have expressed their commitment to Kenny Pickett. Even if they were to move on from Kenny, they had a pretty low volume passing offense and it'll be ever more so with Arthur Smith. Don't get too excited about any QB going here.`, 
        RB: `Najee Harris and Jaylen Warren have been heavily used in combination over the past two years. All signs point to this continuing. Their high involvement won't allow for another back to insert himself into the rotation.`, 
        WR: `Depending on if Diontae Johnson leaves after his contract is up in 2025, there may be room for a new option then. However, while Johnson and George Pickens are in Pitt, there won't be enough targets in this low volume offense for a third option. You do not want Arthur Smith's 3rd receiving option.`, 
        TE: `Despite struggling in 2023, Pat Freiermuth is still a solid young TE. Especially after drafting Darnell Washington last year, there isn't room for another TE on this team.`}}, 
    // AFC East
    {mascot: "Bills", location: "Buffalo", ppg: '26.5', logoUrl: billsLogo, division: 'AFC East', primCol: '#00338D', secCol: '#F2F2F2',
    posLandingGrade: {QB: 'D-', RB: 'D+', WR: 'A-', TE: 'D'}, posLandingRank: {QB: '30', RB: '26', WR: '4', TE: '29'}, lastEditTime: '1/18/2024',
    posLandingAnalysis: {QB: `Despite Josh Allen's turnover problem, there is no way the Bills are going to move on from a player of his talent. Any QB drafter to the Bills would just be an injury insurance policy.`, 
        RB: `James Cook looked incredible whenever they gave him the ball in 2023. After the OC change, he exploded to being a top 10 RB play. With Josh allen as the teams goal-line threat and Cook's efficiency in between the 20s, there's no room for a rookie RB.`, 
        WR: `It's likely that Gabe Davis has seen his last snap in Buffalo and Stephon Diggs is clearly past his prime. This combination makes for a lot of available targets in this high powered offense. Whichever rookie WR finds themselves in Buffalo come 2024 could be in for a large workload.`, 
        TE: `The Bills drafted Dalton Kincaid early in the 2023 draft. With what Kincaid did with his opportunity, it would be shocking if the Bills even draft a TE in 2024.`}}, 
    {mascot: "Dolphins", location: "Miami", ppg: '29.2', logoUrl: dolphinsLogo, division: 'AFC East', primCol: '#008D96', secCol: '#F2F2F2',
    posLandingGrade: {QB: 'C-', RB: 'C-', WR: 'C+', TE: 'B-'}, posLandingRank: {QB: '20', RB: '22', WR: '21', TE: '10'}, lastEditTime: '1/18/2024',
    posLandingAnalysis: {QB: `Tua's last two seasons have been a tail of two halves. When the weather gets cold, so has he. That being said, it looks like the Dolphins believe in him. Don't expect much if a QB is drafted here.`, 
        RB: `I can't imagine Raheem Mostert repeats his incredible season last year, but with Devon Achane back for his second season, there isn't exactly a vacancy in their RB room. However, if they acquire a bigger-bodied back in the draft, he could get valuable goal-line work in this high-powered offense.`, 
        WR: `Tyreek Hill and Jaylen Waddle are an incredible WR tandem when on the field. However, keeping them both on the field has been a problem. This, along with a very high volume passing offense, could allow for a rookie WR to come in and produce, but probably wouldn't be fantasy relevant.`, 
        TE: `Miami hasn't used their TEs in a valuable capacity in recent years. With as much as they throw the ball down in South Beach, if they draft a good TE in this years draft, he could see valuable targets.`}}, 
    {mascot: "Jets", location: "New York", ppg: '15.8', logoUrl: jetsLogo, division: 'AFC East', primCol: '#006633', secCol: '#FFFFFF',
    posLandingGrade: {QB: 'B', RB: 'D-', WR: 'A', TE: 'A-'}, posLandingRank: {QB: '9', RB: '30', WR: '3', TE: '3'}, lastEditTime: '1/18/2024',
    posLandingAnalysis: {QB: `Aaron Rodgers will be back next year, but anything after that is uncertain. After what we've seen from Jordan Love, giving a rookie time to sit behind Aaron Rodgers can be extremely valuable to their development. This could mean for a great QB once Rodgers retires.`, 
        RB: `Following his return from the torn ACL in 2023, Breece Hall dominated the touches out of their backfield during the second half of the season and finished as the RB2 in PPR leagues. With his talent, there's no room for a rookie RB to come in and take work from Breece.`, 
        WR: `Garrett Wilson is a true WR1, but beyond him and Breece Hall, their weapons are very week. A rookie WR could easily slot into being the second target on this team.`, 
        TE: `Other than Garrett Wilson and Breece Hall, this team has very poor weapons. If they choose to draft a TE in this years' draft, he could easily see a very substantial workload for a TE.`}}, 
    {mascot: "Patriots", location: "New England", ppg: '13.9', logoUrl: patriotsLogo, division: 'AFC East', primCol: '#0C2240', secCol: '#BF0404',
    posLandingGrade: {QB: 'B+', RB: 'C+', WR: 'B+', TE: 'B-'}, posLandingRank: {QB: '6', RB: '14', WR: '8', TE: '14'}, lastEditTime: '1/18/2024',
    posLandingAnalysis: {QB: `Whichever QB the Patriots draft will be their starter; that isn't a question. The concern is the weapons that will be at his disposal. Rhamondre Stevenson is a good runner and a great pass catcher out of the back field, but beyond him there isn't much. Pop Douglas did well with the opportunities given to him in 2023, but don't get too excited about the QB that lands here unless they make a move at WR as well.`, 
        RB: `Rhamondre Stevenson struggled with injury in 2023, but he'll be back to 100% in 2024. There may be room for an RB2 role, provided Zeke doesn't resign, Either way, don't get too excited about a RB drafted to New England.`, 
        WR: `With Pop Douglas as the only threat to any incoming rookies, there is plenty of opportunity for WR production in New England. It will be interesting to see what the Patriots offense looks like in 2024 with all the changes. Except their WR1 to at least have value through volume.`, 
        TE: `With Hunter Henry's and Mike Gesicki's contracts coming to an end, there is room for a new TE to come in. However, with so many needs to fill, expect them to draw up another short term deal for a TE this off-season.`}}, 
    // AFC South
    {mascot: "Texans", location: "Houston", ppg: '22.2', logoUrl: texansLogo, division: 'AFC South', primCol: '#031F2E', secCol: '#F2F2F2',
    posLandingGrade: {QB: 'D-', RB: 'A', WR: 'C', TE: 'A-'}, posLandingRank: {QB: '31', RB: '1', WR: '22', TE: '4'}, lastEditTime: '1/18/2024',
    posLandingAnalysis: {QB: `The Texans found their franchise QB in C.J. Stroud, there's no reason for them to take another in the draft.`, 
        RB: `With Devin Singletary's contract expiring and Dameon Pierce falling out of favor, Houston needs a running back to complete this incredible, young offense. If they choose to fill this need through the draft, this player will find themselves in a great role with plenty opportunity.`, 
        WR: `Nico Collins and Tank Dell shocked the nFL with their performance in 2023. Still, with how incredible this passing attack was, there's a chance that a rookie WR could carve out a role in this offense.`, 
        TE: `If the Texans don't choose to resign Dalton Schultz in 2024, they could draft a TE to compete for the job with Brevin Jordan. If that player beats out Brevin, there could be immediate fantasy success as we saw this role being very valuable in 2023.`}}, 
    {mascot: "Jaguars", location: "Jacksonville", ppg: '22.2', logoUrl: jaguarsLogo, division: 'AFC South', primCol: '#006073', secCol: '#D99414',
    posLandingGrade: {QB: 'C-', RB: 'D+', WR: 'B-', TE: 'C-'}, posLandingRank: {QB: '23', RB: '27', WR: '24', TE: '23'}, lastEditTime: '1/18/2024',
    posLandingAnalysis: {QB: `Trevor Lawrence's first few NFL seasons have been pretty disappointed. It seems that he'll never turn out to be the QB he was projected to be. Still, he's been good enough to maintain his job for the foreseeable future.`, 
        RB: `Travis Etienne was very productive for much of the 2023 season. Despite preseason narratives, he was a true workhorse for Jacksonville. His role seems safe with the Jaguars, making any rookie likely just an insurance policy.`, 
        WR: `It's quite possible that Calvin Ridley is off this team in 2024, leaving an opening in their WR room. Drafting a complement to Christian Kirk could result in a very valuable fantasy piece.`, 
        TE: `Evan Engram was very close to breaking the single-season TE receptions record in 2023. With multiple years still left on his contract, there's little to no value for a new TE in this offense.`}}, 
    {mascot: "Colts", location: "Indianapolis", ppg: '23.3', logoUrl: coltsLogo, division: 'AFC South', primCol: '#104573', secCol: '#F2F2F2',
    posLandingGrade: {QB: 'C', RB: 'D+', WR: 'C+', TE: 'B-'}, posLandingRank: {QB: '17', RB: '28', WR: '20', TE: '9'}, lastEditTime: '1/18/2024',
    posLandingAnalysis: {QB: `Anthony Richardson flashed in his limited time before injury. With the draft capital he received, it will take a lot for them to move on from him in the coming years. There's mostly just insurance value here.`, 
        RB: `Jonathan Taylor, when healthy, is still a top RB talent in the league. Any RB drafted here, will be nothing more than insurance in case of a JT injury.`, 
        WR: `Michael Pittman impressed in 2023 and Josh Downs flashed. Unless Pittman moves on in free agency, there's not much value for a second or third option in this run first offense.`, 
        TE: `Anthony Richardson could benefit from a big body patrolling the middle of the field. If the Colts invest on a solid TE in this years draft, their could be value there.`}}, 
    {mascot: "Titans", location: "Tennessee", ppg: '17.9', logoUrl: titansLogo, division: 'AFC South', primCol: '#0C2340', secCol: '#4B92DB',
    posLandingGrade: {QB: 'C+', RB: 'B', WR: 'B', TE: 'C+'}, posLandingRank: {QB: '14', RB: '7', WR: '13', TE: '17'}, lastEditTime: '1/18/2024',
    posLandingAnalysis: {QB: `The Titans want to see what they have with Will Levis. They'll likely give him at least the 2024 season, provided he isn't a huge disappointment. Still, if the right QB goes here, he could be starting as soon as the middle of the 2024 season.`, 
        RB: `With Derrick Henry out, there is a lot of work to take in Tennessee. While Tyjae Spears impressed with limited workload in 2023, the new regime in 2024 could look to alter their backfield. If they do there could be a lot of value in this new offense.`, 
        WR: `DeAndre Hopkins will be in a Titans uniform for the foreseeable future, but he's definitely not the player he used to be. With Treylon Burks continued struggles, the right rookie WR could carve out a big role in this offense in the next few years. `, 
        TE: `Chig Okonkwo continues to show flashes when given the chance. The Titans likely won't draft another TE in 2023, but even if they do, expect Chig to beat out the competition for receiving work.`}}, 
    // AFC West
    {mascot: "Chiefs", location: "Kansas City", ppg: '21.8', logoUrl: chiefsLogo, division: 'AFC West', primCol: '#E31936', secCol: '#FCFCFC',
    posLandingGrade: {QB: 'F', RB: 'C-', WR: 'A-', TE: 'B'}, posLandingRank: {QB: '32', RB: '23', WR: '5', TE: '7'}, lastEditTime: '1/18/2024',
    posLandingAnalysis: {QB: `Patrick Mahomes. Carry on.`, 
        RB: `Despite his lower draft capital, Isaiah Pacheco has been a stud the last two years. He was a huge part of KC's offense in 2023, they likely won't move on from him in 2024.`, 
        WR: `Rashee Rice excelled in his rookie year. Still, with the slow decline of Travis Kelce, there is plenty of room for another WR to carve out a large role.`, 
        TE: `Travis Kelce is clearly starting to decline. If KC drafts a TE this year, he will be the intended heir to Kelce's role. This is an incredibly valuable role for years to come.`}}, 
    {mascot: "Chargers", location: "Los Angeles", ppg: '20.4', logoUrl: chargersLogo, division: 'AFC West', primCol: '#0080C6', secCol: '#FFC20E',
    posLandingGrade: {QB: 'D', RB: 'A', WR: 'A+', TE: 'A+'}, posLandingRank: {QB: '28', RB: '2', WR: '1', TE: '1'}, lastEditTime: '1/18/2024',
    posLandingAnalysis: {QB: `Despite Justin Herbert's recent struggles, he has shown that he hasn't changed since his incredible first two seasons. He is their franchise QB, and they won't be moving on anytime soon.`, 
        RB: `This is my second favorite RB landing spot. With Austin Ekeler washed (and likely gone), there is huge opportunity in this backfield. Whoever they draft will have instant fantasy value.`, 
        WR: `With Mike Williams injury history, Keenan Allen's age, Quentin Johnston not developing, and Justin Herbert under center, this is the best landing spot for any WR. The opportunity will be great in 2024 and, especially, in the years after.`, 
        TE: `This team's pass catchers are dwindling. If LA decides the refill their receiving corp with a TE, he could slide into being Justin Herbert's second target. This would be very valuable in fantasy. `}}, 
    {mascot: "Broncos", location: "Denver", ppg: '21.0', logoUrl: broncosLogo, division: 'AFC West', primCol: '#0A2343', secCol: '#FB4F14',
    posLandingGrade: {QB: 'B-', RB: 'C+', WR: 'B', TE: 'B-'}, posLandingRank: {QB: '12', RB: '17', WR: '9', TE: '11'}, lastEditTime: '1/18/2024',
    posLandingAnalysis: {QB: `It looks like Russell Wilson is out of Denver. Provided the Broncos fill out their receiving corps, this would be a great landing spot for a QB.`, 
        RB: `Javonte Williams had a tough season in 2023 after returning from injury. However, he's still a talented back and would beat out most RBs in this draft class.`, 
        WR: `This team has wanted to part ways with Jerry Jeudy for years now. He has another year left on his deal, but they could try to get him out of Denver this off season. There have also been murmurs about Sutton getting out of there. If they replace one of these guys in the draft, this would be a good landing spot for a WR.`, 
        TE: `After basically missing the entire 2023 season, Greg Dulcich is seeming less and less likely to pan out. If they choose to draft a TE this year, he could step into a decent role.`}}, 
    {mascot: "Raiders", location: "Las Vegas", ppg: '19.5', logoUrl: raidersLogo, division: 'AFC West', primCol: '#000000', secCol: '#BCC4C9',
    posLandingGrade: {QB: 'B', RB: 'C+', WR: 'B-', TE: 'D+'}, posLandingRank: {QB: '8', RB: '13', WR: '17', TE: '26'}, lastEditTime: '1/18/2024',
    posLandingAnalysis: {QB: `It seems the Raiders are likely to draft a QB this year after the Aidan O'Connell experiment didn't work out. If Davante stays, he would provide a safe target for a new QB. Even if he's gone, a rookie QB in Las Vegas would have plenty of leash to develop in the new system.`, 
        RB: `Even if Jacobs is gone, it seems they might have something with Zahmir White. However, there could still be room for a pass catching back in this offense.`, 
        WR: `It seems pretty likely that Davante Adams is out of Las Vegas in 2024. This would provide a huge opportunity to an incoming WR. Even if he stays, the aging All-Pro could cede some volume to an incoming player.`, 
        TE: `The Raiders spent significant draft capital on Michael Mayer in 2023. It is highly unlikely they do it again in 2024. Even if they do, Mayer would likely be able to beat them out.`}}, 
];


export {playerInfo, ppr1QB, ppr2QB, nPpr1QB, nPpr2QB, nflTeams};

