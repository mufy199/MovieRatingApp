import React from "react";
import { Link } from "react-router-dom";
import { Card, Grid } from "semantic-ui-react";
import "../../App.css";
function ColumnDisplay(props) {
  const data = props.data;
  const displayType = props.displayType;
  return (
    <Grid
      columns={3}
      stackable
      centered
      verticalAlign="top"
      padded="horizontally"
      style={{ padding: 90 }}
    >
      {data.map((item) => (
        <Grid.Column key={item.id}>
          <Link to={`/${displayType === "movies" ? "movie": "tvshow"}/${item.id}`}>
            <Card
              fluid
              image={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              header={displayType === "movies" ? item.title : item.name}
              meta={`Release Date: ${item.release_date} | Rating: ${item.vote_average}`}
              description={item.overview.slice(0, 350) + "..."}
            />
          </Link>
        </Grid.Column>
      ))}
    </Grid>
  );
}

export default ColumnDisplay;
