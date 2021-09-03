import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import React from "react";

const ChoiceBar: React.FC = () => {
  return (
    <Fade in={true}>
      <Paper className="d-flex justify-content-around">
        <Button color="primary" variant="contained">
          Option A
        </Button>
        <Button color="primary">Option B</Button>
      </Paper>
    </Fade>
  );
};

export default ChoiceBar;
