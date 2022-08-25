package com.dh.clinica_odontologica;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConJDBC {

    private String jdbcDriver;
    private String dbUrl;
    private String nomeUsuario;
    private String senha;

    public ConJDBC(String jdbcDriver, String dbUrl, String nomeUsuario, String senha) {
        this.jdbcDriver = jdbcDriver;
        this.dbUrl = dbUrl;
        this.nomeUsuario = nomeUsuario;
        this.senha = senha;
    }

    public ConJDBC() {
        this.jdbcDriver = "org.h2.Driver";
        this.dbUrl = "jdbc:h2:~/test;DB_CLOSE_DELAY=-1;INIT=RUNSCRIPT FROM './src/main/usuariosClinicaOdontologica.sql'";
        this.nomeUsuario = "sa";
        this.senha = "";
    }

    public Connection connectarComBD(){

        Connection connection = null;

        try {
            connection = DriverManager.getConnection(dbUrl,nomeUsuario,senha);
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }

        return connection;
    }
}
