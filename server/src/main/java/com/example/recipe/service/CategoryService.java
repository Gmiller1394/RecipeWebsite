package com.example.recipe.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.recipe.model.Category;
import com.example.recipe.repository.CategoryRepository;

@Service
public class CategoryService
{
	@Autowired
	private CategoryRepository categoryRepository;

	public List<Category> getCategoryList(){
		List<Category> categoryList = categoryRepository.getCategories();
		return categoryList;
	}
}
