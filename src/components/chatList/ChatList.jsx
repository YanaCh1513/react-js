import * as React from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import ListSubheader from '@mui/material/ListSubheader';

export function ChatList() {
    const [charts, setCharts] = React.useState([
        { id: 0, name: "GApps..." },
        { id: 1, name: "Mi Store customer service" },
        { id: 2, name: "Honor UI" },
        { id: 3, name: "Samuel service" },
        { id: 4, name: "Checklist" },
    ])
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <List component="nav" aria-label="main mailbox folders"
        // subheader={
        //     <ListSubheader component="div" id="nested-list-subheader">
        //         Chats All
        //     </ListSubheader>}
        >
            {
                charts.map((item, index) =>
                    <ListItemButton
                        key={item.id}
                        selected={selectedIndex === index}
                        onClick={(event) => handleListItemClick(event, index)}
                    >
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={item.name} />
                    </ListItemButton>
                )
            }

        </List >


        // <div class="chatList">
        //     <ul>

        //         {charts.map((item) => <li>{item.name}</li>)}
        //     </ul>
        // </div>
    )
}