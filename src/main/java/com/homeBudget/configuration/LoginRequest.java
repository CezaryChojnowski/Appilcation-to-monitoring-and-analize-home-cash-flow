package com.homeBudget.configuration;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class LoginRequest {

    @NotBlank(message = "Username cannot be blank")
    private String email;
    @NotBlank(message = "Password cannot be blank")
    private String password;
}
