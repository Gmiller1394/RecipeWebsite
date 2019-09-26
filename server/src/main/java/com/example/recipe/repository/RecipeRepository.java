package com.example.recipe.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import com.example.recipe.model.Recipe;
import com.example.recipe.repository.mapper.RecipeMapper;

@Repository
public class RecipeRepository
{
	@Autowired
	private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

	private static final String CATEGORY_ID = "categoryId";

	public List<Recipe> getRecipe(int categoryId){
		MapSqlParameterSource params = new MapSqlParameterSource();
		params.addValue(CATEGORY_ID, categoryId);

		String sql ="SELECT ID, RECIPE_NAME, INGREDIENT_LIST_ID, DATE_ADDED,"
				+ "FIRST_NAME, LAST_NAME, DIRECTION_LIST_ID, TIME_MINUTES"
				+ " FROM RECIPE WHERE CATEGORY_ID = :" + CATEGORY_ID;
		return namedParameterJdbcTemplate.query(sql, params, new RecipeMapper());
	}
}
