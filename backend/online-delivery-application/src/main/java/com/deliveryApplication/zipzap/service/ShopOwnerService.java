package com.deliveryApplication.zipzap.service;

import com.deliveryApplication.zipzap.entity.ShopOwner;
import com.deliveryApplication.zipzap.repository.ShopOwnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ShopOwnerService {
	@Autowired
    private ShopOwnerRepository shopOwnerRepository;

    public ShopOwner getShopOwnerByEmail(String email) {
        return shopOwnerRepository.findByUserEmail(email);
    }
}
