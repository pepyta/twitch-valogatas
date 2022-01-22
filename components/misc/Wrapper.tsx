import { AppBar, Avatar, Box, Drawer, IconButton, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { PropsWithChildren, useState } from "react";
import { ExitToAppRounded as SignOutIcon, MenuRounded as MenuIcon, SettingsRounded as SettingsIcon } from "@mui/icons-material";
import { signOut, useSession } from "next-auth/react";

export const DRAWER_WIDTH = 300;

export type WrapperProps = PropsWithChildren<{}>;

const Wrapper = (props: WrapperProps) => {
    const { data } = useSession();
    const [isOpen, setOpen] = useState(false);

    const drawer = (
        <div>
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src={data.user.image} />
                    </ListItemAvatar>
                    <ListItemText primary={data.user.name} secondary={data.user.email} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Beállítások"} />
                </ListItem>
                <ListItem button onClick={() => signOut()}>
                    <ListItemIcon>
                        <SignOutIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Kijelentkezés"} />
                </ListItem>
            </List>
        </div>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                position="fixed"
            >
                <Toolbar sx={{ display: { sm: 'none' } }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={() => setOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Twitch válogatás
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
            >
                <Drawer
                    variant="temporary"
                    open={isOpen}
                    onClose={() => setOpen(false)}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` } }}>
                {props.children}
            </Box>
        </Box>
    );
};

export default Wrapper;