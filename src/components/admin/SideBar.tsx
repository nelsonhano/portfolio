import { adminRoutes } from "@/lib/utils";
import { 
    Sidebar, 
    SidebarContent, 
    SidebarFooter, 
    SidebarGroup, 
    SidebarGroupContent, 
    SidebarHeader, 
    SidebarMenu, 
    SidebarMenuButton, 
    SidebarMenuItem 
} from "../ui/sidebar";
import Link from "next/link";

export default function SideBar() {
    return (
        <aside className="w-1/4">
            <Sidebar className="bg-black">
                <SidebarHeader>Admin Panel</SidebarHeader>

                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupContent>
                        <SidebarMenu>
                            {adminRoutes.map((item) => (
                                <SidebarMenuItem key={item.id}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.name}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                </SidebarContent>

                <SidebarFooter>Footer Content</SidebarFooter>
            </Sidebar>
        </aside>
    );}
