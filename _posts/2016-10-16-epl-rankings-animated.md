---
layout: post
title: "Animating CS:GO EPL S4 Rankings, Week by Week"
description: ""
category: programming
tags: [javascript, js, web, svg, programming]
css: epl-rankings-s4
javascript: epl-rankings-s4
---

These graphs below are essentially "high-low" charts. The top of each line is the *maximum* the team could win (if they won every game from that point in time until the end of the tournament). The bottom is the *minimum* (if they lost every game in the future), and the circle is their *expected wins*, calculated based solely on the assumption that they'll keep on winning at the same rate they have won already.s

<div class="rankings-wrapper" id="eu">
	<h3>EU EPL Rankings</h3>
	<div>
		<ul>
			<li class="play">PLAY <i class="glyphicon glyphicon-play"></i></li>
			<li weeknum="0" class="active">week 0</li>
			<li weeknum="1">week 1</li>
			<li weeknum="2">week 2</li>
			<li weeknum="3">week 3</li>
			<li weeknum="4">week 4</li>
			<li weeknum="5">week 5</li>
			<li weeknum="6">week 6</li>
			<li weeknum="7">week 7</li>
			<li weeknum="8">week 8</li>
			<li weeknum="9">week 9</li>
		</ul>

		<svg viewbox="-2 -1 60 40">
			<text x="-2" y="1">26</text>
			<text x="-2" y="14">13</text>
			<line x1="-2" x2="70" y1="13" y2="13" style="stroke-width:.1" stroke="#777" />
			<line x1="-2" x2="70" y1="0" y2="0" style="stroke-width:.1" stroke="#777" />
			<line x1="-2" x2="70" y1="26" y2="26" style="stroke-width:.1" stroke="#777" />

			<g id="ninjasinpyjamas">
				<text class="teamName" transform="translate(0,28)rotate(60)">Ninjas in Pyjamas</text>
				<line class="bar" x1="0" x2="0" y1="0" y2="26" style="stroke-width:.25" stroke="#6c5942">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="max" x1="-0.4" x2="0.4" y1="0" y2="0" style="stroke-width:.25" stroke="#6c5942">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="min" x1="-0.4" x2="0.4" y1="26" y2="26" style="stroke-width:.25" stroke="#6c5942">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<circle class="expected" cx="0" cy="13" r="0.4" stroke="#6c5942" stroke-width=".2" fill="white">
					<animate class="cy" attributeName="cy" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</circle>
			</g>


			<g id="fnatic">
				<text class="teamName" transform="translate(4,28)rotate(60)">Fnatic</text>
				<line class="bar" x1="4" x2="4" y1="0" y2="26" style="stroke-width:.25" stroke="#f19e33">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="max" x1="3.6" x2="4.4" y1="0" y2="0" style="stroke-width:.25" stroke="#f19e33">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="min" x1="3.6" x2="4.4" y1="26" y2="26" style="stroke-width:.25" stroke="#f19e33">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<circle class="expected" cx="4" cy="13" r="0.4" stroke="#f19e33" stroke-width=".2" fill="white">
					<animate class="cy" attributeName="cy" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</circle>
			</g>


			<g id="mousesports">
				<text class="teamName" transform="translate(8,28)rotate(60)">Mousesports</text>
				<line class="bar" x1="8" x2="8" y1="0" y2="26" style="stroke-width:.25" stroke="#b31238">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="max" x1="7.6" x2="8.4" y1="0" y2="0" style="stroke-width:.25" stroke="#b31238">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="min" x1="7.6" x2="8.4" y1="26" y2="26" style="stroke-width:.25" stroke="#b31238">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<circle class="expected" cx="8" cy="13" r="0.4" stroke="#b31238" stroke-width=".2" fill="white">
					<animate class="cy" attributeName="cy" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</circle>
			</g>


			<g id="fazeclan">
				<text class="teamName" transform="translate(12,28)rotate(60)">FaZe Clan</text>
				<line class="bar" x1="12" x2="12" y1="0" y2="26" style="stroke-width:.25" stroke="#e61c24">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="max" x1="11.6" x2="12.4" y1="0" y2="0" style="stroke-width:.25" stroke="#e61c24">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="min" x1="11.6" x2="12.4" y1="26" y2="26" style="stroke-width:.25" stroke="#e61c24">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<circle class="expected" cx="12" cy="13" r="0.4" stroke="#e61c24" stroke-width=".2" fill="white">
					<animate class="cy" attributeName="cy" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</circle>
			</g>


			<g id="teamenvyus">
				<text class="teamName" transform="translate(16,28)rotate(60)">Team EnVyUs</text>
				<line class="bar" x1="16" x2="16" y1="0" y2="26" style="stroke-width:.25" stroke="#1b3164">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="max" x1="15.6" x2="16.4" y1="0" y2="0" style="stroke-width:.25" stroke="#1b3164">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="min" x1="15.6" x2="16.4" y1="26" y2="26" style="stroke-width:.25" stroke="#1b3164">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<circle class="expected" cx="16" cy="13" r="0.4" stroke="#1b3164" stroke-width=".2" fill="white">
					<animate class="cy" attributeName="cy" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</circle>
			</g>


			<g id="teamdignitas">
				<text class="teamName" transform="translate(20,28)rotate(60)">Team Dignitas</text>
				<line class="bar" x1="20" x2="20" y1="0" y2="26" style="stroke-width:.25" stroke="#8d8d8d">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="max" x1="19.6" x2="20.4" y1="0" y2="0" style="stroke-width:.25" stroke="#8d8d8d">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="min" x1="19.6" x2="20.4" y1="26" y2="26" style="stroke-width:.25" stroke="#8d8d8d">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<circle class="expected" cx="20" cy="13" r="0.4" stroke="#8d8d8d" stroke-width=".2" fill="white">
					<animate class="cy" attributeName="cy" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</circle>
			</g>


			<g id="virtuspro">
				<text class="teamName" transform="translate(24,28)rotate(60)">Virtus.pro</text>
				<line class="bar" x1="24" x2="24" y1="0" y2="26" style="stroke-width:.25" stroke="#f36801">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="max" x1="23.6" x2="24.4" y1="0" y2="0" style="stroke-width:.25" stroke="#f36801">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="min" x1="23.6" x2="24.4" y1="26" y2="26" style="stroke-width:.25" stroke="#f36801">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<circle class="expected" cx="24" cy="13" r="0.4" stroke="#f36801" stroke-width=".2" fill="white">
					<animate class="cy" attributeName="cy" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</circle>
			</g>


			<g id="natusvincere">
				<text class="teamName" transform="translate(28,28)rotate(60)">Natus Vincere</text>
				<line class="bar" x1="28" x2="28" y1="0" y2="26" style="stroke-width:.25" stroke="#e5c410">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="max" x1="27.6" x2="28.4" y1="0" y2="0" style="stroke-width:.25" stroke="#e5c410">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="min" x1="27.6" x2="28.4" y1="26" y2="26" style="stroke-width:.25" stroke="#e5c410">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<circle class="expected" cx="28" cy="13" r="0.4" stroke="#e5c410" stroke-width=".2" fill="white">
					<animate class="cy" attributeName="cy" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</circle>
			</g>


			<g id="g2esports">
				<text class="teamName" transform="translate(32,28)rotate(60)">G2 Esports</text>
				<line class="bar" x1="32" x2="32" y1="0" y2="26" style="stroke-width:.25" stroke="#949494">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="max" x1="31.6" x2="32.4" y1="0" y2="0" style="stroke-width:.25" stroke="#949494">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="min" x1="31.6" x2="32.4" y1="26" y2="26" style="stroke-width:.25" stroke="#949494">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<circle class="expected" cx="32" cy="13" r="0.4" stroke="#949494" stroke-width=".2" fill="white">
					<animate class="cy" attributeName="cy" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</circle>
			</g>


			<g id="astralis">
				<text class="teamName" transform="translate(36,28)rotate(60)">Astralis</text>
				<line class="bar" x1="36" x2="36" y1="0" y2="26" style="stroke-width:.25" stroke="#f6303e">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="max" x1="35.6" x2="36.4" y1="0" y2="0" style="stroke-width:.25" stroke="#f6303e">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="min" x1="35.6" x2="36.4" y1="26" y2="26" style="stroke-width:.25" stroke="#f6303e">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<circle class="expected" cx="36" cy="13" r="0.4" stroke="#f6303e" stroke-width=".2" fill="white">
					<animate class="cy" attributeName="cy" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</circle>
			</g>


			<g id="hellraisers">
				<text class="teamName" transform="translate(40,28)rotate(60)">HellRaisers</text>
				<line class="bar" x1="40" x2="40" y1="0" y2="26" style="stroke-width:.25" stroke="#e92028">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="max" x1="39.6" x2="40.4" y1="0" y2="0" style="stroke-width:.25" stroke="#e92028">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="min" x1="39.6" x2="40.4" y1="26" y2="26" style="stroke-width:.25" stroke="#e92028">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<circle class="expected" cx="40" cy="13" r="0.4" stroke="#e92028" stroke-width=".2" fill="white">
					<animate class="cy" attributeName="cy" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</circle>
			</g>


			<g id="heroic">
				<text class="teamName" transform="translate(44,28)rotate(60)">Heroic</text>
				<line class="bar" x1="44" x2="44" y1="0" y2="26" style="stroke-width:.25" stroke="#277235">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="max" x1="43.6" x2="44.4" y1="0" y2="0" style="stroke-width:.25" stroke="#277235">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="min" x1="43.6" x2="44.4" y1="26" y2="26" style="stroke-width:.25" stroke="#277235">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<circle class="expected" cx="44" cy="13" r="0.4" stroke="#277235" stroke-width=".2" fill="white">
					<animate class="cy" attributeName="cy" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</circle>
			</g>


			<g id="pentasports">
				<text class="teamName" transform="translate(48,28)rotate(60)">PENTA Sports</text>
				<line class="bar" x1="48" x2="48" y1="0" y2="26" style="stroke-width:.25" stroke="#333">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="max" x1="47.6" x2="48.4" y1="0" y2="0" style="stroke-width:.25" stroke="#333">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="min" x1="47.6" x2="48.4" y1="26" y2="26" style="stroke-width:.25" stroke="#333">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<circle class="expected" cx="48" cy="13" r="0.4" stroke="#333" stroke-width=".2" fill="white">
					<animate class="cy" attributeName="cy" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</circle>
			</g>


			<g id="flipsid3tactics">
				<text class="teamName" transform="translate(52,28)rotate(60)">FlipSid3 Tactics</text>
				<line class="bar" x1="52" x2="52" y1="0" y2="26" style="stroke-width:.25" stroke="#3aa10b">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="max" x1="51.6" x2="52.4" y1="0" y2="0" style="stroke-width:.25" stroke="#3aa10b">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="min" x1="51.6" x2="52.4" y1="26" y2="26" style="stroke-width:.25" stroke="#3aa10b">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<circle class="expected" cx="52" cy="13" r="0.4" stroke="#3aa10b" stroke-width=".2" fill="white">
					<animate class="cy" attributeName="cy" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</circle>
			</g>

			Sorry, your browser does not support inline SVG.
		</svg>
	</div>

