import {
    FaBuffer,
    FaChartPie,
    // FaCartShopping,
    FaDatabase,
    FaOpencart,
    FaRegistered,
    FaThermometerThreeQuarters,
    FaUserAlt,
} from 'react-icons/fa';
import { BsFillSuitHeartFill } from 'react-icons/bs'
import { BiSolidCategoryAlt } from 'react-icons/bi'

export const MENU_USER = {
    profile: {
        name: 'PROFILE',
        route: '/user/profile',
        icon: <FaUserAlt />,
    },
    favorites: {
        name: 'FAVORITES',
        route: '/user/favorites',
        icon: <BsFillSuitHeartFill />,
    },
    shopping: {
        name: 'SHOPPING',
        route: '/user/shopping',
        icon: <FaOpencart />,
    },
    record: {
        name: 'RECORD',
        route: '/user/record',
        icon: <FaBuffer />,
    },
}

export const MENU_ADMIN = {
    statistics: {
        name: 'STATISTICS',
        route: '/admin/statistics',
        icon: <FaChartPie />,
    },
    sales: {
        name: 'SALES',
        route: '/admin/sales',
        icon: <FaOpencart />,
    },
    customer: {
        name: 'CUSTOMER',
        route: '/admin/customer',
        icon: <FaUserAlt />,
    },
    stock: {
        name: 'STOCK',
        route: '/admin/stock',
        icon: <FaThermometerThreeQuarters />,
    },
    product: {
        name: 'PRODUCT',
        route: '/admin/product',
        icon: <FaDatabase />,
    },
    brands: {
        name: 'BRANDS',
        route: '/admin/brands',
        icon: <FaRegistered />,
    },
    typesCategories: {
        name: 'TYPES & CATEGORIES',
        route: '/admin/types-categories',
        icon: <BiSolidCategoryAlt />,
    }
}