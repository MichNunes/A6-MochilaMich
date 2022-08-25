package com.dh.clinica_odontologica;

import java.util.List;

public interface IDao<T>{

    //List<Usuario> listaUsuarios();

    T salvar(T t);
    List<T> buscarTodos();
    T deletar(String t);
}
