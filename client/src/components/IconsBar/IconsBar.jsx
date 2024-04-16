import "./IconsBar.css";
import { FaTheaterMasks } from "react-icons/fa";
import { TbBallFootball } from "react-icons/tb";
import { BsBoxSeam } from "react-icons/bs";
import { PiStudentBold, PiDetectiveBold, PiMusicNoteFill } from "react-icons/pi";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { LuPartyPopper } from "react-icons/lu";


function IconsBar() {
    return(
        <div className="icons-bar">
        <button className="sport" type="button">
        <TbBallFootball/>
        <p className="text">Sport</p>
        </button>
        <button className="moving" type="button">
        <BsBoxSeam/>
        <p className="text">Déménagement</p>
        </button>
        <button className="cours" type="button">
        <PiStudentBold/>
        <p className="text">Aide aux devoirs</p>
        </button>
        <button className="outils" type="button">
        <HiOutlineWrenchScrewdriver/>
        <p className="text">Travaux</p>
        </button>
        <button className="acting" type="button">
        <FaTheaterMasks />
        <p className="text">Acteurs</p>
        </button>
        <button className="party" type="button">
        <LuPartyPopper/>
        <p className="text">Evénements</p>
        </button>
        <button className="detective" type="button">
        <PiDetectiveBold/>
        <p className="text">detective</p>
        </button>
        <button className="music" type="button"> 
        <PiMusicNoteFill/>
        <p className="text">Cours de musique</p>
        </button>
       </div>
 )
}

export default IconsBar;
