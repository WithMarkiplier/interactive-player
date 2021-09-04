import React from "react";
import { useAppContext } from "../../src/hooks";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { choiceGroupData } from "../../src/data/data";

const Endings: React.FC = () => {
  const { endings: eIds } = useAppContext();

  const endings = choiceGroupData.filter(
    (x) => x.type === "end" && eIds.includes(x.ending.endingNumber)
  );

  return (
    <div>
      <Typography variant="h3" className="text-center mb-3">
        Discovered endings
      </Typography>
      <div className="row px-2">
        {endings.map((x, i) => (
          <div
            key={`ending-card-${x.ending.endingNumber}`}
            className="col-12 col-md-4 px-2 py-2"
          >
            <Card variant="outlined" className="py-3">
              <div className="endingGridContainer">
                <div className="endingNumber">
                  <Typography variant="h4">#{x.ending.endingNumber}</Typography>
                </div>
                <div className="endingName">
                  <Typography variant="h6">{x.ending.endingName}</Typography>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Endings;
