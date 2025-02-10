import PropTypes from "prop-types";

import { Grid, CircularProgress } from "@mui/material";
import { Recipe } from "./Recipe";


export const ListRecipes = ({
  recipes,
  loading,
}) => {
  if (loading) {
    return <CircularProgress sx={{ display: "block", margin: "auto", mt: 4 }} />;
  }

  return (
    <Grid container spacing={2} justifyContent="center" sx={{ p: 4 }}>
      {recipes.map(recipe => (
        <Grid item key={recipe.id} xs={12} sm={6} md={4}>
          <Recipe recipe={recipe} />
        </Grid>
      ))}
    </Grid>
  );
};


ListRecipes.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};