import type { NotificationItem } from "@/types/notification";
import { FaCoins, FaArrowRight } from "react-icons/fa";
import { GiHealthCapsule } from "react-icons/gi";
import { IoCheckmarkSharp, IoClose } from "react-icons/io5";

export const notificationData: NotificationItem[] = [
  {
    id: 1,
    title: "Reimbursement",
    description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum amet alias accusamus. Libero obcaecati sit voluptatem eveniet, rem reiciendis maiores nulla adipisci repudiandae. Voluptate corporis, error repellendus ducimus, nesciunt hic saepe in quam eius velit voluptas.",
    date: "Today",
    link: "#",
    icon: FaCoins,
    statusIcon: IoCheckmarkSharp,
    statusColor: "bg-green-500",
  },
  {
    id: 2,
    title: "Reimbursement",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    date: "Today",
    link: "#",
    icon: FaCoins,
    statusIcon: FaArrowRight,
    statusColor: "bg-blue-500",
  },
  {
    id: 3,
    title: "Reimbursement",
    description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum amet alias accusamus. Libero obcaecati sit voluptatem eveniet, rem reiciendis maiores nulla adipisci repudiandae. Voluptate corporis, error repellendus ducimus, nesciunt hic saepe in quam eius velit voluptas.",
    date: "Yesterday",
    link: "#",
    icon: FaCoins,
    statusIcon: IoClose,
    statusColor: "bg-red-500",
  },
  {
    id: 4,
    title: "Sickness",
    description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum amet alias accusamus. Libero obcaecati sit voluptatem eveniet, rem reiciendis maiores nulla adipisci repudiandae. Voluptate corporis, error repellendus ducimus, nesciunt hic saepe in quam eius velit voluptas.",
    date: "Today",
    link: "#",
    icon: GiHealthCapsule,
    statusIcon: IoCheckmarkSharp,
    statusColor: "bg-green-500",
  },
  {
    id: 5,
    title: "Sickness",
    description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum amet alias accusamus. Libero obcaecati sit voluptatem eveniet, rem reiciendis maiores nulla adipisci repudiandae. Voluptate corporis, error repellendus ducimus, nesciunt hic saepe in quam eius velit voluptas.",
    date: "Today",
    link: "#",
    icon: GiHealthCapsule,
    statusIcon: IoClose,
    statusColor: "bg-red-500",
  },
  {
    id: 6,
    title: "Sickness",
    description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum amet alias accusamus. Libero obcaecati sit voluptatem eveniet, rem reiciendis maiores nulla adipisci repudiandae. Voluptate corporis, error repellendus ducimus, nesciunt hic saepe in quam eius velit voluptas.",
    date: "Today",
    link: "#",
    icon: GiHealthCapsule,
    statusIcon: FaArrowRight,
    statusColor: "bg-blue-500",
  },
];
