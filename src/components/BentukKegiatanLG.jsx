import pantiImg from "../assets/panti.jpeg";
import pantiData from "../api/panti.json";
import pantaiData from "../api/pantai.json";
import Title from "./Title";

const BentukKegiatanLG = () => {
	return (
		<>
			<div id="kunjungan" class="flex justify-center  m-20">
				<Title>Daftar Panti Asuhan</Title>
			</div>

			<div class="flex justify-center flex-wrap ">
				{pantiData.map((panti) => {
					return (
						<a
							href={panti.map}
							target="_blank"
							class="relative aspect-square w-64 duration-200 cursor-pointer"
						>
							<div class="flex items-center justify-center ">
								<img
									src={panti.img}
									class="w-52 h-52 object-cover shadow-lg rounded-lg"
								/>
								<div class="absolute flex items-center w-52 h-52 rounded-lg  justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 transition duration-300 ease-in-out">
									<p class="text-white text-2xl font-bold text-center">
										{panti.name}
									</p>
								</div>
							</div>
						</a>
					);
				})}
			</div>

			<div class="flex justify-center  m-20">
				<h1 class="mb-4 text-3xl font-extrabold tracking-tight leading-none text-default md:text-3xl lg:text-5xl text-center">
					Daftar Pantai
				</h1>
			</div>

			<div class="flex justify-center flex-wrap gap-10">
				{pantaiData.map((pantai) => {
					return (
						<a
							href={pantai.map}
							target="_blank"
							class="max-w-sm overflow-hidden rounded-lg p-5 mb-52 shadow-lg"
						>
							<img
								class="w-full aspect-square rounded-lg"
								src={pantai.img}
								alt="Sunset in the mountains"
							></img>
							<div class="px-6 py-4">
								<div class="font-bold text-xl mb-2">
									{pantai.name}
								</div>
								<p class="text-gray-700 text-base">
									{pantai.address}
								</p>
							</div>
						</a>
					);
				})}
			</div>
		</>
	);
};

export default BentukKegiatanLG;
