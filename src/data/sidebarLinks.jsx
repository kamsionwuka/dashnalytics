import {FanHouse, FaBagShopping, FaWallet, FaDice, FaStore, FaTelegram } from "react-icons/fa6";

export const sidebarLinks = [
    {
        id: "80250",
        title: "Dashboard",
        link: "/",
        icon: <FanHouse />,
    },
    {
        id: "80251",
        title: "Wallet",
        link: "/wallet",
        icon: <FaWallet />,
    },
    {
        id: "80252",
        title: "Product",
        link: "/product",
        icon: <FaBagShopping />,
    },
    {
        id: "80253",
        title: "Category",
        link: "/product",
        icon: <FaDice />,
    },
    {
        id: "80254",
        title: "Transaction",
        link: "/transaction",
        icon: <FaStore />,
    },
    {
        id: "80255",
        title: "Shipment",
        link: "/shipment",
        icon: <FaTelegram />,
    }
]