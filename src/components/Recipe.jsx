import { PropTypes } from "prop-types";
import { Card, CardContent, Typography, AspectRatio } from "@mui/joy";


const styles = {
  root: {
    maxWidth: 300,
    m: 2,
    p: 2,
    boxShadow: 3
  }
};

export const Recipe = ({
  recipe
}) => {
  return (
    <Card sx={styles.root}>
      <AspectRatio minHeight="300px" maxHeight="300px">
        <img
          src={recipe.imageUrl}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent>
        <Typography variant="h6" component="div">{recipe.name}</Typography>
        <Typography variant="body2" color="text.secondary">{recipe.description}</Typography>
        <Typography variant="body2"><strong>Niveau:</strong> {recipe.level}</Typography>
        <Typography variant="body2"><strong>Durée:</strong> {recipe.duration} min</Typography>
        <Typography variant="body2"><strong>Ingrédients:</strong> {recipe.ingredients.join(", ")}</Typography>
        <Typography variant="caption" color="text.secondary">Créé le {new Date(recipe.createdAt).toLocaleDateString()}</Typography>
      </CardContent>
    </Card>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};
