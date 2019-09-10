package com.User;

import com.Wallet.Wallet;
import com.error.RecordNotFoundException;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
@RequiredArgsConstructor
public class UserDAO {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final ModelMapper modelMapper;

    public boolean isEmailExists(String email) {
        return userRepository.findUserByEmail(email).isPresent();
    }

    public User createUser(String firstName, String lastName, String password, String email) {
        User user = new User.Builder()
                .firstName(firstName)
                .lastName(lastName)
                .password(bCryptPasswordEncoder.encode(password))
                .email(email)
                .wallets(new ArrayList<Wallet>())
                .build();
        return userRepository.save(user);
    }

    public User findUserByEmail(String email) {
        return userRepository.findUserByEmail(email).orElseThrow(() -> new RecordNotFoundException("User not found"));
    }

    public UserDTO convertToDto(User user){
        UserDTO userDTO = modelMapper.map(user, UserDTO.class);
        return userDTO;
    }
}
