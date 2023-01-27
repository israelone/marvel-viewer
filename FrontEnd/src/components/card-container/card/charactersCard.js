import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Modal from "@mui/material/Modal";
import ModalContent from "../../modal/modalContent";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ActionAreaCard(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const item = React.useRef(props.item);
  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "flex",
        justifySelf: "center",
        marginTop: "20px",
      }}
    >
      <CardActionArea onClick={handleOpen}>
        <CardMedia
          component="img"
          height="500"
          image={
            props.item.thumbnail.path +
            "/portrait_uncanny." +
            props.item.thumbnail.extension
          }
          alt={props.item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.item.description
              ? props.item.description
              : "No Description Available"}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <h3>{props.item}</h3> */}
        <div>
          <ModalContent item={props.item} />
        </div>
      </Modal>
    </Card>
  );
}
