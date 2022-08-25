package com.dh.clinica_odontologica;

import com.dh.clinica_odontologica.model.Usuario;

import java.util.List;


public class UsuarioServices {

    private IDao<Usuario> usuarioIDao;

    public UsuarioServices(IDao<Usuario> usuarioIdao){
        this.usuarioIDao = usuarioIdao;
    }

    public Usuario salvar(Usuario usuario){
        return usuarioIDao.salvar(usuario);
    }

    public List<Usuario> buscarTodos(){
        return usuarioIDao.buscarTodos();
    }

    public Usuario deletar(String email){
        return usuarioIDao.deletar(email);
    }
}
