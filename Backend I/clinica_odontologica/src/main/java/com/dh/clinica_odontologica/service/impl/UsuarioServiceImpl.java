package com.dh.clinica_odontologica.service.impl;

import com.dh.clinica_odontologica.UsuarioServices;
import com.dh.clinica_odontologica.ConJDBC;
import com.dh.clinica_odontologica.model.Usuario;
import com.dh.clinica_odontologica.UsuarioDaoH2;
import com.dh.clinica_odontologica.service.UsuarioService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioServiceImpl implements UsuarioService {
    UsuarioServices usuarioService = new UsuarioServices(new UsuarioDaoH2(new ConJDBC()));

    @Override
    public List<Usuario> allUsuarios() {
        return usuarioService.buscarTodos();
    }
}
