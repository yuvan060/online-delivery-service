package com.deliveryApplication.zipzap.service;

import com.deliveryApplication.zipzap.entity.Product;
import com.deliveryApplication.zipzap.entity.ShopOwner;
import com.deliveryApplication.zipzap.repository.ProductRepository;
import com.deliveryApplication.zipzap.repository.ShopOwnerRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ShopOwnerService {
	@Autowired
    private ShopOwnerRepository shopOwnerRepository;
	
	@Autowired
	private ProductRepository productRepository;
	
	
    public ShopOwner getShopOwnerByEmail(String email) {
        return shopOwnerRepository.findByUserEmail(email);
    }
    
    public ResponseEntity<?> createProduct(Product product, String email) {
    	ShopOwner owner = shopOwnerRepository.findByUserEmail(email);
    	product.setShopId(owner.getId());
    	productRepository.save(product);
    	owner.getProducts().add(product);
    	return ResponseEntity.ok("Product created successfully");
    }
    
    public List<Product> getProductsByShop(String email) {
    	ShopOwner owner = shopOwnerRepository.findByUserEmail(email);
    	return productRepository.findByShopId(owner.getId());
    }
}
