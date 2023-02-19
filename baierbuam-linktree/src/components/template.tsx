import { Avatar, Chip, Divider, Stack } from "@mui/material";
import React from "react";
import Logo from "../assets/logo.png"
import { openEmail, openLink } from "../functions/openLink";
import "./template.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';

export function Template() {
    return(
        <div className="body">
        <Stack className="top__stack" alignItems="center" spacing={2}>
            <Avatar alt="Logo" src={Logo} sx={{ width: "12rem", height: "12rem" }} />
            <Chip variant="outlined" label="@baierbuamandfriends" />
        </Stack>
        <Divider variant="middle" />
        <Stack className="bottom__stack" spacing={3} alignItems="center">
             <Chip icon={<HomeIcon />} className="chip" label="Webseite" onClick={() => openLink("https://www.baierbuamandfriends.de")}/>
             <Chip icon={<InstagramIcon/>} className="chip" label="Instagram" onClick={() => openLink("https://www.instragram.com/baierbuamandfriends/")}/>
             <Chip icon={<FacebookIcon />} className="chip" label="Facebook" onClick={() => openLink("https://www.facebook.com/baierbuamandfriends/")}/>
             <Chip icon={<EmailIcon/>} className="chip" label="Email" onClick={() => openEmail()}/>
        </Stack>
        </div>
    )
}