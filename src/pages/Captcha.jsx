import { createSignal, For, onMount } from "solid-js";
import { Navigate, useNavigate } from "@solidjs/router";

function Cell({ isToggled = False, image }) {
  return (
    <div class="relative h-26 w-26">
      <img
        src={image}
        class={`h-full w-full object-cover ${
          isToggled
            ? "ring-3 ring-blue-700"
            : "transition-shadow duration-300 hover:ring-3 hover:ring-blue-700"
        }`}
      ></img>
    </div>
  );
}

function Grid({ images, answer, cells, clickCell }) {
  return (
    <div class="m-6 grid grid-cols-3 gap-1">
      <For each={cells()}>
        {(cell, index) => (
          <div onClick={() => clickCell(index())}>
            <Cell isToggled={cell} image={images[index()]} />
          </div>
        )}
      </For>
    </div>
  );
}

function Captcha() {
  const numberCaptchas = 5; //Donner le nombre de captchas dont on dispose en fichiers dans public/captchas

  const [info, setInfo] = createSignal(null);
  const [cells, setCells] = createSignal(Array(9).fill(false));
  const [isChecked, setIsChecked] = createSignal(false); //Pour la boite a cocher a la fin

  const navigate = useNavigate();

  const randomInt = Math.floor(Math.random() * numberCaptchas);
  const images = Array.from(
    { length: 9 },
    (_, i) => `/captchas/${randomInt}/${i + 1}.jpg`
  );

  function submitCaptcha() {
    if (!info()) return alert("Data not loaded");

    const userAnswer = cells();
    const res = userAnswer.every((ans, index) => ans === info().answer[index]);

    res ? navigate("/homepage") : location.reload();
  }

  function clickCell(index) {
    const updated = [...cells()];
    updated[index] = !updated[index];
    setCells(updated);
  }

  onMount(async () => {
    const res = await fetch(`/captchas/${randomInt}/info.json`);
    const data = await res.json();
    setInfo(data);
  });

  return (
    <div class="flex h-screen flex-col font-mono items-center justify-center bg-gray-100">
      <div class="flex flex-col h-19/20 border-2 border-gray-300 w-2/5 bg-gray-200 rounded-xl items-center justify-center">
        <h1 class="m-8 mb-4 text-xl font-bold text-center break-words whitespace-normal">
          {info() ? info().question : "Loading..."}
        </h1>{" "}
        <Grid images={images} cells={cells} clickCell={clickCell} />
        <label class="flex items-center space-x-2 cursor-pointer select-none p-4 rounded border-2 border-gray-300 bg-gray-100">
          <input
            type="checkbox"
            class="h-5 w-5 text-blue-600 border-gray-300 rounded"
            checked={false}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <span class="text-sm text-gray-700 font-medium">I ain't no Elf</span>
          <img src="/recaptcha.png" class="h-8 w-8"></img>
        </label>
        <button
          class={`px-4 py-2 m-3 text-white text-sm rounded transition ${
            isChecked()
              ? "bg-blue-600 hover:bg-blue-700 cursor-pointer"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!isChecked()}
          onClick={submitCaptcha}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Captcha;
