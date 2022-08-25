package com.dh.clinica_odontologica;


import com.dh.clinica_odontologica.model.Usuario;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class UsuarioDaoH2 implements IDao<Usuario>{

    private ConJDBC conJDBC;

    public UsuarioDaoH2(ConJDBC conJDBC){
        this.conJDBC = conJDBC;
    }

    @Override
    public Usuario salvar(Usuario usuario) {
        System.out.println("Registrando um novo usuario= " +usuario.getNome());
        Connection connection = conJDBC.connectarComBD();
        Statement statement = null;

        String query = String.format("INSERT INTO usuariosClinicaOdontologica(nome,email,senha,nivelAcesso)" +
                "values ('%s','%s','%s','%s')",
                usuario.getNome(),usuario.getEmail(),usuario.getSenha(),usuario.getNivelAcesso());

        try {
            statement = connection.createStatement();
            statement.executeUpdate(query,Statement.RETURN_GENERATED_KEYS);
            ResultSet keys = statement.getGeneratedKeys();

            if (keys.next()){
                usuario.setId(keys.getInt(1));
                System.out.println("Usuario cadastrado com sucesso");
                statement.close();
                connection.close();
            }
        } catch (SQLException e){
            e.printStackTrace();
        }
        return usuario;
    }

    @Override
    public List<Usuario> buscarTodos() {
        System.out.println("Buscando todos os usuarios");

        Connection connection = conJDBC.connectarComBD();
        Statement statement = null;

        String query = "SELECT nome,email,nivelAcesso from usuariosClinicaOdontologica";

        List<Usuario> usuarioList = new ArrayList<>();

        try {
            statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(query);

            while (resultSet.next()){
                System.out.println("Usúario encontrado no BD");
                Usuario usuario = new Usuario(resultSet.getString("nome"),resultSet.getString("email"),"",resultSet.getString("nivelAcesso"));
                usuarioList.add(usuario);
            }

            statement.close();
        } catch (SQLException throwables){
            throwables.printStackTrace();
        }
        return usuarioList;
    }

    @Override
    public Usuario deletar(String email) {
        System.out.println("Deletando usuario com email= "+email);

        Connection connection = conJDBC.connectarComBD();
        Statement statement = null;
        String query = String.format("DELETE FROM usuariosClinicaOdontologica WHERE email = '%s'",email);

        Usuario usuario = null;

        try {
            statement = connection.createStatement();
            int resultSet = statement.executeUpdate(query);
            usuario = new Usuario("deletado","","","");
            System.out.println("Usuario deletado do BD");
        } catch (SQLException throwables){
            throwables.printStackTrace();
        }
        return usuario;
    }
}
