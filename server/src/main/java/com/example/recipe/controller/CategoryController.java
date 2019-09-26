package com.example.recipe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.recipe.model.Category;
import com.example.recipe.service.CategoryService;

@RestController
@RequestMapping("/api/services/")
public class CategoryController
{
	@Autowired
	private CategoryService categoryService;

	@GetMapping(value = "/categories", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Category> getCategories(){
		List<Category> categoryList = categoryService.getCategoryList();
		return categoryList;
	}





}
