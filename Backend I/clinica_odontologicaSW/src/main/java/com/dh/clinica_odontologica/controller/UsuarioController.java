package com.dh.clinica_odontologica.controller;

import com.dh.clinica_odontologica.model.Usuario;
import com.dh.clinica_odontologica.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/listausuariosclinicaodontologica")
public class UsuarioController {

    private final UsuarioService usuarioService;

    @Autowired
    public UsuarioController(UsuarioService usuarioService){
        this.usuarioService = usuarioService;
    }

    @GetMapping
    public List<Usuario> allUsuarios(){
        return usuarioService.allUsuarios();
    }
}
