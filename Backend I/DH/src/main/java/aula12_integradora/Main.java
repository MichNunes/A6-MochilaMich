package aula12_integradora;

import org.apache.log4j.Logger;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;


public class Main {

    private static final String sqlCreateTable = "DROP TABLE IF EXISTS Usuario;CREATE TABLE Usuario"
            +"("
            +"id INT PRIMARY KEY,"
            +"Primeiro_Nome varchar(100) NOT NULL,"
            +"Sobrenome varchar(100) NOT NULL,"
            +"Idade INT NOT NULL"
            +")";

    private static final String sqlInsert1 = "INSERT INTO Usuario(id,Primeiro_Nome,Sobrenome,Idade)" +
            "Values (1, 'Maria','Almeida',50)";
    private static final String sqlInsert2 = "INSERT INTO Usuario(id,Primeiro_Nome,Sobrenome,Idade)" +
            "Values (2, 'Marco','Cleiton',30)";
    private static final String sqlInsert3 = "INSERT INTO Usuario(id,Primeiro_Nome,Sobrenome,Idade)" +
            "Values (3, 'Zé','Silva',40)";


    private static final String sqlDelete = "DELETE FROM Usuario WHERE id=2";

    private static final Logger logger = Logger.getLogger(Main.class);

    public static void main(String[] args) throws Exception{

        Connection connection = null;

        try {
            connection = getConnectionInstance();
            Statement statement = connection.createStatement();

            statement.execute(sqlCreateTable);
            statement.execute(sqlInsert1);
            statement.execute(sqlInsert2);
            statement.execute(sqlInsert3);

            statement.execute(sqlDelete);

            logger.info("Excluido o usúario de ID = 2");
        } catch (Exception e){
            e.printStackTrace();
        }finally {
            if(connection==null){
                return;
            }
            connection.close();
        }
    }

    public static Connection getConnectionInstance() throws Exception{

        Class.forName("org.h2.Driver").newInstance();
        return DriverManager.getConnection("jdbc:h2:~/test","sa","");
    }
}
