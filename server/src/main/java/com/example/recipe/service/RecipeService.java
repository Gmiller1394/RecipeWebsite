package com.example.recipe.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.recipe.model.Recipe;
import com.example.recipe.repository.RecipeRepository;

@Service
public class RecipeService
{
	@Autowired
	private RecipeRepository recipeRepository;

	public List<Recipe> getRecipeList(int categoryId){
		List<Recipe> recipeList = recipeRepository.getRecipe(categoryId);
		return recipeList;
	}
}
