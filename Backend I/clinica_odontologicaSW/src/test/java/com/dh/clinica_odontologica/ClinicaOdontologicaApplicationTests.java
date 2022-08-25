package com.dh.clinica_odontologica;

import com.dh.clinica_odontologica.model.Usuario;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;

import java.util.List;

@SpringBootTest
class ClinicaOdontologicaApplicationTests {

	UsuarioServices usuarioService;

	@BeforeEach
	void doBefore(){
		usuarioService = new UsuarioServices(new UsuarioDaoH2(new ConJDBC()));
	}

	@Test
	@Disabled
	void testeSalvar(){
		Usuario usuario1 = new Usuario("Issao","Issao1@gmail.com","Issao1","U");
		usuarioService.salvar(usuario1);
		Assert.isTrue(usuario1.getId()!=null,"Teste do ID usuario!");
	}

	@Test
	@Disabled
	void buscarTodos(){
		List<Usuario> usuarioList;
		usuarioList = usuarioService.buscarTodos();
		usuarioList.forEach((n) -> System.out.println(n.toString()));
	}

	@Test
	@Disabled
	void deletarUsuario(){
		Usuario usuario = usuarioService.deletar("Issao1@gmail.com");
		Assert.isTrue(usuario.getNome().equals("deletado"));
	}
}
