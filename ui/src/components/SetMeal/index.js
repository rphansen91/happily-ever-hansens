import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Fish from "./Fish";
import FishActive from "./FishActive";
import Steak from "./Steak";
import SteakActive from "./SteakActive";
import Vegetables from "./Vegetables";
import VegetablesActive from "./VegetablesActive";
import withSetMealMutation from "../../mutations/SetMealMutation";

const meals = {
  Steak: "Steak",
  Salmon: "Salmon",
  Vegetarian: "Vegetarian"
};

export default withSetMealMutation(({ value, setMeal }) => (
  <div>
    <FormControlLabel
      control={
        <Checkbox
          onChange={() => setMeal(meals.Steak)}
          icon={<Steak />}
          checkedIcon={<SteakActive />}
          value="checkedSteak"
          checked={value === meals.Steak}
        />
      }
      label="Tri Tip"
    />
    <FormControlLabel
      control={
        <Checkbox
          icon={<Fish />}
          checkedIcon={<FishActive />}
          onChange={() => setMeal(meals.Salmon)}
          value="checkedSalmon"
          checked={value === meals.Salmon}
        />
      }
      label="Salmon"
    />
    <FormControlLabel
      control={
        <Checkbox
          icon={<Vegetables />}
          checkedIcon={<VegetablesActive />}
          onChange={() => setMeal(meals.Vegetarian)}
          value="checkedVegetarian"
          checked={value === meals.Vegetarian}
        />
      }
      label="Vegetarian"
    />
  </div>
));
