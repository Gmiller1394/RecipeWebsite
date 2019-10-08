package com.example.recipe.model;

import java.util.Date;

public class Recipe
{
	private Integer id;
	private String recipeName;
	private Integer ingedientListId;
	private Date date;
	private String firstName;
	private String lastName;
	private Integer directionListId;
	private Integer cookTime;

	public Integer getId()
	{
		return id;
	}

	public void setId(Integer id)
	{
		this.id = id;
	}

	public String getRecipeName()
	{
		return recipeName;
	}

	public void setRecipeName(String recipeName)
	{
		this.recipeName = recipeName;
	}

	public Integer getIngedientListId()
	{
		return ingedientListId;
	}

	public void setIngedientListId(Integer ingedientListId)
	{
		this.ingedientListId = ingedientListId;
	}

	public Date getDate()
	{
		return date;
	}

	public void setDate(Date date)
	{
		this.date = date;
	}

	public String getFirstName()
	{
		return firstName;
	}

	public void setFirstName(String firstName)
	{
		this.firstName = firstName;
	}

	public String getLastName()
	{
		return lastName;
	}

	public void setLastName(String lastName)
	{
		this.lastName = lastName;
	}

	public Integer getDirectionListId()
	{
		return directionListId;
	}

	public void setDirectionListId(Integer directionListId)
	{
		this.directionListId = directionListId;
	}

	public Integer getCookTime()
	{
		return cookTime;
	}

	public void setCookTime(Integer cookTime)
	{
		this.cookTime = cookTime;
	}
}
