import {AiFillInfoCircle, AiOutlineSetting, AiFillHome, AiOutlineCloudUpload} from 'react-icons/ai'
import {MdSchool, MdHelp} from 'react-icons/md'
import {RiVideoFill} from 'react-icons/ri'


const iconSize = 24
const authIconSize = 24

const color = "#1A8F4A"
export const navItems = [
    {
        label:'Home',
        icon:<AiFillHome color={color} size={iconSize} />,
        path:'/'
    },
    {
        label:'Resources',
        icon:<RiVideoFill color={color} size={iconSize} />,
        path:'/resources'
    },
    {
        label:'E-portal',
        icon:<MdSchool color={color} size={iconSize} />,
        path:'/login'
    },
    {
        label:'About Us',
        icon:<AiFillInfoCircle color={color} size={iconSize} />
    },
    {
        label:'Contact Us',
        icon:<MdHelp color={color} size={iconSize} />
    }
]