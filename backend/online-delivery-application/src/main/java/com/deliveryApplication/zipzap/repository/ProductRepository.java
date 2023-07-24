package com.deliveryApplication.zipzap.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.deliveryApplication.zipzap.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}




