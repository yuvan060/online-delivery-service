package com.deliveryApplication.zipzap.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.deliveryApplication.zipzap.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
