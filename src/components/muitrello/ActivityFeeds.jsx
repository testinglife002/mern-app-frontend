// src/components/ActivityFeeds.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Modal,
  Button,
  useMediaQuery,
  Tabs,
  Tab,
  Paper,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HistoryIcon from "@mui/icons-material/History";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import ViewListIcon from "@mui/icons-material/ViewList";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

const dummyActivities = [
  { id: 1, message: "Card 'Design UI' added to List 'Todo'", type: "card" },
  { id: 2, message: "List 'In Progress' created", type: "list" },
  { id: 3, message: "Card 'Refactor Code' moved to 'Done'", type: "move" },
];

const ActivityFeeds = () => {
  const [openModal, setOpenModal] = useState(false);
  const [tab, setTab] = useState(0);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleModalToggle = () => setOpenModal(!openModal);

  return (
    <Box
      sx={{
        p: 2,
        background: "#f9f9f9",
        borderRadius: 2,
        boxShadow: 3,
        mt: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Typography variant="h6" fontWeight="bold" color="primary">
          Activity & Notifications
        </Typography>

        <Box>
          <IconButton onClick={handleModalToggle} title="Toggle View">
            {tab === 0 ? <ViewListIcon /> : <ViewKanbanIcon />}
          </IconButton>
          <IconButton color="primary" onClick={handleModalToggle}>
            <NotificationsIcon />
          </IconButton>
        </Box>
      </Box>

      <Divider />

      <Tabs
        value={tab}
        onChange={(e, newValue) => setTab(newValue)}
        indicatorColor="primary"
        textColor="primary"
        sx={{ mt: 1 }}
        variant={isMobile ? "scrollable" : "standard"}
      >
        <Tab label="Activity Feed" />
        <Tab label="Notifications" />
      </Tabs>

      <Box mt={2}>
        <List>
          {dummyActivities.map((activity) => (
            <ListItem
              key={activity.id}
              sx={{
                backgroundColor: "#ffffff",
                mb: 1,
                borderRadius: 2,
                boxShadow: 1,
              }}
              secondaryAction={
                <Box>
                  <IconButton edge="end" aria-label="edit" size="small">
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete" size="small">
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
              }
            >
              <ListItemIcon>
                <CheckCircleIcon color="success" />
              </ListItemIcon>
              <ListItemText primary={activity.message} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Modal for toggling board/list */}
      <Modal open={openModal} onClose={handleModalToggle}>
        <Paper
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: isMobile ? "90%" : 400,
            p: 3,
            borderRadius: 2,
            boxShadow: 24,
          }}
        >
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h6">Switch Board View</Typography>
            <IconButton onClick={handleModalToggle}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box mt={2}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mb: 2 }}
              startIcon={<ViewKanbanIcon />}
            >
              Kanban View
            </Button>
            <Button
              fullWidth
              variant="outlined"
              color="secondary"
              startIcon={<ViewListIcon />}
            >
              List View
            </Button>
          </Box>
        </Paper>
      </Modal>
    </Box>
  );
};

export default ActivityFeeds;
