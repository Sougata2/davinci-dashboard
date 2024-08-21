import Panel from "./Panel";
import { MdDashboard } from "react-icons/md";
import { GiFallingStar } from "react-icons/gi";
import { BsFileText } from "react-icons/bs";
import { LuPencilLine } from "react-icons/lu";
import { HiCursorClick } from "react-icons/hi";
import { TbAddressBook } from "react-icons/tb";
import { IoIosVideocam } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import { CiFileOn } from "react-icons/ci";
import { CiMicrophoneOn } from "react-icons/ci";
import { BsChatRightText } from "react-icons/bs";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { PiChatCircleTextLight } from "react-icons/pi";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { TbSunLow } from "react-icons/tb";
import { FaRegFileCode } from "react-icons/fa";
import { TbMicrophone2 } from "react-icons/tb";
import { PiFiles } from "react-icons/pi";
import { AiOutlineTeam } from "react-icons/ai";
import { MdOutlineAccountTree } from "react-icons/md";
import { BsPersonCheckFill } from "react-icons/bs";
import { TbFileDollar } from "react-icons/tb";
import { RiHome6Line } from "react-icons/ri";
import { SiNamemc } from "react-icons/si";
import { PiTreeStructure } from "react-icons/pi";
import { TbCurrencyDollar } from "react-icons/tb";
import { FaRegPaperPlane } from "react-icons/fa";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";

const panels = {
  "ai-panel": [
    [<MdDashboard />, "Ai Writer", false],
    [<GiFallingStar />, "Ai Article Wizard", false],
    [<BsFileText />, "Smart Editor", false],
    [<LuPencilLine />, "Ai Rewriter", false],
    [<HiCursorClick />, "Ai Plagrism Checker", false],
    [<TbAddressBook />, "Ai Content Detector", false],
    [<IoIosVideocam />, "Image to Video", false],
    [<CiImageOn />, "Ai Images", false],
    [<CiFileOn />, "Ai Voiceover", true],
    [<CiMicrophoneOn />, "AiSpeech to Text", false],
    [<BsChatRightText />, "Ai Chat", false],
    [<MdOutlineRemoveRedEye />, "Ai Vision", false],
    [<PiChatCircleTextLight />, "Ai File Chat", false],
    [<HiOutlineChatBubbleBottomCenterText />, "Ai Web Chat", false],
    [<TbSunLow />, "Ai chat images", false],
    [<FaRegFileCode />, "Ai Code", false],
    [<TbMicrophone2 />, "Ai Brand Voice", false],
    [<PiFiles />, "Files", true],
  ],
  account: [
    [<MdOutlineAccountTree />, "Subscription Plans", false],
    [<AiOutlineTeam />, "Team Members", false],
    [<BsPersonCheckFill />, "My Account", false],
    [<TbFileDollar />, "Affilate Program", false],
  ],
  "admin-panel": [
    [<RiHome6Line />, "Dashboard", false],
    [<SiNamemc />, "Name Management", true],
    [<PiTreeStructure />, "User Management", true],
    [<TbCurrencyDollar />, "Finance Mngt.", true],
    [<FaRegPaperPlane />, "Support Request", false],
    [<MdOutlineNotificationsActive />, "Notification", true],
    [<FaCode />, "Frontend Mngt", false],
    [<IoSettingsOutline />, "General Settings", false],
  ],
};
function Panels() {
  const panelKeys = Object.keys(panels);

  return (
    <div>
      {panelKeys.map((panel) => (
        <Panel key={panel} title={panel} panelItems={panels[panel]} />
      ))}
    </div>
  );
}

export default Panels;
