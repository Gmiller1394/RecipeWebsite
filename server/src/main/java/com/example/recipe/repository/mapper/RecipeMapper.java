package com.example.recipe.repository.mapper;

import java.io.Serializable;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.example.recipe.model.Recipe;
import org.springframework.jdbc.core.RowMapper;

public class RecipeMapper implements RowMapper<Recipe>, Serializable
{
	@Override
	public Recipe mapRow(ResultSet resultSet, int i) throws SQLException
	{
		Recipe recipe = new Recipe();
		recipe.setId(resultSet.getInt("ID"));
		recipe.setRecipeName(resultSet.getString("RECIPE_NAME"));
		recipe.setIngedientListId(resultSet.getInt("INGREDIENT_LIST_ID"));
		recipe.setDate(resultSet.getDate("DATE_ADDED"));
		recipe.setFirstName(resultSet.getString("FIRST_NAME"));
		recipe.setLastName(resultSet.getString("LAST_NAME"));
		recipe.setDirectionListId(resultSet.getInt("DIRECTION_LIST_ID"));
		recipe.setCookTime(resultSet.getInt("TIME_MINUTES"));
		return recipe;
	}
}