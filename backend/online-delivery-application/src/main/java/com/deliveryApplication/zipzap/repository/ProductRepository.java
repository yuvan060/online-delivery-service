package com.deliveryApplication.zipzap.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.deliveryApplication.zipzap.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
	Optional<Product> findByCategory(String caterogy);
	List<Product> findByShopId(Long shopId);
}




