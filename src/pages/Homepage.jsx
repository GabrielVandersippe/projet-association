import { createSignal, Switch, Match } from "solid-js";

function Tabs({ tab }) {
  const [selectedDrink, setSelectedDrink] = createSignal(null);

  return (
    <Switch fallback={<div>Page non trouvée</div>}>
      <Match when={tab() === "home"}>
        <div>
          <section class="container mx-auto px-4 py-12">
            <h2 class="text-2xl font-bold mb-4 text-center">Qui sommes-nous ?</h2>
            <p class="max-w-2xl mx-auto text-center">
              Nains vivant reclus dans leur cavernes, nous avons pour ambition
              de venir en aide à tous nos frères ayant sombré dans l'alcoolisme.
              Notre avis ? Il suffit de proposer des boissons bonnes pour la
              santé et riches en fer. (Approuvé par Gimli)
            </p>
          </section>

          <section class="container mx-auto px-4 py-12">
            <h2 class="text-2xl font-bold mb-6 text-center">Nos vedettes</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {/* Casse-Cailloux */}
              <div
                onClick={() =>
                  setSelectedDrink(selectedDrink() === "casse" ? null : "casse")
                }
                class="cursor-pointer"
              >
                <img
                  src="/cristal.jpg"
                  alt="Casse-Cailloux"
                  class="mx-auto rounded-full mb-2"
                />
                <h3 class="font-semibold">Le casse-cailloux</h3>
                <p class="text-sm text-gray-500">
                  Peut aussi désinfecter les haches de guerre
                </p>
                <p class="text-sm text-gray-200">Cliquez pour obtenir la recette</p> 
                {selectedDrink() === "casse" && (
                  <div class="mt-2 text-sm text-gray-300">
                    <p><strong>Recette :</strong></p>
                    <ul class="list-disc list-inside">
                      <li>5 cl de rhum noir</li>
                      <li>2 cl de jus de fer fermenté</li>
                      <li>Glace pilée volcanique</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Bute-Dragons */}
              <div
                onClick={() =>
                  setSelectedDrink(selectedDrink() === "dragon" ? null : "dragon")
                }
                class="cursor-pointer"
              >
                <img
                  src="/dragon.jpg"
                  alt="Glouglou"
                  class="mx-auto rounded-full mb-2"
                />
                <h3 class="font-semibold">Le bute-dragons</h3>
                <p class="text-sm text-gray-500">Réveillez la flamme du nain</p>

              <p class="text-sm text-gray-200">Cliquez pour obtenir la recette</p> 
                {selectedDrink() === "dragon" && (
                  <div class="mt-2 text-sm text-gray-300">
                    <p><strong>Recette :</strong></p>
                    <ul class="list-disc list-inside">
                      <li>3 cl d’élixir de braise</li>
                      <li>2 cl de jus d’orge rouge</li>
                      <li>Pincée de poudre de souffre</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Elfe en solution */}
              <div
                onClick={() =>
                  setSelectedDrink(selectedDrink() === "elfe" ? null : "elfe")
                }
                class="cursor-pointer"
              >
                <img
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/49670208-82a2-4836-8cba-a4542f30c748/diu129h-3c24d93a-805a-4821-a0b6-9db5fe9908cf.jpg/v1/fill/w_894,h_894,q_70,strp/flawed_drink_by_chelutau_diu129h-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzQ5NjcwMjA4LTgyYTItNDgzNi04Y2JhLWE0NTQyZjMwYzc0OFwvZGl1MTI5aC0zYzI0ZDkzYS04MDVhLTQ4MjEtYTBiNi05ZGI1ZmU5OTA4Y2YuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Et39tRHUc243B3dmZJltroZ-6O_Iwj-unOgeT5KWH00"
                  alt="Cristal"
                  class="mx-auto rounded-full mb-2"
                />
                <h3 class="font-semibold">L'elfe en solution</h3>
                <p class="text-sm text-gray-500">Enfin un usage adapté</p>
                <p class="text-sm text-gray-200">Cliquez pour obtenir la recette</p> 
                {selectedDrink() === "elfe" && (
                  <div class="mt-2 text-sm text-gray-300">
                    <p><strong>Recette :</strong></p>
                    <ul class="list-disc list-inside">
                      <li>4 cl d’eau bénite du Valinor</li>
                      <li>2 cl de sirop de fleur d’elfe</li>
                      <li>Feuilles de Lembas macérées</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </Match>

      <Match when={tab() === "brothers"}>
        <div class="flex items-center bg-gray-800 rounded-full shadow-md px-4 py-2 gap-4 text-left hover:bg-gray-700 transition duration-200 m-16">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
            alt="Paul"
            class="w-32 h-32 rounded-full object-cover"
          />
          <div class="text-white">
            <h4 class="font-bold">Paul</h4>
            <p class="text-sm text-gray-400">il est moche</p>
          </div>
        </div>
      </Match>

      <Match when={tab() === "offers"}>
        <div>Nos Offres</div>
      </Match>

      <Match when={tab() === "contact"}>
        <div>Nous Contacter</div>
      </Match>
    </Switch>
  );
}

function Homepage() {
  const [isActive, setIsActive] = createSignal(true);
  const [tab, setTab] = createSignal("home");

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

          <div class="container mx-auto mt-4 flex justify-between">
            <div class="flex-grow text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
              <ul class="flex flex-wrap -mb-px">
                {["home", "brothers", "offers", "contact"].map((t) => (
                  <li class="flex-1 me-2">
                    <button
                      class={`inline-block p-4 ${
                        tab() === t
                          ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                          : "border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                      }`}
                      onClick={() => setTab(t)}
                    >
                      {{
                        home: "Accueil",
                        brothers: "Nos frères",
                        offers: "Nos offres",
                        contact: "Nous contacter",
                      }[t]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <label class="flex justify-between items-center space-x-3 bg-black px-4 py-2 rounded">
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

      <Tabs tab={tab} />

      <footer class="bg-black py-6 text-center text-white">
        <p>&copy; 2025 OTAN. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default Homepage;
