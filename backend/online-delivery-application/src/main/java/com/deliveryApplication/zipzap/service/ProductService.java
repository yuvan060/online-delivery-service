package com.deliveryApplication.zipzap.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.deliveryApplication.zipzap.entity.Product;
import com.deliveryApplication.zipzap.repository.CustomerRepository;
import com.deliveryApplication.zipzap.repository.ProductRepository;
import com.deliveryApplication.zipzap.repository.ShopOwnerRepository;


@Service
public class ProductService {
	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private ShopOwnerRepository shopOwnerRepository;
	
	public List<Product> getAllProducts(){
		return productRepository.findAll();
	}
	
	public Optional<Product> getProductsByCategory(String category){
		return productRepository.findByCategory(category);
	}
	
	public List<Product> getProductsByShopOwner(String email){
		return shopOwnerRepository.findByUserEmail(email).getProducts();
	}
	
}
