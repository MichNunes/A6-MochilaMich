package com.dh.mesa_springWeb.service.impl;

import com.dh.mesa_springWeb.model.Veiculo;
import com.dh.mesa_springWeb.service.VeiculoService;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class VeiculoServiceImpl implements VeiculoService {

    @Override
    public List<Veiculo> listVeiculo() {
        return Arrays.asList(new Veiculo("Fiat", "Azul"), new Veiculo("Toyota", "Preto"));
    }
}
