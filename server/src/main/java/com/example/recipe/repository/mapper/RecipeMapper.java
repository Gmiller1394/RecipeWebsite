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
		recipe.setIngedientListId(resultSet.getInt("DATE_ADDED"));
		recipe.setDate(resultSet.getDate("FIRST_NAME"));
		recipe.setFirstName(resultSet.getString("LAST_NAME"));
		recipe.setLastName(resultSet.getString("DIRECTION_LIST_ID"));
		recipe.setDirectionListId(resultSet.getInt("TIME_MINUTES"));
		recipe.setCookTime(resultSet.getInt("CATEGORY_ID"));
		return recipe;
	}
}