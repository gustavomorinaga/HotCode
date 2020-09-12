import React from 'react';
import { Link } from 'react-router-dom';

import AlertSVG from '../../assets/images/icons/alert.svg';

import './styles.css';

function Erro() {
	return (
		<div className="container">
			<main className="error">
				<section data-aos="zoom-in" data-aos-anchor-placement="top-bottom">
					<img src={AlertSVG} alt="ícone de alerta" />
					<h1>Erro 404</h1>
					<p>
						Oops, essa página não existe! Aperte o botão abaixo para retornar ao site.
					</p>
				</section>
				<Link
					data-aos="fade-up"
					data-aos-anchor-placement="top-bottom"
					to="/"
					className="button-voltar"
				>
					Voltar ao site
				</Link>
			</main>
		</div>
	);
}

export default Erro;
