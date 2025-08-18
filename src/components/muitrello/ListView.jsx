// src/components/ListView.jsx
// src/components/ListView.jsx

import React from "react";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  IconButton,
  Divider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const dummyData = [
  {
    listTitle: "To Do",
    cards: ["Setup project", "Create UI layout", "Install dependencies"],
  },
  {
    listTitle: "In Progress",
    cards: ["Build drag-and-drop", "Add routing"],
  },
  {
    listTitle: "Done",
    cards: ["Create repo", "Write README"],
  },
];

const ListView = ({ addActivity }) => {
  return (
    <Box sx={{ px: 2, py: 3 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
        List View
      </Typography>

      {dummyData.map((list, index) => (
        <Paper
          key={index}
          sx={{
            mb: 3,
            p: 2,
            borderLeft: "6px solid #3f51b5",
            borderRadius: 2,
            boxShadow: 2,
          }}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">{list.listTitle}</Typography>
            <Box>
              <IconButton color="primary" onClick={() => addActivity(`Added card to ${list.listTitle}`)}>
                <AddIcon />
              </IconButton>
              <IconButton color="warning">
                <EditIcon />
              </IconButton>
              <IconButton color="error">
                <DeleteIcon />
              </IconButton>
            </Box>
          </Box>

          <Divider sx={{ my: 1 }} />

          <List dense>
            {list.cards.map((card, i) => (
              <ListItem
                key={i}
                sx={{
                  px: 1,
                  py: 0.5,
                  backgroundColor: "#f5f5f5",
                  mb: 1,
                  borderRadius: 1,
                }}
              >
                <ListItemText primary={card} />
              </ListItem>
            ))}
          </List>
        </Paper>
      ))}
    </Box>
  );
};

export default ListView;
