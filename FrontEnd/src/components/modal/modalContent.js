import * as React from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import ItemsList from "./itemsList";
const style = {
  display: "flex",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  width: "715px",
};

const paperStyle = {
  width: "fit-content",
  height: "100px",
};

export default function ModalContent(props) {
  const [mosaicDisplay, setMosaicDisplay] = React.useState(false);
  const [selection, setSelection] = React.useState("");
  const [filteredOptions, setFilteredOptions] = React.useState([
    "comics",
    "events",
    "stories",
    "characters",
  ]);
  const filterEmptyOptions = () => {
    let options = [...filteredOptions];

    for (let i = 0; i < options.length; i++) {
      if (
        !props.item[options[i]] ||
        props.item[options[i]].items.length === 0
      ) {
        options.splice(i, 1);
        i--;
      }
    }

    return [...options];
  };

  React.useEffect(() => {
    setFilteredOptions(filterEmptyOptions());
  }, []);

  const changeDisplay = (selection) => {
    setSelection(selection);
  };

  const displayMosaic = () => {
    setMosaicDisplay(!mosaicDisplay);
  };

  return (
    <>
      <Box sx={{ ...style }}>
        <Card sx={{ maxWidth: 345 }}>
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
        </Card>
        <Box
          sx={{
            display: "flex",
            gap: 4,
            paddingLeft: 3.75,
            width: "50%",
            flexDirection: "row",
            flexWrap: "wrap",
            height: "500px",
            overflowY: "scroll",
          }}
        >
          {mosaicDisplay ? (
            <>
              <Button onClick={() => setMosaicDisplay(false)}>Go Back</Button>
              <ItemsList items={props.item[selection].items} />
            </>
          ) : (
            <>
              {filteredOptions.map((option) => {
                return (
                  <Card sx={{ ...paperStyle }}>
                    <CardActionArea
                      sx={{ height: "100%" }}
                      onClick={() => {
                        changeDisplay(option);
                        displayMosaic();
                      }}
                    >
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {option}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                );
              })}
            </>
          )}
        </Box>
      </Box>
    </>
  );
}
