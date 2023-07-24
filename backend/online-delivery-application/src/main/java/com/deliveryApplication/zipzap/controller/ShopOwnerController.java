package com.deliveryApplication.zipzap.controller;

import com.deliveryApplication.zipzap.entity.ShopOwner;
import com.deliveryApplication.zipzap.service.ShopOwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/shop-owners")
public class ShopOwnerController {
	@Autowired
    private  ShopOwnerService shopOwnerService;


    @GetMapping("/{email}")
    public ShopOwner getShopOwnerByEmail(@PathVariable String email) {
        return shopOwnerService.getShopOwnerByEmail(email);
    }
}
