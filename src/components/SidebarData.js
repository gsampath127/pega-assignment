import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';


export const SidebarTopItems = [
    {
        title:'Home',
        path:'/',
        icon: <AiIcons.AiFillHome/>,
        className: 'nav-text'
    },
    {
        title:'Other Charts',
        path:'/more',
        icon: <FaIcons.FaChartArea/>,
        className: 'nav-text'
    },
]

export const SidebarBottomItems = [
    {
        title:'Recents',
        path:'/',
        icon: <FaIcons.FaRedo/>,
        className: 'nav-text'
    },
    {
        title:'Sampath Gajawada',
        path:'/',
        icon: <FaIcons.FaUser/>,
        className: 'nav-text'
    },
]

