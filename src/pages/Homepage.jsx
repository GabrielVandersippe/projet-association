import { createSignal } from "solid-js";

function Homepage() {
  const [isActive, setIsActive] = createSignal(true);

  return (
    <div
      class={`bg-gray-900 text-white ${
        isActive() ? "font-uncial" : "font-sans"
      }`}
    >
      <header class="bg-black py-12 shadow-md">
        <div>
          <div class="container mx-auto text-center">
            <h1 class="text-4xl font-bold text-white">
              Organisation pour le Traitement de l'Alcoolisme des Nains (OTAN)
            </h1>
            <p class="mt-2 text-xl text-white">Soignons le mal par le mal</p>
          </div>
          <div class="container mx-auto mt-4 flex justify-start">
            <label class="flex items-center space-x-3 bg-black px-4 py-2 rounded">
              <input
                type="checkbox"
                class="sr-only peer"
                checked={true}
                onChange={(e) => setIsActive(e.target.checked)}
              />
              <div
                class="relative w-11 h-6 bg-black peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 
                  peer-checked:after:translate-x-full peer-checked:after:border-white 
                  after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                  after:bg-white after:border-gray-300 after:border after:rounded-full 
                  after:h-5 after:w-5 after:transition-all dark:border-gray-600 
                  peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"
              ></div>
              <span class="text-sm text-white font-medium">
                Police Authentique
              </span>
            </label>
          </div>
        </div>
      </header>
      <section class="container mx-auto px-4 py-12">
        <h2 class="text-2xl font-bold mb-4 text-center">Qui sommes-nous ?</h2>
        <p class="max-w-2xl mx-auto text-center">
          Nains vivant reclus dans leur cavernes, nous avons pour ambition de
          venir en aide à tous nos frères ayant sombré dans l'alcoolisme. Notre
          avis ? Il suffit de proposer des boissons bonnes pour la santé et
          riches en fer. (Approuvé par Gimli)
        </p>
      </section>
      <section class="container mx-auto px-4 py-12">
        <h2 class="text-2xl font-bold mb-6 text-center">Notre offre</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <img
              src="/cristal.jpg"
              alt="Casse-Cailloux"
              class="mx-auto rounded-full mb-2"
            />
            <h3 class="font-semibold">Le casse-cailloux</h3>
            <p class="text-sm text-gray-500">
              Peut aussi désinfecter les haches de guerre
            </p>
          </div>
          <div>
            <img
              src="/dragon.jpg"
              alt="Glouglou"
              class="mx-auto rounded-full mb-2"
            />
            <h3 class="font-semibold">Le bute-dragons</h3>
            <p class="text-sm text-gray-500">Réveillez la flamme du nain</p>
          </div>
          <div>
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/49670208-82a2-4836-8cba-a4542f30c748/diu129h-3c24d93a-805a-4821-a0b6-9db5fe9908cf.jpg/v1/fill/w_894,h_894,q_70,strp/flawed_drink_by_chelutau_diu129h-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzQ5NjcwMjA4LTgyYTItNDgzNi04Y2JhLWE0NTQyZjMwYzc0OFwvZGl1MTI5aC0zYzI0ZDkzYS04MDVhLTQ4MjEtYTBiNi05ZGI1ZmU5OTA4Y2YuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Et39tRHUc243B3dmZJltroZ-6O_Iwj-unOgeT5KWH00"
              alt="Cristal"
              class="mx-auto rounded-full mb-2"
            />
            <h3 class="font-semibold">L'elfe en solution</h3>
            <p class="text-sm text-gray-500">Enfin un usage adapté</p>
          </div>
        </div>
      </section>

      <footer class="bg-black py-6 text-center text-white">
        <p>&copy; 2025 OTAN. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default Homepage;
