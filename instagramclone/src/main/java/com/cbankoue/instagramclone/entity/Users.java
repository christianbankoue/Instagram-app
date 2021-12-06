package com.cbankoue.instagramclone.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Users {
	
	@Id
	@GeneratedValue
	private Long id;
	
	private Long userid;
	
	private String username;
	
	private String name;
	
	private String profileImage;
}
