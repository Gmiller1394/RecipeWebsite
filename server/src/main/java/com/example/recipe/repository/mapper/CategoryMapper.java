package com.example.recipe.repository.mapper;

import java.io.Serializable;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.example.recipe.model.Category;

public class CategoryMapper implements RowMapper<Category>, Serializable
{
	@Override
	public Category mapRow(ResultSet resultSet, int i) throws SQLException {
		Category category = new Category();
		category.setCategory(resultSet.getString("CATEGORY"));
		return category;
	}
}
