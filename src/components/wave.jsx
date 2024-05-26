const Wave = () => {
	return (
		<section className="relative">
			<svg
				width="100%"
				height="100%"
				id="svg"
				viewBox="0 0 1440 390"
				xmlns="http://www.w3.org/2000/svg"
				className="transition duration-300 ease-in-out delay-150"
			>
				<style>
					{`
                        .path-0 {
                            animation: pathAnim-0 4s linear infinite;
                        }
                        @keyframes pathAnim-0 {
                            0% {
                                d: path("M 0,400 L 0,100 C 93.3205741626794,94.51674641148325 186.6411483253588,89.03349282296651 296,97 C 405.3588516746412,104.96650717703349 530.7559808612441,126.38277511961721 624,125 C 717.2440191387559,123.61722488038279 778.3349282296649,99.4354066985646 857,101 C 935.6650717703351,102.5645933014354 1031.9043062200958,129.8755980861244 1132,134 C 1232.0956937799042,138.1244019138756 1336.047846889952,119.0622009569378 1440,100 L 1440,400 L 0,400 Z");
                            }
                            25% {
                                d: path("M 0,400 L 0,100 C 116.9282296650718,94.43062200956939 233.8564593301436,88.86124401913877 327,95 C 420.1435406698564,101.13875598086123 489.5023923444975,118.98564593301435 572,121 C 654.4976076555025,123.01435406698565 750.133971291866,109.19617224880383 837,104 C 923.866028708134,98.80382775119617 1001.9617224880383,102.22966507177033 1101,103 C 1200.0382775119617,103.77033492822967 1320.0191387559807,101.88516746411483 1440,100 L 1440,400 L 0,400 Z");
                            }
                            50% {
                                d: path("M 0,400 L 0,100 C 83.14832535885168,103.71291866028707 166.29665071770336,107.42583732057416 273,116 C 379.70334928229664,124.57416267942584 509.9617224880383,138.00956937799043 620,131 C 730.0382775119617,123.99043062200957 819.8564593301435,96.53588516746413 914,80 C 1008.1435406698565,63.46411483253588 1106.6124401913876,57.846889952153106 1195,63 C 1283.3875598086124,68.1531100478469 1361.6937799043062,84.07655502392345 1440,100 L 1440,400 L 0,400 Z");
                            }
                            75% {
                                d: path("M 0,400 L 0,100 C 124.39234449760764,70.51674641148325 248.78468899521528,41.0334928229665 340,51 C 431.2153110047847,60.9665071770335 489.2535885167465,110.38277511961724 565,109 C 640.7464114832535,107.61722488038276 734.2009569377989,55.435406698564584 842,56 C 949.7990430622011,56.564593301435416 1071.9425837320575,109.8755980861244 1174,126 C 1276.0574162679425,142.1244019138756 1358.0287081339711,121.0622009569378 1440,100 L 1440,400 L 0,400 Z");
                            }
                            100% {
                                d: path("M 0,400 L 0,100 C 93.3205741626794,94.51674641148325 186.6411483253588,89.03349282296651 296,97 C 405.3588516746412,104.96650717703349 530.7559808612441,126.38277511961721 624,125 C 717.2440191387559,123.61722488038279 778.3349282296649,99.4354066985646 857,101 C 935.6650717703351,102.5645933014354 1031.9043062200958,129.8755980861244 1132,134 C 1232.0956937799042,138.1244019138756 1336.047846889952,119.0622009569378 1440,100 L 1440,400 L 0,400 Z");
                            }
                        }

                        .path-1 {
                            animation: pathAnim-1 4s linear infinite;
                        }
                        @keyframes pathAnim-1 {
                            0% {
                                d: path("M 0,400 L 0,233 C 74.68899521531097,251.35406698564594 149.37799043062194,269.7081339712919 243,279 C 336.62200956937806,288.2918660287081 449.17703349282317,288.52153110047846 541,282 C 632.8229665071768,275.47846889952154 703.913875598086,262.2057416267943 818,258 C 932.086124401914,253.7942583732057 1089.1674641148327,258.6555023923445 1200,256 C 1310.8325358851673,253.34449760765548 1375.4162679425835,243.17224880382776 1440,233 L 1440,400 L 0,400 Z");
                            }
                            25% {
                                d: path("M 0,400 L 0,233 C 72.96650717703349,214.86602870813397 145.93301435406698,196.73205741626793 256,200 C 366.066985645933,203.26794258373207 513.2344497607655,227.9377990430622 601,231 C 688.7655502392345,234.0622009569378 717.1291866028708,215.51674641148324 814,220 C 910.8708133971292,224.48325358851676 1076.248803827751,251.99521531100476 1192,258 C 1307.751196172249,264.00478468899524 1373.8755980861245,248.50239234449762 1440,233 L 1440,400 L 0,400 Z");
                            }
                            50% {
                                d: path("M 0,400 L 0,233 C 107.34928229665073,215.88995215311004 214.69856459330146,198.7799043062201 311,211 C 407.30143540669854,223.2200956937799 492.555023923445,264.77033492822966 583,267 C 673.444976076555,269.22966507177034 769.0813397129187,232.13875598086128 858,221 C 946.9186602870813,209.86124401913872 1029.1196172248804,224.67464114832535 1125,231 C 1220.8803827751196,237.32535885167465 1330.44019138756,235.16267942583733 1440,233 L 1440,400 L 0,400 Z");
                            }
                            75% {
                                d: path("M 0,400 L 0,233 C 97.77990430622009,244.45454545454544 195.55980861244018,255.90909090909088 283,262 C 370.4401913875598,268.0909090909091 447.54066985645943,268.81818181818187 544,255 C 640.4593301435406,241.18181818181816 756.2775119617223,212.81818181818178 866,218 C 975.7224880382777,223.18181818181822 1079.3492822966507,261.90909090909093 1174,270 C 1268.6507177033493,278.09090909090907 1354.3253588516745,255.54545454545453 1440,233 L 1440,400 L 0,400 Z");
                            }
                            100% {
                                d: path("M 0,400 L 0,233 C 74.68899521531097,251.35406698564594 149.37799043062194,269.7081339712919 243,279 C 336.62200956937806,288.2918660287081 449.17703349282317,288.52153110047846 541,282 C 632.8229665071768,275.47846889952154 703.913875598086,262.2057416267943 818,258 C 932.086124401914,253.7942583732057 1089.1674641148327,258.6555023923445 1200,256 C 1310.8325358851673,253.34449760765548 1375.4162679425835,243.17224880382776 1440,233 L 1440,400 L 0,400 Z");
                            }
                        }
                    `}
				</style>
				<path
					d="M 0,400 L 0,100 C 93.3205741626794,94.51674641148325 186.6411483253588,89.03349282296651 296,97 C 405.3588516746412,104.96650717703349 530.7559808612441,126.38277511961721 624,125 C 717.2440191387559,123.61722488038279 778.3349282296649,99.4354066985646 857,101 C 935.6650717703351,102.5645933014354 1031.9043062200958,129.8755980861244 1132,134 C 1232.0956937799042,138.1244019138756 1336.047846889952,119.0622009569378 1440,100 L 1440,400 L 0,400 Z"
					stroke="none"
					strokeWidth="0"
					fill="#e8c093"
					fillOpacity="0.53"
					className="transition-all duration-300 ease-in-out delay-150 path-0"
				></path>
				<path
					d="M 0,400 L 0,233 C 74.68899521531097,251.35406698564594 149.37799043062194,269.7081339712919 243,279 C 336.62200956937806,288.2918660287081 449.17703349282317,288.52153110047846 541,282 C 632.8229665071768,275.47846889952154 703.913875598086,262.2057416267943 818,258 C 932.086124401914,253.7942583732057 1089.1674641148327,258.6555023923445 1200,256 C 1310.8325358851673,253.34449760765548 1375.4162679425835,243.17224880382776 1440,233 L 1440,400 L 0,400 Z"
					stroke="none"
					strokeWidth="0"
					fill="#e8c093"
					fillOpacity="1"
					className="transition-all duration-300 ease-in-out delay-150 path-1"
				></path>
			</svg>
		</section>
	);
};

export default Wave;
