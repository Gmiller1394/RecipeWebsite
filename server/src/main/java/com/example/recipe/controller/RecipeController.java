package com.example.recipe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.recipe.model.Recipe;
import com.example.recipe.service.RecipeService;

@RestController
@RequestMapping("/api/services/")
public class RecipeController
{
	@Autowired
	private RecipeService recipeService;

	@GetMapping(value = "/categories/{categoryId}", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Recipe> getRecipes(@PathVariable int categoryId){
		List<Recipe> recipeList = recipeService.getRecipeList(categoryId);
		return recipeList;
	}
}
