package com.example.recipe.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.example.recipe.model.Category;
import com.example.recipe.repository.mapper.CategoryMapper;

@Repository
public class CategoryRepository
{
	@Autowired
	private JdbcTemplate jdbcTemplate;

	public List<Category> getCategories(){
		String sql = "SELECT DISTINCT CATEGORY FROM "
				+ "CATEGORY ORDER BY CATEGORY ASC";
		return jdbcTemplate.query(sql, new CategoryMapper());
	}
}
