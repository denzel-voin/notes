<template>
  <div class="about">
    <h1 class="text-3xl font-bold mb-8 text-white">Работа с заметками</h1>
    <form class="flex flex-col gap-4 w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
      <h3 class="text-xl font-semibold text-gray-300">Заголовок:</h3>
      <input
        type="text"
        class="bg-gray-700 p-3 rounded text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
        placeholder="Введите заголовок"
      >
      <h3 class="text-xl font-semibold text-gray-300">Текст:</h3>
      <textarea
        class="bg-gray-700 p-3 rounded text-white h-32 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
        placeholder="Введите текст заметки"
      ></textarea>
      <button
        class="cursor-pointer mt-4 px-6 py-3 bg-fuchsia-700 text-white font-medium rounded hover:bg-fuchsia-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        Добавить заметку
      </button>
    </form>
  </div>
</template>

<style>
.about {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(to bottom right, #1F2937, #111827);
}

@media (max-width: 640px) {
  .about {
    padding: 1rem;
  }

  form {
    width: 100%;
    padding: 1rem;
  }
}

/* Анимация для кнопки */
button {
  transform: translateY(0);
  transition: transform 0.2s ease;
}

button:hover {
  transform: translateY(-1px);
}

button:active {
  transform: translateY(0);
}
</style>