</div>


<div class="rankings-wrapper" id="na">
	<h3>NA EPL Rankings</h3>
	<div>
		<ul>
			<li class="play">PLAY <i class="glyphicon glyphicon-play"></i></li>
			<li weeknum="0" class="active">week 0</li>
			<li weeknum="1">week 1</li>
			<li weeknum="2">week 2</li>
			<li weeknum="3">week 3</li>
			<li weeknum="4">week 4</li>
			<li weeknum="5">week 5</li>
			<li weeknum="6">week 6</li>
			<li weeknum="7">week 7</li>
			<li weeknum="8">week 8</li>
			<li weeknum="9">week 9</li>
			
		</ul>

		<svg viewbox="-2 -1 60 40">
			<text x="-2" y="1">26</text>
			<text x="-2" y="14">13</text>
			<line x1="-2" x2="70" y1="13" y2="13" style="stroke-width:.1" stroke="#777" />
			<line x1="-2" x2="70" y1="0" y2="0" style="stroke-width:.1" stroke="#777" />
			<line x1="-2" x2="70" y1="26" y2="26" style="stroke-width:.1" stroke="#777" />

			<g id="cloud9">
				<text class="teamName" transform="translate(0,28)rotate(60)">Cloud 9</text>
				<line class="bar" x1="0" x2="0" y1="0" y2="26" style="stroke-width:.25" stroke="#008ED1">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="max" x1="-0.4" x2="0.4" y1="0" y2="0" style="stroke-width:.25" stroke="#008ED1">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="min" x1="-0.4" x2="0.4" y1="26" y2="26" style="stroke-width:.25" stroke="#008ED1">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<circle class="expected" cx="0" cy="13" r="0.4" stroke="#008ED1" stroke-width=".2" fill="white">
					<animate class="cy" attributeName="cy" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</circle>
			</g>


			<g id="immortals">
				<text class="teamName" transform="translate(4,28)rotate(60)">Immortals</text>
				<line class="bar" x1="4" x2="4" y1="0" y2="26" style="stroke-width:.25" stroke="#01B2AA">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="max" x1="3.6" x2="4.4" y1="0" y2="0" style="stroke-width:.25" stroke="#01B2AA">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="min" x1="3.6" x2="4.4" y1="26" y2="26" style="stroke-width:.25" stroke="#01B2AA">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<circle class="expected" cx="4" cy="13" r="0.4" stroke="#01B2AA" stroke-width=".2" fill="white">
					<animate class="cy" attributeName="cy" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</circle>
			</g>


			<g id="skgaming">
				<text class="teamName" transform="translate(8,28)rotate(60)">SK Gaming</text>
				<line class="bar" x1="8" x2="8" y1="0" y2="26" style="stroke-width:.25" stroke="#000000">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="max" x1="7.6" x2="8.4" y1="0" y2="0" style="stroke-width:.25" stroke="#000000">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="min" x1="7.6" x2="8.4" y1="26" y2="26" style="stroke-width:.25" stroke="#000000">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<circle class="expected" cx="8" cy="13" r="0.4" stroke="#000000" stroke-width=".2" fill="white">
					<animate class="cy" attributeName="cy" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</circle>
			</g>


			<g id="opticgaming">
				<text class="teamName" transform="translate(12,28)rotate(60)">Optic Gaming</text>
				<line class="bar" x1="12" x2="12" y1="0" y2="26" style="stroke-width:.25" stroke="#9FCA3F">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="max" x1="11.6" x2="12.4" y1="0" y2="0" style="stroke-width:.25" stroke="#9FCA3F">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="min" x1="11.6" x2="12.4" y1="26" y2="26" style="stroke-width:.25" stroke="#9FCA3F">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<circle class="expected" cx="12" cy="13" r="0.4" stroke="#9FCA3F" stroke-width=".2" fill="white">
					<animate class="cy" attributeName="cy" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</circle>
			</g>


			<g id="renegades">
				<text class="teamName" transform="translate(16,28)rotate(60)" style="text-decoration:line-through">Renegades</text>
				<line class="bar" x1="16" x2="16" y1="0" y2="26" style="stroke-width:.25" stroke="#6F000B">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="max" x1="15.6" x2="16.4" y1="0" y2="0" style="stroke-width:.25" stroke="#6F000B">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="min" x1="15.6" x2="16.4" y1="26" y2="26" style="stroke-width:.25" stroke="#6F000B">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<circle class="expected" cx="16" cy="13" r="0.4" stroke="#6F000B" stroke-width=".2" fill="white">
					<animate class="cy" attributeName="cy" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</circle>
			</g>


			<g id="nrgesports">
				<text class="teamName" transform="translate(20,28)rotate(60)">NRG eSports</text>
				<line class="bar" x1="20" x2="20" y1="0" y2="26" style="stroke-width:.25" stroke="#D3007D">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="max" x1="19.6" x2="20.4" y1="0" y2="0" style="stroke-width:.25" stroke="#D3007D">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="min" x1="19.6" x2="20.4" y1="26" y2="26" style="stroke-width:.25" stroke="#D3007D">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<circle class="expected" cx="20" cy="13" r="0.4" stroke="#D3007D" stroke-width=".2" fill="white">
					<animate class="cy" attributeName="cy" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</circle>
			</g>


			<g id="teamliquid">
				<text class="teamName" transform="translate(24,28)rotate(60)">Team Liquid</text>
				<line class="bar" x1="24" x2="24" y1="0" y2="26" style="stroke-width:.25" stroke="#00A9DC">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="max" x1="23.6" x2="24.4" y1="0" y2="0" style="stroke-width:.25" stroke="#00A9DC">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="min" x1="23.6" x2="24.4" y1="26" y2="26" style="stroke-width:.25" stroke="#00A9DC">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<circle class="expected" cx="24" cy="13" r="0.4" stroke="#00A9DC" stroke-width=".2" fill="white">
					<animate class="cy" attributeName="cy" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</circle>
			</g>


			<g id="echofox">
				<text class="teamName" transform="translate(28,28)rotate(60)">Echo Fox</text>
				<line class="bar" x1="28" x2="28" y1="0" y2="26" style="stroke-width:.25" stroke="#E07026">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="max" x1="27.6" x2="28.4" y1="0" y2="0" style="stroke-width:.25" stroke="#E07026">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="min" x1="27.6" x2="28.4" y1="26" y2="26" style="stroke-width:.25" stroke="#E07026">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<circle class="expected" cx="28" cy="13" r="0.4" stroke="#E07026" stroke-width=".2" fill="white">
					<animate class="cy" attributeName="cy" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</circle>
			</g>


			<g id="counterlogicgaming">
				<text class="teamName" transform="translate(32,28)rotate(60)">Counter Logic Gaming</text>
				<line class="bar" x1="32" x2="32" y1="0" y2="26" style="stroke-width:.25" stroke="#065B98">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="max" x1="31.6" x2="32.4" y1="0" y2="0" style="stroke-width:.25" stroke="#065B98">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="min" x1="31.6" x2="32.4" y1="26" y2="26" style="stroke-width:.25" stroke="#065B98">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<circle class="expected" cx="32" cy="13" r="0.4" stroke="#065B98" stroke-width=".2" fill="white">
					<animate class="cy" attributeName="cy" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</circle>
			</g>


			<g id="winterfox">
				<text class="teamName" transform="translate(36,28)rotate(60)">Winter Fox</text>
				<line class="bar" x1="36" x2="36" y1="0" y2="26" style="stroke-width:.25" stroke="#342E64">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="max" x1="35.6" x2="36.4" y1="0" y2="0" style="stroke-width:.25" stroke="#342E64">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="min" x1="35.6" x2="36.4" y1="26" y2="26" style="stroke-width:.25" stroke="#342E64">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<circle class="expected" cx="36" cy="13" r="0.4" stroke="#342E64" stroke-width=".2" fill="white">
					<animate class="cy" attributeName="cy" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</circle>
			</g>


			<g id="complexitygaming">
				<text class="teamName" transform="translate(40,28)rotate(60)">Complexity Gaming</text>
				<line class="bar" x1="40" x2="40" y1="0" y2="26" style="stroke-width:.25" stroke="#DB1F2C">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="max" x1="39.6" x2="40.4" y1="0" y2="0" style="stroke-width:.25" stroke="#DB1F2C">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="min" x1="39.6" x2="40.4" y1="26" y2="26" style="stroke-width:.25" stroke="#DB1F2C">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<circle class="expected" cx="40" cy="13" r="0.4" stroke="#DB1F2C" stroke-width=".2" fill="white">
					<animate class="cy" attributeName="cy" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</circle>
			</g>


			<g id="selflessgaming">
				<text class="teamName" transform="translate(44,28)rotate(60)">Selfless Gaming</text>
				<line class="bar" x1="44" x2="44" y1="0" y2="26" style="stroke-width:.25" stroke="#9E4709">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="max" x1="43.6" x2="44.4" y1="0" y2="0" style="stroke-width:.25" stroke="#9E4709">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="min" x1="43.6" x2="44.4" y1="26" y2="26" style="stroke-width:.25" stroke="#9E4709">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<circle class="expected" cx="44" cy="13" r="0.4" stroke="#9E4709" stroke-width=".2" fill="white">
					<animate class="cy" attributeName="cy" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</circle>
			</g>


			<g id="splyce">
				<text class="teamName" transform="translate(48,28)rotate(60)">Splyce</text>
				<line class="bar" x1="48" x2="48" y1="0" y2="26" style="stroke-width:.25" stroke="#F5C200">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="max" x1="47.6" x2="48.4" y1="0" y2="0" style="stroke-width:.25" stroke="#F5C200">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="min" x1="47.6" x2="48.4" y1="26" y2="26" style="stroke-width:.25" stroke="#F5C200">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<circle class="expected" cx="48" cy="13" r="0.4" stroke="#F5C200" stroke-width=".2" fill="white">
					<animate class="cy" attributeName="cy" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</circle>
			</g>


			<g id="eunited">
				<text class="teamName" transform="translate(52,28)rotate(60)">eUnited</text>
				<line class="bar" x1="52" x2="52" y1="0" y2="26" style="stroke-width:.25" stroke="#AE1517">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="max" x1="51.6" x2="52.4" y1="0" y2="0" style="stroke-width:.25" stroke="#AE1517">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<line class="min" x1="51.6" x2="52.4" y1="26" y2="26" style="stroke-width:.25" stroke="#AE1517">
					<animate class="y1" attributeName="y1" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
					<animate class="y2" attributeName="y2" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</line>
				<circle class="expected" cx="52" cy="13" r="0.4" stroke="#AE1517" stroke-width=".2" fill="white">
					<animate class="cy" attributeName="cy" dur="1000ms" fill="freeze" begin="indefinite"
					keySplines="0.1 0.8 0.2 1" calcMode="spline"/>
				</circle>
			</g>

			Sorry, your browser does not support inline SVG.
		</svg>
	</div>
</div>

All data provided by [liquipedia](http://wiki.teamliquid.net/counterstrike/ESL_ESEA/Pro_League/Season/IV/Europe)

I learned how to animate SVG from scratch to make this animation. I plan on posting next about some of the things I learned while doing that, because I think I put this all together in a unique and pretty sane way, using techniques other data animators might like.
