import React from 'react';
import { Text, View } from 'react-native';
import Botao from '../Botao';
import estilos from './estilos'
export default function StatusCarrinho({ total }) {
	return (
		<View style={estilos.conteudo}>
			<View style={estilos.total}>
				<Text stylle={estilos.descricao}>Total do Carrinho</Text>
				<Text stylle={estilos.valor}>
					{
						Intl.NumberFormat('pt-BR', {
							style: 'currency', currency: 'BRL'
						}).format(total)
					}
				</Text>
			</View>
			<View style={estilos.botao}>
				<Botao valor="Concluir Pedido" invertido />
			</View>
		</View>
	)
}