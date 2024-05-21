import { BiCategory } from "react-icons/bi"
import { 
  MdOutlineInsertChart,
  MdAddShoppingCart,
} from "react-icons/md"
import { 
  PiBriefcase,
  PiShareNetworkLight, 
} from "react-icons/pi"
import { GoLink } from "react-icons/go"
import { IoIosHelpCircleOutline } from "react-icons/io"
import { CiSettings } from "react-icons/ci"

const categories = {
  index: '概觀',
  analysis: '分析',
  volumn: '電量',
  profile: '基本資料',
  bestPractice: '轉供',
  contract: '契約',
  help: '幫助',
  settings: '設定',
}

export const categoryIcons = {
  index: <BiCategory />,
  analysis: <MdOutlineInsertChart />,
  volumn: <MdAddShoppingCart />,
  profile: <PiBriefcase />,
  bestPractice: <GoLink />,
  contract: <PiShareNetworkLight />,
  help: <IoIosHelpCircleOutline />,
  settings: <CiSettings />,
}

export default categories