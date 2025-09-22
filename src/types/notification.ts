import type { IconType } from "react-icons";

export interface NotificationItem {
  id: number;
  title: string;
  description: string;
  date: string;
  link: string;
  icon: IconType;      
  statusIcon: IconType;
  statusColor: string; 
}