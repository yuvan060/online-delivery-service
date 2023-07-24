package com.deliveryApplication.zipzap.service;

import com.deliveryApplication.zipzap.entity.Customer;
import com.deliveryApplication.zipzap.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {
	@Autowired
    private CustomerRepository customerRepository;

    public Customer getCustomerByEmail(String email) {
        return customerRepository.findByUserEmail(email);
    }
}
