package checkpoint1;


import org.apache.log4j.Logger;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;


public class FilialDaoH2 implements IDao1<Filial>{

    private ConfigJDBC configJDBC;
    final static Logger log = Logger.getLogger(FilialDaoH2.class);

    public FilialDaoH2(ConfigJDBC configJDBC) {
        this.configJDBC = configJDBC;
    }

    @Override
    public Filial salvar(Filial filial){
        log.info("Registrando uma nova filial: "+filial.toString());
        Connection connection = configJDBC.conectarComBancoDeDados();
        Statement statement = null;
        String query = String.format("INSERT INTO filiais(nome,rua,numero,cidade,estado,e5estrelas)" +
                "values ('%s','%s','%s','%s','%s','%s')",
                filial.getNome(),filial.getRua(),filial.getNumero(),filial.getCidade(),filial.getEstado(),filial.getE5Estrelas());

        try {
            statement = connection.createStatement();
            statement.executeUpdate(query, Statement.RETURN_GENERATED_KEYS);
            ResultSet keys = statement.getGeneratedKeys();

            if(keys.next()){
                filial.setId(keys.getInt(1));
                log.info("Registro concluido!");
                statement.close();
                connection.close();
            }
        }catch (SQLException e){
            e.printStackTrace();
        }
        return filial;
    }
}
